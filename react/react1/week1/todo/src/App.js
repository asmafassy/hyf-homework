import logo from "./logo.svg";
import "./App.css";
import Description from "./components/Description";

function App() {
  const lists = [
    { description: "Get out of bed", deadlineDate: "Wed Sep 13 2017" },
    { description: "Brush teeth", deadlineDate: "Thu Sep 14 2017" },
    { description: "Eat breakfast", deadlineDate: "Fri Sep 15 2017" },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> ToDo-app- with-react </h1>
      </header>
      <div>
        {lists.map((list) => {
          return (
            <Description
              description={list.description}
              date={list.deadlineDate}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
