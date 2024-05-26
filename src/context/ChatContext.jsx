import React, { createContext, useContext, useState } from "react";

const ChatContext = createContext();

export const useChat = () => useContext(ChatContext);

export const ChatProvider = ({ children }) => {
  const [openChat, setOpenChat] = useState(false);

  const openChatDialog = () => setOpenChat(true);
  const closeChatDialog = () => setOpenChat(false);

  return (
    <ChatContext.Provider value={{ openChat, openChatDialog, closeChatDialog }}>
      {children}
    </ChatContext.Provider>
  );
};
