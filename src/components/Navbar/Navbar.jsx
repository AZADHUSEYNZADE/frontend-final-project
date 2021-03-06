import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import Commerce from "../../library/commerce/Commerce";
import SearchBar from "../SearchBar/SearchBar";
import Tello from "../../assets/Icons/Tello-logo.svg";
import { Badge, IconButton } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Link } from "react-router-dom";
import subPic from "../../assets/Images/subPic.png";
import { selectCart } from "../../features/cartSlice";
import { useSelector } from "react-redux";
import { selectAllFavorites } from "../../features/favoriteSlice";
import Search from "../../assets/Images/search.svg";
import mobileImg from "../../assets/Images/Group 5580.png";
const Navbar = ({ setShowSidebar }) => {
  const cart = useSelector(selectCart);
  const favorites = useSelector(selectAllFavorites);
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [allProducts, setAllProducts] = useState([]);

  const cartCount = useSelector((state) => state.cart.cart.length);
  const fetchAllProducts = () => {
    Commerce.categories
      .retrieve("mehsullar", { type: "slug", depth: "3" })
      .then((category) => setAllProducts(category.children))
      .catch((error) => {
        console.log("There was an error fetching the products", error);
      });
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
    windowWidth > 768 && setIsOpen(false);
    return () => {
      window.removeEventListener("resize", () =>
        setWindowWidth(window.innerWidth)
      );
    };
  }, [window.innerWidth]);

  return (
    <>
      <nav>
        <div className="container">
          <div className="row">
            <div className="nav-logo">
              <div
                className={`menu-icon ${isOpen && "open"}`}
                onClick={() => setIsOpen(!isOpen)}
              >
                <div></div>
                <div></div>
                <div></div>
              </div>
              <span className="project">
                <Link to="/">
                  <img src={mobileImg} alt="img" />
                </Link>
              </span>
              <img className="search-Img" src={Search} alt="search" />
              <Link to="/">
                <img className="telloImg" src={Tello} alt="Tello" />
              </Link>
            </div>

            <div className="desktop-search">
              <SearchBar />
            </div>
            <div className="nav-elements">
              <Link to="login">
                <PersonOutlineOutlinedIcon style={{ marginTop: "7px" }} />
              </Link>
              <Link to="my-orders">
                <IconButton aria-label="cart">
                  <Link to="my-favorite-products">
                    <Badge badgeContent={favorites?.length} color="secondary">
                      <FavoriteBorderOutlinedIcon />
                    </Badge>
                  </Link>
                </IconButton>
              </Link>

              <Link to="basket">
                <Badge badgeContent={cartCount} color="primary">
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </Link>
            </div>
          </div>
          {isOpen && (
            <div className="mobileMenuDiv">
              <ul className="nav-links">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div
                    className="true-X"
                    style={{ position: "absolute", left: "65px" }}
                  >
                    <Link to="/">
                      <img src={mobileImg} alt="img" />
                    </Link>
                  </div>
                  <div style={{ position: "absolute", right: "10px" }}>
                    <div className="nav-elements">
                      <Link to="login">
                        <PersonOutlineOutlinedIcon />
                      </Link>
                      <Link to="my-orders">
                        <IconButton aria-label="cart">
                          <Link to="my-favorite-products">
                            <Badge
                              badgeContent={favorites?.length}
                              color="secondary"
                            >
                              <FavoriteBorderOutlinedIcon />
                            </Badge>
                          </Link>
                        </IconButton>
                      </Link>

                      <Link to="basket">
                        <Badge badgeContent={cartCount} color="primary">
                          <ShoppingCartOutlinedIcon />
                        </Badge>
                      </Link>
                    </div>
                  </div>
                </div>

                {allProducts.map((item, i) => (
                  <li
                    // className="parentLi"
                    className={item.name === "All" ? "mTop" : "parentLi"}
                  >
                    <Link to={`/products/${item.name.toLowerCase()}`}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "#303030",
                  marginTop: "16px",
                }}
              ></div>
            </div>
          )}

          <div className="row menuDesk">
            <ul className="nav-links">
              {allProducts.map((item, i) => (
                <li className="parentLi" key={i}>
                  <Link to={`/products/${item.name.toLowerCase()}`}>
                    {item.name}
                  </Link>
                  <div className="mainSubDiv">
                    <ul className="menuSubCategories">
                      {item.children.map((subCategory) => {
                        return (
                          <li>
                            <Link
                              to={`/products/${subCategory.name.toLowerCase()}`}
                            >
                              <p className="subText">{subCategory.name}</p>
                            </Link>
                            {subCategory.children.map((sub) => {
                              return (
                                <li>
                                  <Link
                                    to={`/products/${sub.name.toLowerCase()}`}
                                  >
                                    <p className="subChildrenText">
                                      {sub.name}
                                    </p>
                                  </Link>
                                </li>
                              );
                            })}
                          </li>
                        );
                      })}
                      <img className="subImg" src={subPic} alt="pic" />
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="mobile-search">
            <SearchBar />
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
