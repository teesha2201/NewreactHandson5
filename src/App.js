
import './App.css';
import HighOrderCompo from './Hoc/HighOrderCompo'
import Inherit from './Hoc/Inherit';
import Pure from "./pureComponent/Pure"
function App() {
  return (
    <div className="App">
          <h2>PureComponent using below Example</h2>
         <Pure/>
         <h2>Higher Order Component using below Example</h2>
        < Inherit compopass={HighOrderCompo}/>
    </div>
  );
}

export default App;
