import React, { useState } from "react";
import styled from "styled-components";
import { BsChevronDown, BsSearch, BsCart, BsHeart } from "react-icons/bs";
import logo from "../images/logo.svg";
import nav_links from "../nav_links.json";
import Mens from "./Mens";
import { menuState } from "../atoms/MenuBarAtom";
import { useRecoilState, useRecoilValue } from "recoil";
const Navbar = () => {
  const [index, setIndex] = useState(null);
  const [clickState, setClickedState] = useRecoilState(menuState);

  const toggleMenu = (index) => {
    setIndex(index);
    setClickedState(true);
  };
  return (
    <NavbarContainer>
      <div className="top__bar">
        <div className="right">
          <div className="field row">
            <p>Find a Store</p>
            <BsChevronDown color="white" />
          </div>

          <p className="sign__in">Welcome, Sign In</p>
        </div>
      </div>
      <div className="bottom__bar">
        <div className="left">
          <img src={logo} alt="" />

          <div className="left__content">
            {nav_links.map((link, index) => (
              <h2 key={index} onClick={() => toggleMenu(index)}>
                {link.link}
              </h2>
            ))}
          </div>
        </div>

        <div className="right">
          <div className="search__container">
            <input type="text" placeholder="Search" />
            <BsSearch color="black" />
          </div>
          <BsHeart className="icon" />
          <BsCart className="icon" />
        </div>
      </div>

      {index === 0 && clickState === true && <Mens />}
    </NavbarContainer>
  );
};

// MEN'S
// WOMEN'S
// KIDS'
// CLOTHING
// RELEASES
// BRANDS
// SALE
// FLX REWARDS

const NavbarContainer = styled.div`
  width: 100%;

  input {
    border: none;
    outline: none;
    background: none;
  }

  .top__bar {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: black;
    padding: 1rem;
    border-bottom: 1px solid lightgrey;

    .right {
      padding-right: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;

      .field.row {
        display: flex;
        align-items: center;
        justify-content: center;

        p {
          color: white;
          margin-right: 5px;
        }
      }

      .sign__in {
        color: white;
        margin: 0 20px;
      }
    }
  }

  .bottom__bar {
    width: 100%;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;

    .left {
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 100%;
        height: 1.5rem;
        max-width: 160px;
      }
      .left__content {
        width: fit-content;
        display: flex;
        align-items: center;
        justify-content: center;

        h2 {
          margin: 0 1rem;
          font-size: 12px;
          cursor: pointer;
        }
      }
    }

    .right {
      display: flex;
      align-items: center;
      justify-content: center;
      .search__container {
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 10px;
      }

      .icon {
        margin: 0 10px;
      }
    }
  }
`;
export default Navbar;
