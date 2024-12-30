export default function SubLine({ text }) {
  return (
    <h3 style={{ fontSize: "16px", marginTop: "1.5em", marginBottom: "10px" }}>
      {/* <span style={{ marginRight: "10px", color: "#555" }}>•</span> */}
      <strong>{text}</strong>
    </h3>
  );
}
