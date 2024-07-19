import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";
import MovingComponent from "react-moving-text";
import { Dropdown } from "flowbite-react";

import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Drawer from "@mui/joy/Drawer";
import List from "@mui/joy/List";
import ListItemButton from "@mui/joy/ListItemButton";
import ModalClose from "@mui/joy/ModalClose";
import Menu from "@mui/icons-material/Menu";
import CartContext from "../context/CartContext";
import logo from "../assets/images/logo.svg";

import '../sass/nav/_nav.scss'

function NavBarSticky(props) {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isGetButtonVisible, setIsGetButtonVisible] = useState(true);
  const [GetInTouchButtonVisible, setGetInTouchButtonVisible] = useState(false);

  const [CurrentStuff, setCurrentStuff] = useState(0);
  setTimeout(() => {
    if (CurrentStuff === 5) setCurrentStuff(0);
    else setCurrentStuff(CurrentStuff + 1);
  }, 2000);

  useEffect(() => {
    let scrollTimeout = null;

    const handleScroll = () => {
      setIsVisible(false);

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsVisible(true);
      }, 200);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY >= document.body.scrollHeight - window.innerHeight - 150) {
        setIsGetButtonVisible(false);
      } else {
        setIsGetButtonVisible(true);
      }
    };

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const stuff = [
    "IN TOUCH",
    "TOGETHER",
    "FOREVER",
    "CREATIVE",
    "STARTED",
    "LOUD",
  ];

  return (
    <div className="w-full">
      <motion.nav className="hidden w-full sm:flex items-center px-6 pt-4 absolute">
        <Link to="/" className="nav__logo no-underline ">
          <div className="gap-10 pt-5 Courier Prime  fixed left-[2%] top-2">
            <img src={logo} alt="" className="w-[10vh]" />
          </div>
        </Link>
        <div className="flex flex-1 2xl:mt-8 mt-4">
          <ul className="nav__links text-white Courier Prime ml-auto mr-auto space-x-4 normal-case">
            <li className="nav__link">
              <Dropdown
           className="Courier Prime text-[16px] 2xl:text-[20px]"
           label={<span>Stories</span>}
           color="transparent"
           theme={{ floating: { target: "w-full" } }}
              >
                <Dropdown.Item as={NavLink} to="/photostories" className="Courier Prime block w-full px-4 py-2 text-left 2xl:text-[20px] text-[16px] normal-case">
                  Photos
                </Dropdown.Item>
                <Dropdown.Item as={NavLink} to="/videostories" className="Courier Prime block w-full px-4 py-2 text-left 2xl:text-[20px] text-[16px] normal-case">
                  Videos
                </Dropdown.Item>
              </Dropdown>
            </li>
            <li>
              <NavLink to="/aboutus" className="Courier Prime whitespace-nowrap text-[16px] 2xl:text-[20px]">
                About Us
              </NavLink>
            </li>
            <li>
              <a href="/aboutus#questions" className="Courier Prime text-[16px] 2xl:text-[20px]">
                FAQs
              </a>
            </li>
            <li className="nav__link">
              <Dropdown
                className="Courier Prime"
                label={<span style={{ fontSize: '16px' }}>More</span>}
                color="transparent"
                theme={{ floating: { target: "w-full" } }}
              >
                <Dropdown.Item as={NavLink} to="/testimonials" className="Courier Prime block w-full px-4 py-2 text-left 2xl:text-[20px] text-[16px] normal-case">
                  Testimonials
                </Dropdown.Item>
                <Dropdown.Item as={NavLink} to="/blogs" className="Courier Prime block w-full px-4 py-2 text-left 2xl:text-[20px] text-[16px] normal-case">
                  Blogs
                </Dropdown.Item>
              </Dropdown>
            </li>
          </ul>
        </div>
      </motion.nav>

      {/* Small Screen */}
      <div className={`flex flex-row w-screen justify-between overflow-hidden ${isVisible ? 'fade-in' : 'fade-out'}`}>
        {isVisible && (
          <>
            {!open && (
              <div className="flex justify-between items-center fixed top-5 right-2 px-5 navItems 2xl:pr-10 pr-5 pt-5 2xl:pt-10">
                <div className="flex">
                  <Link to="/" className="flex nav__logo no-underline sm:hidden">
                    <div className="gap-10 Courier">
                      <img src={logo} alt="" className="w-[10vh] fixed top-5 left-5" />
                    </div>
                  </Link>
                </div>
                <div className="flex">
                  {isGetButtonVisible && (
                    <Link
                      to="/aboutus#contact"
                      type="button"
                      className="sm:flex hidden flex-row items-center bg-[#ffca00] cursor-pointer w-[140px] 2xl:w-[164px] sm:h-[29px] 2xl:h-[34px] rounded text-black overflow-hidden hover:text-yellow-300 hover:bg-black hover:border-yellow-300 transition-all ease-in duration-300 pt-2 px-2 py-2"
                    >
                      <span className="mr-2 Boldy flex items-center justify-center z-50 sm:text-[16px] 2xl:text-[20px]">
                        GET{" "}
                      </span>
                      <div className="flex items-center justify-center Boldy sm:text-[16px] 2xl:text-[20px]" key={CurrentStuff}>
                        <MovingComponent
                          id="moving"
                          type="fadeInFromBottom"
                          duration="1000ms"
                          delay="0s"
                          direction="normal"
                          timing="ease-in-out"
                          iteration="1"
                          fillMode="none"
                        >
                          {" "}
                          {stuff[CurrentStuff]}
                        </MovingComponent>
                      </div>
                    </Link>
                  )}
                  <div className="md:hidden ml-2">
                    <IconButton
                      variant="outlined"
                      color="neutral"
                      onClick={() => setOpen(true)}
                      sx={{
                        outline: "none",
                        border: "none",
                        color: "white",
                      }}
                    >
                      <Menu />
                    </IconButton>
                  </div>
                </div>
              </div>
            )}
            <Drawer open={open} onClose={() => setOpen(false)} size="lg">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  ml: "auto",
                  mt: 1,
                  mr: 2,
                }}
              >
                <ModalClose id="close-icon" sx={{ position: "initial" }} />
              </Box>
              <List
                size="lg"
                component="nav"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  alignItems: "start",
                  justifyContent: "center",
                  ml: "4rem",
                }}
              >
                <div className="ml-4" >
                  <span className="Courier Prime text-[16px] 2xl:text-[20px] text-[#4A4A4A]">Stories</span>
                  <div
                    style={{
                      display: "flex",

                    }}
                  >
                    <hr style={{
                      border: "none",
                      borderLeft: "1px solid #ccc",
                      height: "80px"
                    }} />
                    <div>
                      <ListItemButton>
                        <NavLink to="/photostories" onClick={() => setOpen(false)} className="Courier Prime 2xl:text-[20px] text-[16px]">
                          Photos
                        </NavLink>
                      </ListItemButton>
                      <ListItemButton>
                        <NavLink to="/videostories" onClick={() => setOpen(false)} className="Courier Prime 2xl:text-[20px] text-[16px]">
                          Videos
                        </NavLink>
                      </ListItemButton>
                    </div>
                  </div>
                </div>
                <ListItemButton>
                  <NavLink
                    onClick={() => setOpen(false)}
                    style={{
                      fontSize: "1rem",
                    }}
                    to="/aboutus"
                    className="Courier Prime text-[16px] 2xl:text-[20px] whitespace-nowrap"
                  >
                    About Us
                  </NavLink>
                </ListItemButton>
                <ListItemButton>
                  <NavLink
                    onClick={() => setOpen(false)}
                    style={{
                      fontSize: "1rem",
                    }} to="/aboutus#questions" className="Courier Prime 2xl:text-[20px] text-[16px]">
                    FAQs
                  </NavLink>
                </ListItemButton>
                <ListItemButton>
                  <NavLink
                    onClick={() => setOpen(false)}
                    style={{
                      fontSize: "1rem",
                    }} to="/testimonials" className="Courier Prime 2xl:text-[20px] text-[16px]">
                    Testimonials
                  </NavLink>
                </ListItemButton>
                <ListItemButton>
                  <NavLink
                    onClick={() => setOpen(false)}
                    style={{
                      fontSize: "1rem",
                    }} to="/blogs" className="Courier Prime 2xl:text-[20px] text-[16px]">
                    Blog
                  </NavLink>
                </ListItemButton>
                <ListItemButton>
                  <NavLink
                    onClick={() => setOpen(false)}
                    style={{
                      fontSize: "1rem",
                    }} to="/aboutus#contact" className="Courier Prime 2xl:text-[20px] text-[16px] text-[#f3cc2e]">
                    Get in touch
                  </NavLink>
                </ListItemButton>
              </List>
            </Drawer>
          </>
        )}
      </div>
    </div>
  );
}

export default NavBarSticky;