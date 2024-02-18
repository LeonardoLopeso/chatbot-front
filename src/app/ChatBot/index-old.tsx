import { useState, useEffect } from "react";

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
import { http } from "@/services/api";

interface ChatMessage {
  message: string;
}

const ChatBot = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [prompt, setPrompt] = useState<string>("");

  const fetchMessage = async () => {
    try {
      const response = await http.post<ChatMessage>('api/posts', { prompt: prompt });
      
      let userPrompt = prompt
      setMessages(prevMessages => [...prevMessages, response.data.message]);
    } catch (error) {
      console.error('Erro ao obter mensagem do chatbot: ', error);
    }
  }

  useEffect(() => {
    fetchMessage();
  },[prompt]);

  const sendPrompt = async () => {
    if (prompt) {
      try {
        const response = await http.post<ChatMessage>('api/posts', { prompt: prompt });
        
        setMessages(prevMessages => [...prevMessages, response.data.message]);
      } catch (error) {
        console.error('Erro ao obter mensagem do chatbot: ', error);
      }
    }

    setPrompt("");
  }

  return (
    <Container>
      <Header>
        <h1>ChatBot</h1>
        <span>Sua central de atendimento</span>
      </Header>

      <HistoryDialog>

        {messages.length === 0 && 
          <>
            <p>Bem vindo(a) ao All Pé</p>
          </>
        }
        {messages.map((dialog, key) => (
          <div key={key}>
            <MessageSend key={key}>{dialog} <AiOutlineUser size={20} fill="#1b662e" /></MessageSend>
            {/* <MessageChatBot>
              <div className="image">
                <Image src={LogoProfile} alt="Logo de perfil da loja" /> 
              </div>
              Olá, eu sou o ChatBot!</MessageChatBot> */}
          </div>
        ))}
      </HistoryDialog>

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
              sendPrompt()
            }
          }}
        />

        <div className="btn-send" onClick={sendPrompt}>
          <VscSend size={22} />
        </div>
      </Footer>
    </Container>
  )
}

export default ChatBot;