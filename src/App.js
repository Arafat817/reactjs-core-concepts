import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
    </div>
  );
}
function Person(){
 return (
  <div className='person'>
  <h1>Sakib Al hasan</h1>
  <p>profession: cricket</p>
  </div>
 )
}

export default App;
