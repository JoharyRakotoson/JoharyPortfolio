type ProjectCardProps = {
  title: string;
  tag: string;
  description?: string;
  index: number;
  total: number;
};

export default function ProjectCard({ title, tag, description, index, total }: ProjectCardProps) {
  return (
    <div
      style={{
        width: "230px",
        height: "400px",
        marginLeft: index === 0 ? "0" : "2px",
        marginTop: index === 0 || index === total - 1 ? "100px" : index === 1 || index === total - 2 ? "60px" : "20px",
        marginBottom: index === 0 || index === total - 1 ? "0px" : "0px",
        borderRadius: "24px",
        padding: "1.2rem",
        color: "#fff",
        background: "linear-gradient(135deg, #111827 0%, #ef4444 100%)",
        boxShadow: "0 16px 36px rgba(0,0,0,0.28)",
        transform: `rotate(${index < 2 ? -8 : index < 4 ? -3 : index < 6 ? 3 : 8}deg)`,
        border: "1px solid rgba(255,255,255,0.2)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        flexShrink: 0,
        position: "relative",
        transformOrigin: "top center",
        zIndex: total - index,
      }}
    >
      <div style={{ fontSize: "0.75rem", letterSpacing: "0.2em", opacity: 0.8 }}>
        {tag}
      </div>
      <div>
        <div style={{ fontSize: "1rem", fontWeight: 700 }}>{title}</div>
        <div style={{ marginTop: "0.35rem", fontSize: "0.8rem", opacity: 0.9 }}>
          {description ?? "Projet visible & moderne"}
        </div>
      </div>
    </div>
  );
}
