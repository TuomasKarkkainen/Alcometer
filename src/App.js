import './App.css';
import {useState} from 'react';

function App() {

  const [weight, setWeight] = useState(90);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
 const [gender, setGender] = useState('male');
 const [result, setResult] = useState(0);

  function handleSubmit(e) {
   e.preventDefault();
   let liters = bottles * 0.33;
     let grams = liters * 8 * 4.5;
   let burning = weight /  10;
   let left = grams - (burning * time);
   let result = 0;
   
   if (gender === 'male') {
    result = left / (weight * 0.7);
   }
   else {
     result = left / (weight * 0.6);
   }
   setResult(result);
 
 }

  return (
  <>
    <h3>Calculating alcohol blood level</h3>
    <form onSubmit={handleSubmit}>
  <div>
    <div>
 <label>Weight</label>
 <input name="weight" type="number" step="1" value = {weight} onChange = {e => setWeight(e.target.value)} />
    </div>
 
 
  <div>
  <label>Bottles</label>
  <input name="bottles" type="number" step="1" value = {bottles} onChange = {e => setBottles(e.target.value)} />
  </div>
 
  <div>
  <label>Time</label>
  <input name="time" type="number" step="1" value = {time} onChange = {e => setTime(e.target.value)}/>
  </div>
  <div>
  <label>Gender</label>
  <input type="radio" name="gender" value="male" defaultChecked onChange = {e => setGender(e.target.value)}/> <label>Male</label>
  <input type="radio" name="gender" value="female" onChange = {e => setGender(e.target.value)}/>  <label>Female</label>
  </div>
  <div>
    <output>{result.toFixed(1)}</output>
  </div>
  <button>Calculate</button>
  </div>
  </form>
  </>
  );
}


export default App;