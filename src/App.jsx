import { useState } from "react";
import "./App.css";

function App() {
  const [n, setN] = useState(0);
  const [k, setK] = useState(0);
  const [s, setS] = useState("");

  const handleValueNK = (e) => {
    let [num1, num2] = e.target.value.split(" ");
    if (0 < num1 < Math.pow(10, 5)) {
      setN(num1);
      setK(num2);
    }
  };

  const handleValueS = (e) => {
    if (0 < e.target.value < 9) {
      if (e.target.value.length >= n) {
        FunctionHighestValuePalindrome(e.target.value);
      }
    }
  };

  const FunctionHighestValuePalindrome = (s) => {
    let count = 0;
    let array = s.split('')
    let reverseArray = s.split('').reverse()
    let copiArray = array.map((el)=>el)
    for (let i = 0; i < Math.round(array.length/2); i++) {
      if (array[i] == reverseArray[i]) {
        console.log('sin cambios');
      } else {
        copiArray[i] =  reverseArray[i]
        count ++
      }
      if(count <= k){
        setS(copiArray)
      }else{
        setS(-1)
        return
      }
    }
  };

  return (
    <div>
      <h1>HighestValuePalindrome</h1>
      <div className="wrapper">
        <div className="container">
          <input
            className="valueNKInput"
            placeholder="Ingresa N K"
            onChange={(e) => {
              handleValueNK(e);
            }}
          />
          <input
            className="valueSInput"
            placeholder="Ingresa S"
            minLength={n}
            maxLength={n}
            onChange={(e) => {
              handleValueS(e);
            }}
          />
        </div>
        <div className="container">
          <div>
            <label className="label">n = {n}</label>
            <label className="label"> k = {k}</label>
          </div>
          <label className="label">s = {s}</label>
        </div>
      </div>
    </div>
  );
}

export default App;
