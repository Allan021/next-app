export const DarkLayout = ({ children }) => {
  return (
    <div
      style={{
        background: "#cde",
        border: "2px solid #222",
        padding: 10,
        textAlign: "center",
      }}
    >
      {children}
    </div>
  );
};
