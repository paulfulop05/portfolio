import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  vscDarkPlus,
  atomDark,
  dracula,
  nord,
  tomorrow,
  twilight,
  prism,
  okaidia,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import SpotlightCard from "./SpotlightCard";

interface CodeCardProps {
  code: string;
  language?: string;
  title?: string;
  showLineNumbers?: boolean;
  theme?:
    | "oneDark"
    | "vscDarkPlus"
    | "atomDark"
    | "dracula"
    | "nord"
    | "tomorrow"
    | "twilight"
    | "prism"
    | "okaidia";
  showCopyButton?: boolean;
  showHeader?: boolean;
  maxHeight?: string;
  className?: string;
}

const themes = {
  oneDark,
  vscDarkPlus,
  atomDark,
  dracula,
  nord,
  tomorrow,
  twilight,
  prism,
  okaidia,
};

export default function CodeCard({
  code,
  language = "cpp",
  showLineNumbers = false,
  theme = "oneDark",
  maxHeight = "500px",
  className = "",
}: CodeCardProps) {
  return (
    <SpotlightCard
      className="!p-0 !overflow-visible !rounded-2xl !border-0 !bg-transparent !mx-auto"
      spotlightColor="var(--color-spotlight-color)"
      style={{ width: "650px" }}
    >
      <div
        className={`relative rounded-2xl shadow-2xl overflow-hidden ${className}`}
        style={{
          width: "650px",
          backgroundColor: "var(--color-surface-secondary)",
          border: "1px solid var(--color-surface-borders)",
          pointerEvents: "auto",
        }}
      >
        {/* Code Content */}
        <div
          className="overflow-auto"
          style={{
            maxHeight,
            filter: "brightness(1) contrast(1.23)",
          }}
        >
          <SyntaxHighlighter
            language={language}
            style={themes[theme]}
            customStyle={{
              background: "transparent",
              padding: "1.5rem 2rem",
              margin: 0,
              fontSize: "0.95rem",
              lineHeight: "1.6",
            }}
            showLineNumbers={showLineNumbers}
            lineNumberStyle={{
              minWidth: "3em",
              paddingRight: "1em",
              color: "#6b7280",
              userSelect: "none",
            }}
            wrapLines={false}
            wrapLongLines={false}
            lineProps={() => ({
              style: { display: "block", background: "transparent" },
            })}
            codeTagProps={{
              style: {
                background: "transparent",
              },
            }}
          >
            {code}
          </SyntaxHighlighter>
        </div>
      </div>
    </SpotlightCard>
  );
}

// Example usage with default C++ code
const defaultCode = `#include <iostream>

int main() {
    std::cout << "Performance-focused development\\n";
    std::cout << "Strong fundamentals in DSA\\n";
    std::cout << "Complex problem solving\\n";
    std::cout << "Pragmatic and clean code\\n";

    return 0;
}`;

export function ExampleCodeCard() {
  return (
    <CodeCard
      code={defaultCode}
      language="cpp"
      title="main.cpp"
      showLineNumbers={true}
      theme="oneDark"
      showCopyButton={true}
    />
  );
}
