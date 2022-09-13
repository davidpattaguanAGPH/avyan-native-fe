import Button from "./components/common/button/Button";

function App() {
  return (
    <div className="App">
      <Button
        size="sm"
        type="primary"
        onClick={() => {
          alert(1);
        }}
      >
        Hello World
      </Button>
    </div>
  );
}

export default App;
