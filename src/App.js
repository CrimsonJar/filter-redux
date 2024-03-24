//app.js
import "./App.css";
// import MainApp2 from "./components/MainApp";
import ServiceAdd from "./components/ServiceAdd";
import ServiceList from "./components/ServiceList";

function App() {
  return (
    <div className='App'>
      {/* <MainApp2 /> */}
      <>
        <ServiceAdd />
        <ServiceList />
      </>
    </div>
  );
}

export default App;
