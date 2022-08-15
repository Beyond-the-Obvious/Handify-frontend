import React from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import AddItemForm from "./AddItemForm";

class Profile extends React.Component {
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
    // console.log(this.state.handify);
  };

  deleteProduct = async (id) => {
    await axios.delete(`${process.env.REACT_APP_HEROKU}/item/${id}`);
    this.getProduct();
    // console.log(id);
  };

  createProduct = async (e) => {
    e.preventDefault();
    const newItem = {
      title: e.target.itemTitle.value,
      description: e.target.itemdes.value,
      price: e.target.itemPrice.value,
      imgURL: e.target.itemImg.value,
    };
    await axios.post(`${process.env.REACT_APP_HEROKU}/item`, { newItem });
    this.getProduct();
  };

  getUser = async () => {
    const res = await axios.get(`${process.env.REACT_APP_HEROKU}/user`);
    this.setState({
      userInfo: res.data,
    });
  // console.log(this.state.userInfo);
  };

  componentDidMount() {
    // console.log("we are inside componentDidMount");
    this.getUser();
    this.getProduct();
  }

  createUser = async (e) => {
    e.preventDefault();
    const data = {
      name: e.target.userName.value,
      email: e.target.userEmail.value,
      password: e.target.userPassword.value,
    };
    console.log(data);

    await axios.post(`${process.env.REACT_APP_HEROKU}/user`, { data });
    this.getUser();
  };

  updateUser = async (e) => {
    e.preventDefault();
    const id = this.userInfo._id;
    const data = {
      name: e.target.userName.value,
      email: e.target.userEmail.value,
      password: e.target.userPassword.value,
    };
    await axios.put(`${process.env.REACT_APP_HEROKU}/user/${id}`, { data });
    this.getUser();
    console.log(this.state.userInfo._id);
  };


  // // admin functions
  // getUser = async () => {
  //   const res = await axios.get(`${process.env.REACT_APP_HEROKU}/login`);
  //   this.setState({
  //     userInfo: res.data,
  //   });
  // };

  // updateUser = async (e) => {
  //   e.preventDefault();
  //   const id = this.userInfo._id;
  //   const data = {
  //     name: e.target.userName.value,
  //     email: e.target.userEmail.value,
  //     password: e.target.userPassword.value,
  //   };
  //   await axios.put(`${process.env.REACT_APP_HEROKU}/login/${id}`, { data });
  //   this.getUser();
  //   console.log(this.state.userInfo);
  // };




  render() {
    return (
      <div className="profile_page">
        <section className="row text-secondary my-3">
          {/* <div className="col-md-4">
            <h3 className="text-center text-uppercase">Profile</h3>

            <div className="avatar">
              <img
                src="https://res.cloudinary.com/unlimatedartt/image/upload/v1654270494/blank-profile-picture-973460_640_yqplrx.png"
                alt="avatar"
                width={200}
                height={200}
              />
              <span>
                <p>
                  <i className="fas fa-camera"></i>Change
                </p>
                <input type="file" name="file" id="file_up" accept="image/*" />
              </span>
            </div>

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Your name"
                id="userName"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                className="form-control"
                id="userEmail"
                disabled={true}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">New Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Your new password"
                id="userPassword"
              />
            </div>

            <button className="btn btn-info" onSubmit={this.updateUser}>
              Update
            </button>
          </div> */}

          <div className="product">
            <>
              <h2>My Products</h2>

              <AddItemForm submitHandler={this.createProduct} />

              <ProductCard
                deleteProduct={this.deleteProduct}
                itemData={this.state.handify}
                getProduct={this.getProduct}
              />
            </>
          </div>
        </section>
      </div>
    );
  }
}

export default Profile;
