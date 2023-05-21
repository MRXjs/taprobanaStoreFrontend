import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar isLogin={true} />
      <Home />
    </>
  );
};

export default App;
