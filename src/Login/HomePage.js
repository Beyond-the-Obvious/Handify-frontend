import React from "react";

import axios from "axios";
import ProductCardHome from "../component/ProductCardHome";

import Row from "react-bootstrap/Row";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: [],
      handify: [],
    };
  }

  getProduct = async () => {
    const res = await axios.get(`${process.env.REACT_APP_HEROKU}/item`);
    this.setState({
      handify: res.data,
    });
  };

  componentDidMount() {
    this.getProduct();
  }

  setLoginUser = async () => {
    this.props.setLoginUser();
  };



  render() {
    return (
      <div>
        <h1>Check out our new Products!</h1>
        <Row xs={1} md={4} className="g-4">
          {this.state.handify.map((item, idx) => (
            <div key={idx}>
        <ProductCardHome  itemData={item} getProduct={this.getProduct}/>
        </div>
          ))}
        </Row>

        {/* <div className="button" onClick={this.setLoginUser}>
          Logout
        </div> */}
      </div>
    );
  }
}
