import React from "react";
import Logo from "../img/newtone-logo.svg";
import {FaUserAlt} from "react-icons/fa"
import {BsHeartFill} from "react-icons/bs"
import {BsFillBasket3Fill} from "react-icons/bs"
import {BiSearch} from "react-icons/bi"

const Navbar = () => {
  return (
    <>
      <div className="navbar-wrapper container-fluid">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <nav class="navbar navbar-expand-lg bg-light">
          <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <form class="d-flex form-setup" role="search">
                <input
                  class="form-control me-2 input-setup"
                  type="search"
                  placeholder="Поиск"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success btn-setup" type="submit">
                  <BiSearch />
                </button>
              </form>
            </div>
          </div>
        </nav>
        <a><FaUserAlt id="Icons"/></a>
        <a><BsHeartFill id="Icons"/></a>
        <a><BsFillBasket3Fill id="Icons"/></a>
      </div>
    </>
  );
};

export default Navbar;
