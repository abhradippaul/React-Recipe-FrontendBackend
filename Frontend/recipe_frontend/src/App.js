import { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";

function App() {
  let [query, setQuery] = useState();
  let [input, setInput] = useState();
  const reqUrl = "http://localhost:2000/recipe";
  let [data, setData] = useState();

  useEffect(() => {
    getRecipes();
    console.log("useeffect");
  }, [query]);

  const getRecipes = async () => {
    let res = await fetch(reqUrl + `?name=${query}`);
    res = await res.json();
    setData(res);
  };

  let onInputChange = (e) => {
    setInput(e.target.value);
  };
  let onBtnClick = (e) => {
    e.preventDefault();
    setQuery(input);
  };

  return (
    data && (
      <div className="app">
        <form action="GET" className="form">
          <input type="text" onChange={onInputChange} />
          <button onClick={onBtnClick}>Search</button>
        </form>
        <div className="card-div">
          {
            data.map((e) => {
              return <Recipe menu={e} key={e._id} />;
            })
            // <Recipe menu={data[0]}/>
            // console.log(data[0])
          }
        </div>
      </div>
    )
  );
}

export default App;
