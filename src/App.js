import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Regular const";
  const isGreen = true;

  const names = ["peter","jake","Jessica","Dustin"];

  const users= [
    {name:"Pedro", age:21},
    {name:"Jake", age:25},
    {name:"Jessica", age:45}
  ];


  return (
    <div className="App">
       Hello <h1 className='name'>{ name }</h1>
       {/*
       we call the component
       we pass the params as strings or as numbers {}
       we get the params as props in the component
       */}
       <h1 style={{color: isGreen ? "green": "red"}}>This is a color</h1>
       <GetNameComponent name="Jessica" age={21} email="jessica@mail.com"/>

       {
        names.map((name, key) => {
            return <h1 key={key}>{name}</h1>
        })
       }

      <h1>CLASS 3 LIST</h1>
      {
        users.map((user, key) => (
            <User  key={key} name={user.name} age={user.age}/>
            ))
       }
       <h1></h1>
    </div>
  );
}

const User = (props) =>{
  return (
    <div>{props.name} {props.age}</div>
  )

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
