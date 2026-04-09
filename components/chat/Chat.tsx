"use client";

import { useChat } from "ai/react";
import type { CHAT_PROFILE_QUERYResult } from "@/sanity.types";
import { useSidebar } from "../ui/sidebar";
import { X, Send } from "lucide-react";
import { useEffect, useRef } from "react";

export function Chat({
  profile,
}: {
  profile: CHAT_PROFILE_QUERYResult | null;
}) {
  const { toggleSidebar } = useSidebar();
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
    body: { profile }
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const fullName = profile?.firstName 
    ? [profile.firstName, profile.lastName].filter(Boolean).join(" ")
    : "Me";

  return (
    <div className="flex flex-col h-full w-full bg-background border-l border-border relative">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border bg-card">
        <h3 className="font-semibold text-foreground">Chat with {fullName}</h3>
        <button 
          onClick={() => toggleSidebar()} 
          className="text-muted-foreground hover:text-foreground transition-colors p-1"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Message Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center p-6 text-center text-muted-foreground bg-muted/50 rounded-lg h-full">
            <p>
              Hi! Ask me anything about {fullName}'s background, engineering capabilities, or projects like BankLedger and Nutino.
            </p>
          </div>
        ) : (
          messages.map((m) => (
            <div key={m.id} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
              <div 
                className={`max-w-[80%] rounded-xl px-4 py-2 ${
                  m.role === "user" 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-muted text-foreground"
                }`}
              >
                <span className="text-xs font-semibold uppercase opacity-50 block mb-1">
                  {m.role === "user" ? "You" : "Satabarto's AI Agent"}
                </span>
                <p className="whitespace-pre-wrap text-sm leading-relaxed">{m.content}</p>
              </div>
            </div>
          ))
        )}
        {isLoading && (
          <div className="flex justify-start">
            <div className="max-w-[80%] rounded-xl px-4 py-2 bg-muted text-foreground flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-foreground/30 animate-pulse"></span>
              <span className="w-2 h-2 rounded-full bg-foreground/30 animate-pulse delay-75"></span>
              <span className="w-2 h-2 rounded-full bg-foreground/30 animate-pulse delay-150"></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <form onSubmit={handleSubmit} className="p-4 border-t border-border bg-card">
        <div className="relative">
          <input
            className="w-full bg-background border border-border text-foreground rounded-full px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
            value={input}
            placeholder="Ask about my systems expertise..."
            onChange={handleInputChange}
            disabled={isLoading}
          />
          <button 
            type="submit" 
            disabled={isLoading || !input.trim()}
            className="absolute right-2 top-2 p-1 bg-primary text-primary-foreground rounded-full disabled:opacity-50 hover:bg-primary/90 transition-colors"
          >
            <Send className="w-4 h-4 m-1" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Chat;
