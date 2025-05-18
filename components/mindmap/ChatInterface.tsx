'use client'


import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { SendIcon } from "lucide-react";

type Message = {
  id: string;
  content: string;
  isUser: boolean;
};

type ChatInterfaceProps = {
  onRegenerateMap: (message: string) => void;
};

const ChatInterface: React.FC<ChatInterfaceProps> = ({ onRegenerateMap }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "Hi there! I'm your AI assistant. How can I help with your mind map?",
      isUser: false,
    },
  ]);
  const [input, setInput] = useState("");
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content: input,
      isUser: true,
    };
    
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");
    
    // Trigger mind map regeneration
    onRegenerateMap(input);
    
    // Add AI response (would normally come from an API)
    setTimeout(() => {
      const aiResponse: Message = {
        id: `ai-${Date.now()}`,
        content: "I've updated your mind map based on your input. Is there anything specific you'd like me to explain or modify?",
        isUser: false,
      };
      setMessages((prevMessages) => [...prevMessages, aiResponse]);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Auto scroll to the latest message
  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-full bg-white rounded-lg border border-gray-100 shadow-sm">
      <div className="px-4 py-3 border-b border-gray-100">
        <h3 className="text-lg font-semibold">AI Assistant</h3>
        <p className="text-sm text-gray-600">Chat with AI to improve your mind map</p>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                msg.isUser
                  ? "bg-neuro-primary text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
        <div ref={endOfMessagesRef} />
      </div>
      
      <div className="p-3 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Ask about your mind map or suggest improvements..."
            className="flex-1 p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-neuro-light"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <Button 
            onClick={handleSendMessage} 
            className="bg-neuro-primary hover:bg-neuro-secondary"
            size="icon"
          >
            <SendIcon size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
