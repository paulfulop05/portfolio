import GradientText from "../GradientText";

const secondaryGradientColors = getComputedStyle(document.documentElement)
  .getPropertyValue("--color-gradient-secondary")
  .split(",")
  .map((c) => c.trim());

function FrameworksCard() {
  return (
    <div
      className={`relative rounded-lg`}
      style={{
        width: "470px",
        height: "180px",
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
          FRAMEWORKS
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
        Software frameworks and libraries that provide structure, reusable
        components, and tools to build applications efficiently.
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
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/qt/qt-original.svg"
            style={{
              width: "20px",
              height: "20px",
              display: "block",
              flexShrink: 0,
            }}
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            style={{
              width: "23px",
              height: "23px",
              display: "block",
              flexShrink: 0,
            }}
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
            style={{
              width: "23px",
              height: "23px",
              display: "block",
              flexShrink: 0,
            }}
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-plain-wordmark.svg"
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

export default FrameworksCard;
