import Home from "./components/Home";
import Navbar from "./components/Navbar";
import TopProducts from "./components/TopProducts";

const App = () => {
  return (
    <>
      <Navbar isLogin={true} />
      <Home />
      <TopProducts/>
    </>
  );
};

export default App;
