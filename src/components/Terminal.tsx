"use client";
import { cn } from "@/lib/utils";
import { useState, useRef } from "react";
import { TypingAnimation } from "./TypingAnimation";

interface TerminalProps {
  className?: string;
  onCommand?: (
    command: string,
    addResponse: (response: string) => void,
    clearTerminal: () => void
  ) => void;
  initialHistory?: Array<{ text: string; typing?: boolean }>;
  prompt?: string;
}

export const Terminal = ({
  className,
  onCommand,
  initialHistory = [],
  prompt = ">",
}: TerminalProps) => {
  const [history, setHistory] = useState<
    Array<{ text: string; typing?: boolean; key: number }>
  >(initialHistory.map((item, i) => ({ ...item, key: i })));
  const [input, setInput] = useState("");
  const [keyCounter, setKeyCounter] = useState(initialHistory.length);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const addResponse = (response: string) => {
    setKeyCounter((prev) => prev + 1);
    setHistory((prev) => [
      ...prev,
      { text: response, typing: true, key: keyCounter },
    ]);
  };

  const clearTerminal = () => {
    setHistory([]);
    setKeyCounter(0);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (input.trim()) {
        if (onCommand) {
          onCommand(input, addResponse, clearTerminal);
        }
        setInput("");
      }
    }
  };

  return (
    <div
      className={cn(
        "z-0 w-full max-w-2xl rounded-xl overflow-hidden relative",
        className
      )}
      style={{
        backgroundColor: "var(--color-surface-primary)",
        border: "1px solid var(--color-surface-borders)",
        height: "275px",
        display: "flex",
        flexDirection: "column",
      }}
      onClick={() => {
        inputRef.current?.focus();
        setIsFocused(true);
      }}
    >
      {!isFocused && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-50">
          <div
            className="text-base font-mono text-white px-6 py-3 rounded-lg shadow-lg"
            style={{
              backgroundColor: "var(--color-surface-secondary)",
            }}
          >
            Tap/click to type
          </div>
        </div>
      )}
      <div
        className="flex-1 overflow-y-auto p-4 terminal-scrollbar"
        style={{ minHeight: 0 }}
      >
        {history.map((item) => (
          <div key={item.key} className="text-sm font-mono text-white mb-3">
            {item.typing ? (
              <TypingAnimation duration={15}>{item.text}</TypingAnimation>
            ) : (
              item.text
            )}
          </div>
        ))}
      </div>
      <div
        className="p-4 pt-2 flex-shrink-0"
        style={{ borderTop: "1px solid var(--color-surface-borders)" }}
      >
        <div className="text-sm font-mono text-white flex items-center">
          <span>{prompt}</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="absolute opacity-0 pointer-events-none"
          />
          <span className="ml-2 whitespace-pre">
            {input}
            <span className="inline-block animate-[blink_1s_step-end_infinite]">
              █
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};
