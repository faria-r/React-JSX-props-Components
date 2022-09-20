import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className='App'>
{/* <Counter></Counter> */}
<ExternalUsers></ExternalUsers>
    </div>
  )
}

function ExternalUsers(){
  const [users,setUsers] = useState([]);
  // useEffect(()=>{},[])
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
    },[])
  return(
    <div>
      <h2>External Users:</h2>
      <p>{users.length}</p>
      {
        users.map(user => <User name= {user.name} email={user.email}></User>)
      }
    </div>
  )
}

function User(props){
return (
  <div style={{border:'3px solid red',margin:'10px',backgroundColor:'lightcoral',borderRadius:'25px'}}>
    <h3>
      Name:{props.name}
    </h3>
    <h3>
     Email:{props.email}
    </h3>
  </div>
)
}
function Counter(){
  const [count,setCount]= useState(0);
  const increaseCount = ()=>{
    const newCount = count + 1;
    setCount(newCount);
  }
  const decreaseCount = () => setCount(count -1);
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Increase</button>
    </div>
  )
}











// function App() {
//   const products = [
//     {name:'Laptop',price:56000},
//     {name:'Tablet',price:56000},
//     {name:'iPhone',price:56000},
//     {name:'Watch',price:56000},
//   ];
//   return (
//     <div className="App">
//       {
//         products.map(product => <Product name={product.name} price={product.price}></Product>)
//       }
//       {/* <Product name= 'Laptop'></Product> */}
//     </div>
//   );
// }
// function Product(props){
//   return (
//     <div className='Product'>
//       <h3>Name:{props.name}</h3>
//       <p>Price:{props.price}</p>
//     </div>
//   )
// }
export default App;
