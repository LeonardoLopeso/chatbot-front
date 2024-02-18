import styled from "styled-components";

export const Container = styled.div``;

export const Header = styled.header`
  padding: 1rem 2rem;
  border-bottom: 1px solid #EDEDED;
`;

export const HistoryDialog = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 176px);
  padding: 2rem;

  overflow-y: auto;
  background-color: #f1f5f7;

  .welcome {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    height: 100%;

    span {
      color: #777;
      font-size: 1.2rem;
    }
  }
  
  &::-webkit-scrollbar-track {
    background-color: #F4F4F4;
  }
  &::-webkit-scrollbar {
    width: 5px;
    background: #F4F4F4;
  }
  &::-webkit-scrollbar-thumb {
    background: #4e6d56;
  }

  .loader, .loader:before, .loader:after {
    border-radius: 50%;
    width: 2em;
    height: 2em;
    animation-fill-mode: both;
    animation: bblFadInOut 1.2s infinite ease-in-out;
  }
  .loader {
    color: #444;
    font-size: 7px;
    position: relative;
    text-indent: -9999em;
    transform: translateZ(0);
    animation-delay: -0.16s;
  }
  .loader:before,
  .loader:after {
    content: '';
    position: absolute;
    top: 0;
  }
  .loader:before {
    left: -3.5em;
    animation-delay: -0.32s;
  }
  .loader:after {
    left: 3em;
  }

  @keyframes bblFadInOut {
    0%, 80%, 100% { box-shadow: 0 2.5em 0 -1.3em }
    40% { box-shadow: 0 2.5em 0 0 }
  }
`;

export const MessageSend = styled.div`
  display: flex;
  gap: 1rem;

  text-align: right;
  margin-left: auto;
  margin-bottom: 1rem;
  
  .message {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    padding: .5rem 1rem;
    color: #444;
    background-color: #7bdcb5;
    border-radius: .5rem;
    border-top-right-radius: 0;
    box-shadow: 1px 2px 25px 8px rgba(0,0,0, .050);

    span {
      color: #555;
      font-size: .6rem;
    }
  }
`;

export const MessageChatBot = styled.div`
  display: flex;
  gap: 1rem;

  text-align: left;
  margin-right: auto;
  margin-bottom: 1rem;
  
  .message {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    padding: .5rem 1rem;
    color: #fff;
    background-color: #1b662e;
    border-radius: .5rem;
    border-top-left-radius: 0;
    box-shadow: 1px 2px 25px 8px rgba(0,0,0, .050);

    span {
      color: #ededed;
      font-size: .6rem;
    }
  }

  .image {
    width: 26px;
    height: 26px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  gap: .5rem;
  padding: 1.2rem 1rem;
  
  /* border-top: 1px solid #20ac42; */
  box-shadow: 1px 2px 25px 8px rgba(0,0,0, .050);

  input {
    width: 100%;
    height: 46px;
    font-size: 1rem;

    padding-left: 1rem;
    border: 1px solid rgba(0,0,0, .2);
    border-radius: .5rem;
    outline: none;
    background-color: #f1f5f7;
  }

  .btn-send {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 66px;
    height: 44px;

    /* border-radius: 50%; */
    cursor: pointer;
    transition: all .3s ease;

    &:hover {
      transform: rotate(-135deg) scale(1.1);
      
      svg {
        fill: green;
      }
    }
  }
`;