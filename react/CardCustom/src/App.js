import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import CustomCard from "./components/CustomCard";

function App() {
  return (
    <>
      {/* <Navbar title="Project2" aboutText="About us" /> */}
      <Navbar />
      <div className="container my-3">
        <TextForm heading="Enter The Text To Analyze" />
      </div>
      <div className="container my-3">
        <CustomCard />
      </div>
    </>
  );
}

export default App;
