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
      }}
    >
      {text}
    </span>
  );
}

export default ConceptCard;
