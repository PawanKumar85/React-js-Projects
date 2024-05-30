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

  if (weekDays.length === 0) return <h2 className="text-danger">Empty List</h2>;
  else
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
