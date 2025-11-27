import GradientText from "../GradientText";
import { Tooltip, TooltipTrigger, TooltipContent } from "../Tooltip";

interface TechIcon {
  src: string;
  alt: string;
  name?: string;
}

const secondaryGradientColors = getComputedStyle(document.documentElement)
  .getPropertyValue("--color-gradient-secondary")
  .split(",")
  .map((c) => c.trim());

const frameworks: TechIcon[] = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/qt/qt-original.svg",
    alt: "Qt",
    name: "Qt",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    alt: "React",
    name: "React",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    alt: "Tailwind CSS",
    name: "Tailwind CSS",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-plain-wordmark.svg",
    alt: ".NET",
    name: ".NET",
  },
];

function FrameworksCard() {
  return (
    <div
      className={`relative rounded-lg`}
      style={{
        width: "470px",
        height: "195px",
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
          FRAMEWORKS
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
          {frameworks.map((tech, index) => (
            <Tooltip>
              <TooltipTrigger asChild>
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
              </TooltipTrigger>
              <TooltipContent>{tech.name}</TooltipContent>
            </Tooltip>
          ))}
        </div>
      </p>
    </div>
  );
}

export default FrameworksCard;
