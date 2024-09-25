import "./App.css";
import Card from "./Components/Card";

function App() {
  return (
    <>
      <div className="header">
        <h1>Resorts Lite</h1>
        <hr />
      </div>
      <div className="container">
        <Card
          image="src\assets\1.jpg"
          location="Indonesia"
          name="Gill Air Hotel"
          rating="4.8 ★"
          price="$589/night"
        />
        <Card
          image="src\assets\2.jpg"
          location="Seychelles"
          name="Hilton Resort"
          rating="4.2 ★"
          price="$629/night"
        />
        <Card
          image="src\assets\3.jpg"
          location="US Virgin Islands"
          name="Goa Resort"
          rating="3.5 ★"
          price="$485/night"
        />
        <Card
          image="src\assets\4.jpg"
          location="Bahamas"
          name="Kuredu Resort"
          rating="4.1 ★"
          price="$729/night"
        />
        <Card
          image="src\assets\5.jpg"
          location="Mauritius"
          name="Trou D'eau Douce"
          rating="4.9 ★"
          price="$877/night"
        />
        <Card
          image="src\assets\6.jpg"
          location="Bermuda"
          name="Staniel Cay Hotel"
          rating="3.2 ★"
          price="$365/night"
        />
      </div>
    </>
  );
}

export default App;
