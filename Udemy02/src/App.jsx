import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

// App Section
export default function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

// Header Section
function Header() {
  return (
    <header className="header">
      <h1>Zomato</h1>
    </header>
  );
}

// Menu Section
function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizza = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizza > 0 ? (
        <>
          <Menu_Title />
          <Menu_if piz={pizzas} />
        </>
      ) : (
        <Menu_else />
      )}
    </main>
  );
}

function Menu_Title() {
  return (
    <p>
      Authentic Italian Cuisine. 6 creative dishes to choose from.All from our
      stone over,all organic,all delicious.
    </p>
  );
}

function Menu_if({ piz }) {
  return (
    <ul className="pizzas">
      {piz.map((pizza) => (
        <Pizza pizzaObj={pizza} key={pizza.name} />
      ))}
    </ul>
  );
}

function Menu_else() {
  return (
    <div>
      <h3>We're working on it</h3>
      <strong>
        <h1>Coming soon......!! 😣</h1>
      </strong>
    </div>
  );
}

// Components Section
function Pizza({ pizzaObj }) {
  // if (pizzaObj.soldOut) return null;
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" :""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span style={{color : "red"}}>{pizzaObj.soldOut ? "SOLD OUT" :pizzaObj.price}</span>
      </div>
    </li>
  );
}

// Footer Section
function Footer() {
  const hr = new Date().getHours();
  const openHr = 12;
  const closeHr = 20;
  const isOpen = hr >= openHr && hr <= closeHr;

  return (
    <footer className="footer">
      {isOpen ? (
        <Footer_if clsHr={closeHr} />
      ) : (
        <Footer_else opnHr={openHr} clsHr={closeHr} />
      )}
    </footer>
  );
}

function Footer_if(props) {
  return (
    <div className="order">
      <p>We're open until {props.clsHr}:00. Come visit us or Order Online.</p>
      <button className="btn">Order Now</button>
    </div>
  );
}

function Footer_else({ opnHr, clsHr }) {
  return (
    <div style={{ textAlign: "center" }}>
      <p>Please Come between open hours </p>
      <p>
        from <br />
        <strong>
          {opnHr}:00 PM - {clsHr}:00 PM
        </strong>
      </p>
    </div>
  );
}
