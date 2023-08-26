import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarNav,
  MDBNavbarBrand,
  MDBInputGroup,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';

import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Header.css";
import { Link } from "react-router-dom";

export default function Navbar() {

  return (
    <>
    <div className="header">

        <img className="header__logo" src='' alt="" />


      <div className="header__search">
        <input
          className="header__searchInput"
          type="search"
          placeholder="Search Amazon..."
        />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">

          <div className="header__option">
            <span className="header__optionLineOne">
              Hello jakaboy
            </span>
            <span className="header__optionLineTwo">

            </span>
          </div>


          <Link to="/orders">
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>


          <div className="header__optionBasket">
            <ShoppingCartIcon />
            <span className="header__optionLineTwo header__basketCount">

            </span>
          </div>

      </div>
    </div>
    </>
  );
}