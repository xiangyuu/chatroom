import './App.css';
import Home from "./home";
import {useObserver} from "mobx-react";

function App() {
  return useObserver(() =>
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
