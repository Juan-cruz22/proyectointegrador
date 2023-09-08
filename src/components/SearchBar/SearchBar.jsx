import React from 'react';
import { useState } from 'react';
import style from './Search.module.css';

export default function SearchBar({onSearch}) {

 const [id, setId] = useState('')
 const handleChange = (event) => {
   setId(event.target.value);
 }

 const handleSearch = (id) => {
   onSearch(id)
   setId("")
 }

   return (
      <div className={style.Container}>
         <input value = {id} id="inputSearch" type='search' onChange={handleChange} className={style.Search}/>
         <button onClick={()=>handleSearch(id)} className={style.Button}>Agregar</button>
      </div>
   );

}