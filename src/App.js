
function App() {

  const handleConnectToObs = () => {
    console.log("Opening up window");
  };

  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={handleConnectToObs}>Connect to OBS</button>
    </div>
  );
}

export default App;
