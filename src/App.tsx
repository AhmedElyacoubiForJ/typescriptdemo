import "./App.css";
import Person, {Continent} from "./components/Person";

function App() {

  const getAge  = (birthDay : Date): number => {
    const today = new Date();
    const age = today.getFullYear() - birthDay.getFullYear();
    return age;
  }
  const birthDay = new Date(1967, 3, 15);
  //const age = getAge(birthDay);
  //console.log(age);
  return (
    <div className="App">
      <Person
        name="Mike Smith"
        email="mike.smith@gmail.com"
        age={getAge(birthDay)}
        isMarried={true}
        friends={["John", "Jeff", "Mary"]}
        continent={Continent.NORTH_AMERICA}
        //country="USA" to demonstrate country as optional
      />
    </div>
  );
}

export default App;
