
import './App.css';
import HighOrderCompo from './Hoc/HighOrderCompo'
import Inherit from './Hoc/Inherit';
import Pure from "./pureComponent/Pure"
function App() {
  return (
    <div className="App">
         
          <p style={{fontSize:"20px"}}><h3>Pure Component's Defintion:</h3>The Pure Component are the component that do not re-render when props and state has been updated with the same values,so it will increase the performance of your application and website.</p>
          <h4>PureComponent using below Example</h4>
         <Pure/>
         <p style={{fontSize:"20px"}}><h3>High Order Component's (HOC) Defintion:</h3>The high order component is an advanced technique  in react for re-using Component logic across Multiple Components .The Hoc is a function that takes  a Component as an Argument and return a new component that wraps the original Component. </p>
         <h2>Higher Order Component using below Example</h2>
          < Inherit compopass={HighOrderCompo}/>
          <p>In above Hoc Exapmle we are getting product of 12  with natural no. using  clicking on  button inside all that Hoc component seperately with using differnt styling in all those Component . we are passing as a Component as args inside other Component and accepting  as  props and using that Component three times with differnt stlying. In such Manner it will reflect as example of Hoc.</p>

    </div>
  );
}

export default App;
