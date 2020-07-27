import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';

const user1 = {
  name: "Nikita",
  age: 20,
  status: "doctor",
  place: "Brovary"
}

console.group(`Info about ${user1.name}`);
console.log(`Name: ${user1.name}`);
console.log(`Age: ${user1.age}`);
console.log(`Status: ${user1.status}`);
console.log(`Place: ${user1.place}`);
console.groupEnd();


const style = {
  backgroundColor: "black"
}
const user = { name: "Alex", status: "student" }
const data = { style, user }

export const { Provider, Consumer } = createContext(style);

ReactDOM.render(
  <React.StrictMode>
    <Provider value={data}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


