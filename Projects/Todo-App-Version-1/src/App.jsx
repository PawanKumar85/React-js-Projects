import AppName from "./components/AppName";
import List from "./components/ListItems";
import InputField from "./components/InputField";
import Test from "./components/Test";
import Version from "./components/VersionNo";
function App() {
  return (
    <center className="todo-container">
      <AppName />
      <InputField />

      <div className="items-container">
        <List itemname="Buy Milk" date="30-05-2024" btnName="Delete" />
        <List itemname="Go to Collage" date="30-05-2024" btnName="Delete" />
      </div>

      <Version/>
    </center>
  );
}
export default App;
