import { useState } from "react";
import "./App.css";
import Todo from "./Todo";
import Contact from "./contact";
import Products from "./products";
import Notes from "./Notes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="page-container">

      <h1>React Practice Projects</h1>

      <div className="project-card">
        <h2>86. Counter Application</h2>

        <h1>{count}</h1>

        <button onClick={() => setCount(count - 1)}>Decrease</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>

      <div className="project-card">
        <h2>Todo Appication</h2>
        <Todo />
      </div>

      <div className="project-card">
        <h2>Contact Manager</h2>
        <Contact />
      </div>

      <div className="project-card">
        <h2>Product Listing</h2>
        <Products />
      </div>

      <div className="project-card">
        <h2>Notes Application</h2>
        <Notes />
      </div>

    </div>
  );
}

export default App;