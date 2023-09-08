import { connect } from "react-redux";
import Card from "../Card/Card.jsx";
import style from "./Favorites.module.css";
import { useDispatch } from "react-redux";
import { filterFav, orderFav } from "../../redux/actions.js";
import { useState } from "react";

const Favorites = (props) => {
    const {myFavorites} = props;

    const [aux, setAux] = useState(false);

    const genderOptions = [
        "Male", "Female", "Genderless", "unknown", "All"
    ]

    const dispatch = useDispatch();

    const handlerFilter = (event) => {
        dispatch(filterFav(event.target.value));
    } 
    
    const handlerOrder = (event) => {
        dispatch(orderFav(event.target.value));
        setAux(!aux);
    }

    return (
        <div>
            <h1 className={style.h1}>Favorites</h1>

        <div>
            <select onChange={handlerOrder}>
                <option value="Ascendente">ASCENDENTE</option>
                <option value="Descendente">DESCENDENTE</option>
            </select>

            <select onChange={handlerFilter}>
                {genderOptions.map((option) => {
                    return <option key={option} value={option}>{option}</option>
                })}
            </select>
        </div>
            <div>
                {myFavorites.map((char) => {
                    return (
                        <Card
                        key={char.id}
                        id={char.id}
                        name={char.name}
                        status={char.status}
                        species={char.species}
                        gender={char.gender}
                        origin={char.origin.name}
                        image={char.image}
                        />
                    )
                })}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites,
    };
};

export default connect(mapStateToProps, null)(Favorites);