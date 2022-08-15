import React from "react";
import axios from "axios";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: [],
    };
  }

  getUser = async () => {
    const res = await axios.get(`${process.env.REACT_APP_HEROKU}/user`);
    this.setState({
      userInfo: res.data,
    });
    console.log(this.state.userInfo);
  };

  componentDidMount() {
    console.log("we are inside componentDidMount");
    this.getUser();
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
}
 
  render() {
    return (
      
      <div className="profile_page">
        <section className="row text-secondary my-3">
          <div className="col-md-4">
            <h3 className="text-center text-uppercase">
              {`${this.userName} Profile`}
            </h3>

            <div className="avatar">
              <img
                src="https://res.cloudinary.com/unlimatedartt/image/upload/v1654270494/blank-profile-picture-973460_640_yqplrx.png"
                alt="avatar"
                width={200}
                height={200}
              />
              <span>
                <p><i className="fas fa-camera"></i>Change</p>
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
                id='userEmail'
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
          </div>

          <div className="col-md-8">
            <h3 className="text-uppercase">Orders</h3>

            <div className="my-3 table-responsive">
              <table
                className="table-bordered table-hover w-100 text-uppercase"
                style={{ minWidth: "600px", cursor: "pointer" }}
              >
                <thead className="bg-light font-weight-bold">
                  <tr>
                    <td className="p-2">id</td>
                    <td className="p-2">date</td>
                    <td className="p-2">total</td>
                    <td className="p-2">delivered</td>
                    <td className="p-2">paid</td>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Profile;
