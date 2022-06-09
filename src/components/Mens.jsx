import React from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { menuState } from "../atoms/MenuBarAtom";
const Mens = () => {
  const [clickState, setClickState] = useRecoilState(menuState);
  return (
    <MensContainer>
      <div className="close__button__container">
        <AiOutlineClose
          fontSize={"2rem"}
          className="close__button"
          onClick={() => setClickState(false)}
        />
      </div>
      <div className="grid__container">
        <div className="content">
          <h2>Shoes</h2>

          <ul>
            <li>All Men's Shoes</li>
            <li>Basketball</li>
            <li>Lifestyle</li>
            <li>Running</li>
            <li>Sandals/Slides</li>
            <li>Boots</li>
          </ul>
        </div>
        <div className="content">
          <h2>Clothing</h2>
          <ul>
            <li>All Men's Clothing</li>
            <li>T-shirts</li>
            <li>Shorts</li>
            <li>Hoodies & Sweatshirts</li>
            <li>Pants & Sweatpants</li>
            <li>Team Apparel</li>
            <li>Performance Clothing Track Suits</li>
            <li>Jackets</li>
            <li>Socks</li>
            <li>Underwear</li>
          </ul>
        </div>
        <div className="content">
          <h2>Brands</h2>
          <ul>
            <li>Jordan</li>
            <li>Nike</li>
            <li>adidas PUMA</li>
            <li>New Balance Vans</li>
            <li>On</li>
            <li>Crocs LCKR</li>
            <li>All City Just Don</li>
            <li>Reebok</li>
            <li>Converse</li>
            <li>Birkenstock</li>
          </ul>
        </div>
        <div className="content">
          <h2>TOP SHOE STYLES</h2>
          <ul>
            <li>Jordan Sneakers</li>
            <li>Nike Air Max</li>
            <li>Nike Air Force 1</li>
            <li>adidas Originals NMD</li>
            <li>adidas Ultraboost</li>
            <li>Nike Blazers</li>
            <li>New Balance 327</li>
            <li>adidas Top Ten</li>
            <li>New Balance 574</li>
            <li>UGG Tasman</li>
            <li>PUMA RS-X</li>
            <li>Vans Old Skool</li>
          </ul>
        </div>
        <div className="content">
          <h2>SHOP BY SHOE SIZE</h2>
        </div>
        <div className="content">
          <h2>FEATURED COLLECTIONS</h2>
        </div>
        <div className="content">
          <h2>ACCESSORIES</h2>
        </div>
      </div>
    </MensContainer>
  );
};

const MensContainer = styled.div`
  width: 100%;
  background-color: white;
  .fade-in-image {
    animation: fadeIn 5s;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .close__button__container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 1rem;

    .close__button {
      cursor: pointer;
    }
  }
  .grid__container {
    max-width: 1200px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    padding: 1rem;
    gap: 1rem;

    .content {
      h2 {
        font-size: 1rem;
        color: grey;
        font-weight: bold;
      }

      ul {
        list-style: none;

        li {
          margin: 2rem 0;
        }
      }
    }
  }
`;
export default Mens;
