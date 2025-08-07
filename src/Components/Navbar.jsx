import React, { useState,useEffect } from 'react'
import { FaMoon } from "react-icons/fa";
import { CiSun } from "react-icons/ci";
import { Link } from 'react-router-dom'
function Navbar() {
  const [theme,setTheme]=useState(false)
   useEffect(() => {
     document.body.setAttribute('data-bs-theme', theme ? 'dark' : 'light');
  }, [theme])
  
    function ThemeHandler() {
      setTheme(!theme)
    }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5">
        <div className="container-fluid ">
          <Link className="navbar-brand" to="/">Snap<span className='text-info fw-semibold'>Shop</span></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/product">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
              </li>

            </ul>
            <button className={`btn themeChanger me-5 ${theme?'btn-light':'btn-dark'}`}  onClick={ThemeHandler} >{theme?<CiSun />:<FaMoon />} </button>
            <form className="d-flex gap-3" role="search">
              <Link to={"/carts"} className="btn btn-outline-info" type="submit">Carts</Link>
              <Link to={"/login"} className="btn btn-outline-info" type="submit">Sign In</Link>
              <Link to={"/sign-up"} className="btn btn-outline-info" type="submit">Sign Up</Link>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar