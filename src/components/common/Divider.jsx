export default function Divider({ text }) {
  return (
    <div style={{ display: "flex", alignItems: "center", margin: "40px 0" }}>
      <div style={{ flex: 1, height: "1px", backgroundColor: "#ccc" }}></div>
      {text && <span style={{ margin: "0 10px", color: "#666", fontSize: "14px" }}>{text}</span>}
      <div style={{ flex: 1, height: "1px", backgroundColor: "#ccc" }}></div>
    </div>
  );
}
