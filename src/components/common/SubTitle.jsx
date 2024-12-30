export default function SubTitle({ text }) {
  return (
    <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>
      <span style={{ marginRight: "10px", color: "#555" }}>•</span>
      {text}
    </h3>
  );
}
