import "./style.css";

// let api = `https://api.openweathermap.org/data/2.5/weather?q={City}&appid={apikey}`
let api = `https://api.openweathermap.org/data/2.5/weather?q=Miami&appid=process.env.REACT_APP_API_KEY`;
console.log(api);

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
