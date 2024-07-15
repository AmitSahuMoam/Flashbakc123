import { useContext, useState } from "react";
import NavBarSticky from "./NavBarSticky";

function Header() {
  const [searchInView, setSearchInView] = useState(false);

  const toggleSearchView = () => {
    setSearchInView(() => !searchInView);
  };

  const hideSearchView = () => {
    setSearchInView(false);
  };

  return (
    <header className="header bg-black" id="top">
      <NavBarSticky toggleSearchView={toggleSearchView} />
    </header>
  );
}
export default Header;