import { useState } from "react";

function App() {
  const [user,setuser] = useState("");

  async function getData() {
    const data = await fetch(`https://api.github.com/users/pawan6307032`);
    const res = await data.json();
    setuser(res);
    console.log(res.name);
  }

  return (
    <>
    <h1>User</h1>
    <h1>{user.name}</h1>
    <img src={user.avatar_url} alt={user.name}/>
    <br />
    <button onClick={getData}>Click Me</button>
    </>
  );
}

export default App;
