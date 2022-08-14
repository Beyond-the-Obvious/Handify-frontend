import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Welcome from "./Welcome";
import Form from "./Form";

class HandMade extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      handify: [],
    };
  }

  getHandMade = async () => {
    const res = await axios.get(`${process.env.REACT_APP_HEROKU}/item`);
    this.setState({
      handify: res.data,
    });
    // console.log(this.state.handify);
  };

  componentDidMount() {
    console.log("we are inside componentDidMount");
    this.getHandMade();
  }

  deleteHandMade = async (id) => {
    await axios.delete(`${process.env.REACT_APP_HEROKU}/item/${id}`);
    this.getHandMade();
    console.log(id);
  };

  createHandMade = async (e) => {
    e.preventDefault();
    const newItem = {
      title: e.target.itemTitle.value,
      description: e.target.itemdes.value,
      price: e.target.itemPrice.value,
      imgURL: e.target.itemImg.value,
    };
    await axios.post(`${process.env.REACT_APP_HEROKU}/item`, { newItem });
    this.getHandMade();
  };

  

  render() {
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <Form submitHandler={this.createHandMade} />
        <button onClick={this.getHandMade}>Get item Data</button>

        <Welcome
          deleteHandMade={this.deleteHandMade}
          itemData={this.state.handify}
          getHandMade={this.getHandMade}
        />

      </>
    );
  }
}

export default HandMade;
