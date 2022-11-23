import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Regular const";

  return (
    <div className="App">
       Hello <h1>{ name }</h1>
       {/*
       we call the component
       we pass the params as strings or as numbers {}
       we get the params as props in the component
       */}
       <GetNameComponent name="Jessica" age={21} email="jessica@mail.com"/>
    </div>
  );
}


const getName = () =>{
  return "Name";
}
//COMPONENTS
//Starts with a capital letter
//Returns HTML codde
//if we return more than one line we have to use ()
const GetNameComponent = (props) =>{
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.email}</h1>
    </div>
  );
}
export default App;
