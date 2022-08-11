import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { ADD } from "./Redux/Actions/Actions";

function App({ store }) {
  // console.log(store.dispatch(ADD({item: 'I bought icecream'})));

  const [data, setData] = useState(store.getState().data);

  store.subscribe(() => {
    console.log("in");
    setData([...store.getState().data]);
  });

  function handleSubmit(event) {
    event.preventDefault();
    store.dispatch(ADD({ item: event.target.elements[0].value }));
    item: event.target.elements[0].value = "";
  }

  // handleDelete = () =>{

  // }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" className="textbox" placeholder="enter Item" />
        <button className="btn">Add Item</button>
        <br></br>
        <div className="container">
          {data.length > 0 &&
            data.map((obj, index) => (
              <div className="card">
                <span className="data" key={index}>{obj.item}</span> 
                <button className="btn" onClick={}>Delete</button>
              </div>
            ))}
        </div>
      </form>
    </div>
  );
}

export default App;
