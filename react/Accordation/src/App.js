import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";
function App() {
  return (
    <>
      {/* <Navbar title="Project2" aboutText="About us" /> */}
      <Navbar />
      <div className="container my-3">
        {/* <TextForm heading="Enter The Text To Analyze"/> */}
      <About/>
      </div>
    </>
  );
}

export default App;
