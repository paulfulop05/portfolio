import GradientText from "../GradientText";
import ConceptCard from "./ConceptCard";

const secondaryGradientColors = getComputedStyle(document.documentElement)
  .getPropertyValue("--color-gradient-secondary")
  .split(",")
  .map((c) => c.trim());

function ConceptsCard() {
  return (
    <div
      className={`relative rounded-lg`}
      style={{
        width: "500px",
        height: "225px",
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
          CONCEPTS
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
        Core principles and techniques that guide writing efficient, organized,
        and maintainable code.
        <br />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            alignItems: "center",
            marginTop: "1rem",
          }}
        >
          <ConceptCard text={"Object-Oriented Programming"} />
          <ConceptCard text={"Data Structures"} />
          <ConceptCard text={"Algorithms"} />
          <ConceptCard text={"Software Engineering Principles"} />
        </div>
      </p>
    </div>
  );
}

export default ConceptsCard;
