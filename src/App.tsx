import "./App.scss";
import Topbar from "./Components/Topbar/Topbar";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Topbar />
      <div>
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
