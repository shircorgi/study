// import logo from "./logo.svg";
import Container from "./component/Container";
import Header from "./component/Header";
import Card from "./component/Card";
import Itembox from "./component/Itembox";
import Aside from "./component/Aside";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="Container">
      <Header />
      <Card />
      <Itembox />
      <Aside />
      <Footer />
    </div>
  );
}

export default App;
