import GradientText from "../GradientText";

interface TechIcon {
  src: string;
  alt: string;
  name?: string;
}

const secondaryGradientColors = getComputedStyle(document.documentElement)
  .getPropertyValue("--color-gradient-secondary")
  .split(",")
  .map((c) => c.trim());

const tools: TechIcon[] = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg",
    alt: "SQL Server",
    name: "SQL Server",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    alt: "GitHub",
    name: "GitHub",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    alt: "Git",
    name: "Git",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
    alt: "Vite",
    name: "Vite",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg",
    alt: "Visual Studio",
    name: "Visual Studio",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
    alt: "VS Code",
    name: "VS Code",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg",
    alt: "IntelliJ",
    name: "IntelliJ",
  },
];

function ToolsCard() {
  return (
    <div
      className={`relative rounded-lg`}
      style={{
        width: "450px",
        height: "176px",
        backgroundColor: "rgba(52, 58, 64, 0.7)", // var(--color-surface-secondary) with 70% opacity
        border: "1px solid var(--color-surface-borders)",
        pointerEvents: "auto",
        backdropFilter: "blur(3px)",
        margin: "1rem",
      }}
    >
      <p
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontSize: "1.5rem",
          fontWeight: "800",
          margin: "2rem",
          fontFamily: "'Montserrat', sans-serif",
          color: "var(--color-text-secondary)",
          lineHeight: "1",
          flexShrink: 0,
          marginBottom: "-1.2rem",
        }}
      >
        <GradientText
          colors={secondaryGradientColors}
          animationSpeed={6.5}
          showBorder={false}
        >
          TOOLS
        </GradientText>
        <br />
      </p>

      <p
        style={{
          margin: "1rem",
          fontFamily: "'Montserrat', sans-serif",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
          fontSize: "0.875rem",
          fontWeight: "400",
          lineHeight: "1.5",
        }}
      >
        Software and utilities that help build, test, and manage applications
        efficiently.
        <br />
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            alignItems: "center",
            marginTop: "1rem",
          }}
        >
          {tools.map((tech, index) => (
            <img
              key={index}
              src={tech.src}
              alt={tech.alt}
              title={tech.name}
              style={{
                width: "20px",
                height: "20px",
                display: "block",
                flexShrink: 0,
                transition: "transform 0.2s ease",
                opacity: 0.8,
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.04)";
                e.currentTarget.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.opacity = "0.8";
              }}
            />
          ))}
        </div>
      </p>
    </div>
  );
}

export default ToolsCard;
