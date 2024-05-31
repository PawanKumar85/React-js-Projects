import Container from "./Components/Container";

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
      <Container>
        <h1 className="text-center">Days</h1>
        <ol className="list-group">
          {weekDays.map((item) => (
            <li key={item} className="list-group-item text-danger">
              {item}
            </li>
          ))}
        </ol>
      </Container>
      <Container>
        <p className="fw-bold">These are the list of days in a week</p>
      </Container>
      </>
    );
}

export default App;
