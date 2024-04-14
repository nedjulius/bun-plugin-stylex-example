import stylex from "@stylexjs/stylex";
import { colors } from "./vars.stylex";
import { createRoot } from "react-dom/client";

const styles = stylex.create({
  main: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: colors.secondary,
    height: "100vh",
  },
  primaryText: {
    color: colors.primary,
  },
  heading: {
    fontSize: "24px",
    padding: 0,
    margin: 0,
    fontWeight: "500",
  },
  paragraph: {
    fontSize: "14px",
    fontWeight: "400",
  },
  button: {
    color: "white",
    backgroundColor: {
      default: colors.primary,
      ":hover": "green",
    },
    padding: "5px 10px",
    fontSize: "12px",
    fontWeight: "bold",
    borderRadius: "5px",
    outline: "none",
    border: "none",
    cursor: "pointer",
    transition: {
      default: "200ms",
      ":hover": "200ms",
    },
  },
});

function Button({ onClick, value }: { onClick: () => void; value: string }) {
  return (
    <button onClick={onClick} {...stylex.props(styles.button)}>
      {value}
    </button>
  );
}

function App() {
  return (
    <main {...stylex.props(styles.main)}>
      <h1 {...stylex.props(styles.heading, styles.primaryText)}>
        Bun example app
      </h1>
      <p {...stylex.props(styles.paragraph, styles.primaryText)}>Lorem ipsum</p>
      <Button value="Hello world!" onClick={() => alert("Hello!")} />
    </main>
  );
}

const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);
root.render(<App />);
