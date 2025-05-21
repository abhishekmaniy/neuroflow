'use client';

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
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content: trimmed,
      isUser: true,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    onRegenerateMap(trimmed);

    // Simulated AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: `ai-${Date.now()}`,
        content: "I've updated your mind map based on your input. Let me know if you'd like further changes!",
        isUser: false,
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-full rounded-2xl border border-muted bg-background shadow-md">
      <div className="px-4 py-3 border-b border-muted">
        <h3 className="text-lg font-semibold text-foreground">AI Assistant</h3>
        <p className="text-sm text-muted-foreground">Ask questions or suggest changes to your mind map</p>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`px-4 py-2 max-w-[80%] rounded-xl text-sm leading-relaxed ${
                msg.isUser
                  ? "bg-neuro-primary text-white"
                  : "bg-muted text-foreground"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
        <div ref={endOfMessagesRef} />
      </div>

      <div className="p-3 border-t border-muted">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about your mind map..."
            className="flex-1 px-3 py-2 border border-input rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-neuro-light transition"
          />
          <Button 
            onClick={handleSendMessage}
            size="icon"
            className="bg-neuro-primary hover:bg-neuro-secondary"
            aria-label="Send message"
          >
            <SendIcon size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
