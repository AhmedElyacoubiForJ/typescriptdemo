import "./App.css";
import Person from "./components/Person";

function App() {
  return (
    <div className="App">
      <Person
        name="Mike Smith"
        email="mike.smith@gmail.com"
        age={45}
        isMarried={true}
        friends={["John", "Jeff", "Mary"]}
      />
    </div>
  );
}

export default App;
