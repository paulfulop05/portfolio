import asm_logo from "../../assets/assemblyscript_logo.svg";
import GradientText from "../GradientText";

const secondaryGradientColors = getComputedStyle(document.documentElement)
  .getPropertyValue("--color-gradient-secondary")
  .split(",")
  .map((c) => c.trim());

function LanguagesCard() {
  return (
    <div
      className={`relative rounded-lg`}
      style={{
        width: "500px",
        height: "390px",
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
        }}
      >
        <GradientText
          colors={secondaryGradientColors}
          animationSpeed={6.5}
          showBorder={false}
        >
          {" "}
          LANGUAGES{" "}
        </GradientText>
        <br />
      </p>

      <p
        style={{
          fontSize: "1.3rem",
          fontWeight: "700",
          margin: "1rem",
          fontFamily: "'Montserrat', sans-serif",
          color: "var(--color-text-secondary)",
          lineHeight: "1",
          flexShrink: 0,
          marginBottom: "2rem",
        }}
      >
        Proficient
        <br />
        <span
          style={{
            display: "block",
            marginTop: "0.7rem",
            marginBottom: "-0.7rem",
            fontSize: "0.875rem",
            fontWeight: "400",
            lineHeight: "1.5",
          }}
        >
          I have used these programming languages in various projects throughout
          my journey.
        </span>
        <br />
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            alignItems: "center",
            marginTop: "0.5rem",
          }}
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
            style={{
              width: "20px",
              height: "20px",
              display: "block",
              flexShrink: 0,
            }}
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
            style={{
              width: "23px",
              height: "23px",
              display: "block",
              flexShrink: 0,
            }}
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
            style={{
              width: "23px",
              height: "23px",
              display: "block",
              flexShrink: 0,
            }}
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
            style={{
              width: "23px",
              height: "23px",
              display: "block",
              flexShrink: 0,
            }}
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
            style={{
              width: "23px",
              height: "23px",
              display: "block",
              flexShrink: 0,
            }}
          />
        </div>
      </p>

      <p
        style={{
          fontSize: "1.3rem",
          fontWeight: "700",
          margin: "1rem",
          fontFamily: "'Montserrat', sans-serif",
          color: "var(--color-text-secondary)",
          lineHeight: "1",
          flexShrink: 0,
        }}
      >
        Familiar
        <br />
        <span
          style={{
            display: "block",
            marginTop: "0.7rem",
            marginBottom: "-0.7rem",
            fontSize: "0.875rem",
            fontWeight: "400",
            lineHeight: "1.5",
          }}
        >
          I have worked with these programming languages at least once in my
          life, but I dont have as much experience.
        </span>
        <br />
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            alignItems: "center",
            marginTop: "0.5rem",
          }}
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/lua/lua-original.svg"
            style={{
              width: "22px",
              height: "22px",
              display: "block",
              flexShrink: 0,
            }}
          />
          <i className="devicon-bash-plain" style={{ fontSize: "22px" }}></i>
          <img
            src={asm_logo}
            style={{
              width: "22px",
              height: "22px",
              display: "block",
              flexShrink: 0,
            }}
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            style={{
              width: "22px",
              height: "22px",
              display: "block",
              flexShrink: 0,
            }}
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
            style={{
              width: "22px",
              height: "22px",
              display: "block",
              flexShrink: 0,
            }}
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
            style={{
              width: "22px",
              height: "22px",
              display: "block",
              flexShrink: 0,
            }}
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
            style={{
              width: "22px",
              height: "22px",
              display: "block",
              flexShrink: 0,
            }}
          />
        </div>
      </p>
    </div>
  );
}

export default LanguagesCard;
