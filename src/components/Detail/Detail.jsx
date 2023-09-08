import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from './Detail.module.css';

const Detail = () => {

    const { id } = useParams()
    const [character, setCharacter] = useState({})

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return(
        <div className={style.container}>
            <h2 className={style.id}>ID: {character?.id}</h2>
            <h2 className={style.name}>Name: {character?.name}</h2>
            <h2 className={style.status}>Status: {character?.status}</h2>
            <h2 className={style.species}>Species: {character?.species}</h2>
            <h2 className={style.gender}>Gender: {character?.gender}</h2>
            <h2 className={style.origin}>Origin: {character.origin?.name}</h2>
            <img className={style.image} src={character?.image} alt = {`No se encuentra la imagen de ${character.name}`}/>
        </div>
    );
}

export default Detail;