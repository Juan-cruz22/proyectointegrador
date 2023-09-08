import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import style from "./nav.module.css";

function Nav ({onSearch}) {
    return (
        <div className={style.body}>
            <SearchBar onSearch={onSearch} />
            <button className={style.AboutButton}><Link to={"./About"}>About</Link></button>
            <button className={style.HomeButton}><Link to={"/Home"}>Home</Link></button>
            <button className={style.FavoritesButton}><Link to={"/Favorites"}>Favorites</Link></button>
        </div>
    )
}

export default Nav;