interface ConceptCardProps {
  text: string;
}

function ConceptCard({ text }: ConceptCardProps) {
  return (
    <span
      style={{
        padding: "0.4rem 0.8rem",
        backgroundColor: "var(--color-concept-card)",
        color: "var(--color-text-secondary)",
        borderRadius: "0.7rem",
        fontSize: "0.85rem",
        fontWeight: "600",
        fontFamily: "'Montserrat', sans-serif",
        border: "1px solid var(--color-surface-borders)",
        display: "inline-block",
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
    >
      {text}
    </span>
  );
}

export default ConceptCard;
