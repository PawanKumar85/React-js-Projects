function App() {
  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return (
    <>
      <h1>Days</h1>
      <ol className="list-group">
        {weekDays.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ol>
    </>
  );
}

export default App;
