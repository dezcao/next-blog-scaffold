export default function BigTitle({ text }) {
  return (
    <h1
      style={{
        fontSize: "36px",
        fontWeight: "bold",
        textAlign: "left",
        margin: "20px 0",
        color: "#333",
      }}
    >
      {text}
    </h1>
  );
}
