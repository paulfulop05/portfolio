import asm_logo from "../../assets/assemblyscript_logo.svg";
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

const proficientLanguages: TechIcon[] = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
    alt: "C",
    name: "C",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    alt: "C++",
    name: "C++",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
    alt: "C#",
    name: "C#",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    alt: "Python",
    name: "Python",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    alt: "Java",
    name: "Java",
  },
];

const familiarLanguages: TechIcon[] = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/lua/lua-original.svg",
    alt: "Lua",
    name: "Lua",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    alt: "JavaScript",
    name: "JavaScript",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    alt: "TypeScript",
    name: "TypeScript",
  },
  {
    src: asm_logo,
    alt: "AssemblyScript",
    name: "AssemblyScript",
  },
];

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
          {proficientLanguages.map((tech, index) => (
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
          {familiarLanguages.map((tech, index) => (
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

export default LanguagesCard;
