import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 0, name: "🍌 banana", color: "yellow" },
    { id: 1, name: "🍎 apple", color: "red" },
    { id: 2, name: "🍐 pear", color: "green" },
    { id: 3, name: "🍋 lemon", color: "yellow" },
    { id: 4, name: "🍊 orange", color: "orange" },
  ];

  return (
    <div className="app">
      {fruits.map(({ id, name, color }) => (
        <ul key={id}>
          <Card id={id} name={name} color={color} />
        </ul>
      ))}
    </div>
  );
}
