import React from "react";
import logo from "./logo.svg";
import "./App.css";
import UIDemo from "./components/UIDemo";
import FormDemo from "./components/FormDemo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { page: "form" };
  }
  navigate = page => {
    this.setState({ page });
  };
  render() {
    let page = null;
    switch (this.state.page) {
      case "home":
        page = <UIDemo />;
        break;
      case "form":
        page = <FormDemo />;
        break;
      default:
        page = <div>404 page</div>;
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          UI Demo
        </header>
        {page}
        <footer>
          <button onClick={() => this.navigate("home")}>Navigate Home</button>
          <button onClick={() => this.navigate("form")}>Navigate Form</button>
        </footer>
      </div>
    );
  }
}

export default App;
