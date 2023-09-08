import { Link } from "react-router-dom";
import style from "./Card.module.css";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { addFav, removeFav } from "../../redux/actions.js";


function Card(props) {

   const {myFavorites, id, addFav, removeFav} = props;

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      isFav ? removeFav(id) : addFav(props);
      setIsFav(!isFav);
   };

   useEffect(() => {
      myFavorites.forEach((fav) => {
            if (fav.id === props.id) {
               setIsFav(true);
            }
         });
   }, [myFavorites, props.id]);
   

   return (
      <div className={style.Carta}>
         {isFav ? (
            <button onClick={handleFavorite}>❤️</button>
         ):(
            <button onClick={handleFavorite}>🤍</button>
         )}
         <button className={style.buttonClose} onClick={()=>props.onClose(props.id)}>X</button>
         <h2 className={style.iD}>id: {props.id}</h2>
         <Link to={`/detail/${props.id}`}>
         <h2 className={style.detail}>{props.name}</h2>
         </Link>
         <h2 className={style.status}>status: {props.status}</h2>
         <h2 className={style.species}>gender: {props.gender}</h2>
         <h2 className={style.species}>species: {props.species}</h2>
         <img className={style.image} src={props.image} alt = {`No se encuentra la imagen de ${props.name}`}/>
      </div>
   );
}

const mapDispatchToProps = (dispatch) =>{
   return{
      addFav: (character) => {
         dispatch(addFav(character));
      },
      removeFav: (id) => {
         dispatch(removeFav(id));
      },
   };
};

const mapStateToProps = (state) =>{
   return{
      myFavorites: state.myFavorites,
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);