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
    <header className="header bg-[#1c1c1c]" id="top">
      <NavBarSticky toggleSearchView={toggleSearchView} />
    </header>
  );
}
export default Header;