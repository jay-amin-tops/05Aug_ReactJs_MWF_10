import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function HeaderCompo() {
  const [showBasic, setShowBasic] = useState(false);
  const menuItems = {
    "/home": "Home",
    "/about": "About us",
    "/contact": "Contact Us",
  };
  const DynamicMenuData = Object.entries(menuItems).map(([key, value], i) => {
    return (
      <MDBNavbarItem key={key}>
        <Link className="nav-link" to={key}>
          {value}
        </Link>
      </MDBNavbarItem>
    );
  });
  return (
    <>
      <MDBNavbar expand="lg" light bgColor="light">
        <MDBContainer fluid>
          <MDBNavbarBrand href="#">Brand</MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
              {/* <MDBNavbarItem>
                <Link className="nav-link" to="/">
                  Home{" "}
                </Link>
              </MDBNavbarItem> */}

              {DynamicMenuData}

              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle tag="a" className="nav-link" role="button">
                    Account
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem>
                      <Link className="nav-link" to="/login">
                        Login
                      </Link>
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>
            </MDBNavbarNav>
            <form className="d-flex input-group w-auto">
              <input
                type="search"
                className="form-control"
                placeholder="Type query"
                aria-label="Search"
              />
              <MDBBtn color="primary">Search</MDBBtn>
            </form>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
