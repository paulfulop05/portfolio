import GradientText from "../GradientText";

const secondaryGradientColors = getComputedStyle(document.documentElement)
  .getPropertyValue("--color-gradient-secondary")
  .split(",")
  .map((c) => c.trim());

function ToolsCard() {
  return (
    <div
      className={`relative rounded-lg`}
      style={{
        width: "450px",
        height: "165px",
        backgroundColor: "rgba(52, 58, 64, 0.7)", // var(--color-surface-secondary) with 70% opacity
        border: "2px solid var(--color-surface-borders)",
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
          lineHeight: "1",
          flexShrink: 0,
          fontSize: "0.9rem",
          fontWeight: "450",
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
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg"
            style={{
              width: "20px",
              height: "20px",
              display: "block",
              flexShrink: 0,
            }}
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
            style={{
              width: "23px",
              height: "23px",
              display: "block",
              flexShrink: 0,
            }}
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
            style={{
              width: "23px",
              height: "23px",
              display: "block",
              flexShrink: 0,
            }}
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
            style={{
              width: "23px",
              height: "23px",
              display: "block",
              flexShrink: 0,
            }}
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg"
            style={{
              width: "23px",
              height: "23px",
              display: "block",
              flexShrink: 0,
            }}
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
            style={{
              width: "23px",
              height: "23px",
              display: "block",
              flexShrink: 0,
            }}
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg"
            style={{
              width: "23px",
              height: "23px",
              display: "block",
              flexShrink: 0,
            }}
          />
        </div>
      </p>
    </div>
  );
}

export default ToolsCard;
