import React from "react";
import Header from "./Header";
import SearchMovie from "./SearchMovie";
import { useSelector } from "react-redux";
import ProfileMenu from "./profileMenu";
import Menu from "./Menu";

const SearchContents = () => {
  const profileMenuToggle = useSelector(
    (store) => store.movie.profileMenuToggle
  );

  const menuToggle = useSelector((store) => store.movie.menuToggle);
  console.log(menuToggle);
  return (
    <div className="bg-black text-white">
      {profileMenuToggle && <ProfileMenu />}
      {menuToggle && <Menu />}
      <Header />
      <SearchMovie />
    </div>
  );
};

export default SearchContents;
