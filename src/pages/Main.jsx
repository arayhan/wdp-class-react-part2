import React, { Component } from "react";
import "../App.css";
import Form from "../components/Form";
import Table from "../components/Table";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          nama: "Tangguh",
          email: "Tangguh@mail.com",
          noTel: "082110007887",
        },
      ],
    };
  }

  handleSubmitForm(e) {
    e.preventDefault();
    console.log(e);
    const { data } = this.state;

    data.push({
      nama: e.target[0].value,
      email: e.target[1].value,
      noTel: e.target[2].value,
    });

    this.setState({ data });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Table data={this.state.data} />
          <p>==============================</p>
          <Form onSubmit={(e) => this.handleSubmitForm(e)} />
        </header>
      </div>
    );
  }
}
