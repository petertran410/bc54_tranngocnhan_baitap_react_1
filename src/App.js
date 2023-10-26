import "./App.css";
import Footbar from "./FootBar/footbar";
import Header from "./Header/header";
import Menu from "./Menu/menu";
import Welcome from "./Welcome/welcome";

const App = () => {
  return (
    <div>
      <Header />
      <Welcome />
      <Menu />
      <Footbar />
    </div>
  );
}

export default App;
