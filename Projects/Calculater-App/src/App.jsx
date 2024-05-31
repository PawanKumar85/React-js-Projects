import Header from "./Components/Header";
import style from "./App.module.css";
import Btns from "./Components/Btns";
import InputField from "./Components/InputField";
function App() {
  const btns = [
    "AC",
    "C",
    "+/-",
    "÷",
    "7",
    "8",
    "9",
    "X",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "%",
    "0",
    ".",
    "=",
  ];
  return (
    <>
      <Header text="Calculater App" />
      <div className={style.calculater}>
        <InputField />
        <div className={style.buttonsContainer}>
          {btns.map((item) => (
            <Btns btnName={item} key={item} />
          ))}
        </div>
      </div>
    </>
  );
}
export default App;
