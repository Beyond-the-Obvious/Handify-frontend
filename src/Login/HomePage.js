import React from "react";

import axios from "axios";
import ProductCard from "../component/ProductCard";

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
        <h1>Hello Homepage</h1>
        <ProductCard
          itemData={this.state.handify}
          getProduct={this.getProduct}
        />

        <div className="button" onClick={this.setLoginUser}>
          Logout
        </div>
      </div>
    );
  }
}

// const Homepage = ({setLoginUser}) => {
//     return (
//         <div className="homepage">
//             <h1>Hello Homepage</h1>
//             <button className="button" onClick={() => setLoginUser({})} >Logout</button>
//         </div>
//     )
// }

// export default Homepage
