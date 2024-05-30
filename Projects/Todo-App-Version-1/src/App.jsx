import AppName from "./components/AppName";
import List from "./components/ListItems";
import InputField from "./components/InputField";
import Version from "./components/VersionNo";

function App() {
  const Items = [
    {
      name: "Buy Milk",
      date: "30 / 10 / 2024",
    },
    {
      name: "Go to Collage",
      date: "30 / 10 / 2024",
    },
    {
      name: "Market",
      date: "31 / 10 / 2024",
    },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <InputField />

      <div className="items-container">
        {Items.map((item) => (
          <List itemname={item.name} date={item.date} key={item.name} />
        ))}
      </div>

      <Version />
    </center>
  );
}
export default App;
