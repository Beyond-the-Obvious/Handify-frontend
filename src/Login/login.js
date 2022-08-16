import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { BsKeyFill } from "react-icons/bs"
import { MdEmail } from "react-icons/md"
import "../css/loginNew.css"

const Login = ({ setLoginUser }) => {

    const navigate = useNavigate()

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post(`${process.env.REACT_APP_HEROKU}/login`, user)
            .then(res => {
                alert(res.data.message)
                setLoginUser(res.data.user)
                console.log("res.data.user", res.data.user);
                navigate("/")
            })
    }

    return (
        <div className="login-body">
            <div className="d-flex justify-content-center align-items-center h-75">
                <div className=" mt-5 mb-5 ms-5 me-5 w-25 shadow-lg p-5 mb-5 bg-white rounded">
                    <h1 className="mb-4">Login</h1>
                    <div className="d-flex flex-column gap-5">
                        <div>
                            <label className="mb-2" htmlFor="email">Email</label>
                            <div className="d-flex justify-content-start align-items-center">
                                <MdEmail className="loginSvg" />
                                <input className="form-control loginInput" type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
                            </div>
                        </div>
                        <div>
                            <label className="mb-2" htmlFor="password">Password</label>
                            <div className="d-flex justify-content-start align-items-center">
                                <BsKeyFill className="loginSvg" />
                                <input className="form-control loginInput" type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter your Password" ></input>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-column justify-content-between gap-3 mt-5">
                        <div className="btn btn-light login-btns" onClick={login}>Login</div>
                        <div className="btn btn-light login-btns" onClick={() => navigate("/register")}>Register</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login