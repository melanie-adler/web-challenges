import "./styles.css";

export default function App() {
  return (
    <>
      <Greeting name="Tobias" />
      <Greeting name="Johanna" isCoach />
    </>
  );
}

function Greeting({ name, isCoach }) {
  return <h1>Hello, {isCoach ? "Coach" : name}!</h1>;
}
