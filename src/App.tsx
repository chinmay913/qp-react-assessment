import Header from "./components/Header";
import "./App.css";
import TodoModule from "./modules/TodoModule";

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <TodoModule />
    </div>
  );
}

export default App;
