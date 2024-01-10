import './App.scss';
import Topbar from './Components/Topbar/Topbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Provider from './Context/Provider';
import Page from './Components/Page/Page';

function App() {
  return (
    <Provider>
      <div className="app">
        <Topbar />
        <div className="content">
          <Sidebar />
          <Page />
        </div>
      </div>
    </Provider>
  );
}

export default App;
