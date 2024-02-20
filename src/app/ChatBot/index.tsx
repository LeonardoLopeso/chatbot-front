import { useEffect, useState } from "react";
import {
  Container,
  Footer,
  Header,
  HistoryDialog,
  MessageChatBot,
  MessageSend
} from "./styled";

import { VscSend } from "react-icons/vsc";
import { AiOutlineUser } from "react-icons/ai";
import Image from "next/image";

import LogoProfile from '@/assets/img/logo-profile.png'
import Logo from '@/assets/img/logo_grande.png'
import { getFormattedDateTime } from "../utils/helpers";
import { http } from "@/services/api";
import { motion } from 'framer-motion'

// Define o tipo da propriedade message
type ChatMessageProps = {
  message: string; // Definindo o tipo como string
  delay: number;
};


const ChatBot = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [dialog, setDialog] = useState<string[]>([]);

  const sendPrompt = async () => {
    let prop = prompt
    setPrompt("");
    
    if (prop) {
      try {
        await http.post<ChatMessageProps>('http://localhost:8000/api/v1/chat/', { prompt: prop }).then((res)=>{
        if (res.status === 200){
          setDialog(prevMessages => [...prevMessages, res.data.message]);
        }
        });
      } catch (error) {
        console.error('Erro ao obter mensagem do chatbot: ', error);
      }
    }

  }

  // Define o componente ChatBotMessage
  const ChatBotMessage: React.FC<ChatMessageProps> = ({ message, delay }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay);

      return () => clearTimeout(timer);
    }, [delay]);

    return (
      <div className="message">
        {message}
        <span>{getFormattedDateTime()}</span>
      </div>
    );
  };

  return (
    <Container>
      <Header>
        <h1>ChatBot</h1>
        <span style={{ color: '#777' }}>Sua central de atendimento</span>
      </Header>

      <HistoryDialog>

        {dialog.length === 0 &&
          <motion.div
            className="welcome"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "just",
              damping: 9,
              mass: .4,
              stiffness: 150,
              duration: .3,
            }}
          >
              <div className="image">
                <Image src={Logo} alt="Logo de perfil da loja" />
              </div>
              <span>Bem vindo(a) ao All Pé</span>
            {/* <span className="loader"></span> */}
          </motion.div>
        }
        {dialog.map((dialog, key) => {
          return (
            <>

              {key % 2 === 0 ?
                <MessageSend key={key}>
                  <motion.div
                    initial={{ x: 10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      type: "spring",
                      damping: 9,
                      mass: .4,
                      stiffness: 150,
                      duration: 1,
                      delay: .4
                    }}
                  >
                    <div className="message">
                      {dialog}
                      <span>{getFormattedDateTime()}</span>
                    </div>
                  </motion.div>
                  <AiOutlineUser size={20} fill="#1b662e" />
                </MessageSend>
                :
                <motion.div
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    damping: 9,
                    mass: .4,
                    stiffness: 150,
                    duration: 1,
                    delay: 1
                  }}
                >
                  <MessageChatBot>
                    <div className="image">
                      <Image src={LogoProfile} alt="Logo de perfil da loja" />
                    </div>
                    <ChatBotMessage message={dialog} delay={2000} />
                  </MessageChatBot>
                </motion.div>
              }
            </>
          )
        })}
      </HistoryDialog >

      <Footer>
        <input
          type="text"
          name="prompt"
          id="prompt"
          placeholder="Insira sua pergunta..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              sendPrompt();
              setDialog(prevMessages => [...prevMessages, prompt]);
            }
          }}
        />

        <div className="btn-send" onClick={sendPrompt}>
          <VscSend size={22} title="Enviar mensagem" />
        </div>
      </Footer>
    </Container>
  )
}

export default ChatBot;