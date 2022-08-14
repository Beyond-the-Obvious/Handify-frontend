import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Welcome from "./Welcome";
import Form from "./Form";

class HandeMade extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      handify: [],
    };
  }

  getHandeMade = async () => {
    const res = await axios.get("http://localhost:3000/item");
    this.setState({
      handify: res.data,
    });
    console.log(this.state.handify);
  };

  componentDidMount() {
    console.log("we are inside componentDidMount");
    this.getHandeMade();
  }

  deleteHandeMade = async (id) => {
    await axios.delete(`http://localhost:3000/item/${id}`);
    this.getHandeMade();
    console.log(id);
  };

  createHandeMade = async (e) => {
    e.preventDefault();
    const newItem = {
      title: e.target.itemTitle.value,
      description: e.target.itemdes.value,
      price: e.target.itemPrice.value,
      imgURL: e.target.itemImg.value,
    };
    await axios.post(`http://localhost:3000/item`, { newItem });
    this.getHandeMade();
  };

  render() {
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <Form submitHandler={this.createHandeMade} />
        <button onClick={this.getHandeMade}>Get item Data</button>

        <Welcome
          deleteHandeMade={this.deleteHandeMade}
          itemData={this.state.handify}
        />

        <h3>No HandeMade Found :(</h3>
      </>
    );
  }
}

export default HandeMade;
