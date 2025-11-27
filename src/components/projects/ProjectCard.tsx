import { useState } from "react";
import GradientText from "../GradientText";

const secondaryGradientColors = getComputedStyle(document.documentElement)
  .getPropertyValue("--color-gradient-secondary")
  .split(",")
  .map((c) => c.trim());

interface TechIcon {
  src: string;
  alt: string;
  name?: string;
}

interface ProjectCardProps {
  projectTitle: string;
  projectDescription: string;
  projectImagePath?: string;
  projectGifPath?: string;
  technologiesUsed?: TechIcon[];
  githubUrl?: string;

  // few are not mandatory for now but i will have to make them mandatory later
}

function ProjectCard({
  projectTitle,
  projectDescription,
  projectImagePath,
  projectGifPath,
  technologiesUsed = [],
  githubUrl = "https://github.com/paulfulop05",
}: ProjectCardProps) {
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  return (
    <div
      className="relative rounded-lg flex flex-col"
      style={{
        width: "465px",
        height: "420px",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "var(--color-surface-primary)",
        border: "1px solid var(--color-surface-borders)",
        borderRadius: "1rem",
        overflow: "hidden",
        transition: "border-color 0.2s ease",
      }}
    >
      {/* Title */}
      <div
        style={{
          fontSize: "1.25rem",
          fontWeight: "700",
          padding: "1.25rem 1.5rem 0.75rem 1.5rem",
          fontFamily: "'Montserrat', sans-serif",
          lineHeight: "1.2",
        }}
      >
        <GradientText colors={secondaryGradientColors}>
          {projectTitle}
        </GradientText>
      </div>

      {/* Image Section */}
      <div
        style={{
          position: "relative",
          height: "260px",
          overflow: "hidden",
          margin: "0.75rem 1.6rem",
          background: "transparent",
          borderRadius: "1.2rem",
          cursor: "pointer",
          border: isImageHovered
            ? "2px solid var(--color-surface-secondary)"
            : "2px solid transparent",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={() => setIsImageHovered(true)}
        onMouseLeave={() => setIsImageHovered(false)}
      >
        <img
          src={isImageHovered ? projectGifPath : projectImagePath}
          alt={`${projectTitle} preview`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: "8px",
            transition: "all 0.3s ease",
            opacity: isImageHovered ? 0.9 : 1,
            transform: isImageHovered ? "scale(1.04)" : "scale(1)",
          }}
        />
      </div>

      {/* Content Section */}
      <div
        style={{
          padding: "0.5rem 1rem 0 1rem",
          display: "flex",
          flexDirection: "column",
          flex: 1,
          gap: "0",
        }}
      >
        {/* Description */}
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            color: "var(--color-text-secondary)",
            fontSize: "0.8rem",
            fontWeight: "400",
            lineHeight: "1.4",
            margin: 0,
            flex: 1,
          }}
        >
          {projectDescription}
        </p>
      </div>

      {/* Bottom Section: Technologies and Button */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          padding: "0.5rem 1rem 0.75rem 1rem",
          backgroundColor: "var(--color-surface-primary)",
        }}
      >
        {/* Technologies */}
        {technologiesUsed.length > 0 && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              flex: 1,
            }}
          >
            {technologiesUsed.map((tech, index) => (
              <img
                key={index}
                src={tech.src}
                alt={tech.alt}
                title={tech.name}
                style={{
                  width: "20px",
                  height: "20px",
                  transition: "transform 0.2s ease",
                  opacity: 0.8,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.15)";
                  e.currentTarget.style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.opacity = "0.8";
                }}
              />
            ))}
          </div>
        )}

        {/* Visit Button */}
        <button
          onClick={() =>
            window.open(githubUrl, "_blank", "noopener,noreferrer")
          }
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0.5rem 1rem",
            width: "80px",
            height: "36px",
            backgroundColor: isButtonHovered
              ? "var(--color-text-primary)"
              : "var(--color-surface-primary)",
            color: isButtonHovered
              ? "var(--color-background)"
              : "var(--color-text-secondary)",
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "0.8rem",
            fontWeight: "600",
            borderRadius: "6px",
            textDecoration: "none",
            transition: "all 0.2s ease",
            border: "1px solid var(--color-surface-borders)",
            cursor: "pointer",
            whiteSpace: "nowrap",
            pointerEvents: "auto",
            transform: isButtonHovered ? "translateY(-2px)" : "translateY(0)",
          }}
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
        >
          Visit
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
