import Summary from "./components/Summary";
import YourResult from "./components/YourResult";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <main className="result-app">
        <YourResult score={76} />
        <Summary />
      </main>
    </div>
  );
}
