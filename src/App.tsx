import "./App.scss";
import Topbar from "./Components/Topbar/Topbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Provider from "./Context/Provider";

function App() {
  return (
    <Provider>
      <div className="App">
        <Topbar />
        <div>
          <Sidebar />
        </div>
      </div>
    </Provider>
  );
}

export default App;
