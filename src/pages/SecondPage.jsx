import React, { Component } from "react";
import Text from "../components/Text";

export default class SecondPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      angka: 0,
    };
  }

  addAngka = () => {
    this.setState({ angka: this.state.angka + 1 });
  };

  removeAngka = () => {
    this.setState({ angka: this.state.angka - 1 });
  };

  componentDidMount() {
    console.log("Data masuk dari API - Dilakukan setState");
  }

  componentDidUpdate() {
    console.log("Data kita rubah atau interaksi API - Dilakukan setState");
  }

  componentWillUnmount() {
    console.log("Kita pindah page - Kita melakakuan interaksi API");
  }

  render() {
    console.log("First Render");

    return (
      <div>
        <Text text={this.state.angka} />
        <button onClick={this.addAngka}>+</button>
        <button onClick={this.removeAngka}>-</button>
      </div>
    );
  }
}
