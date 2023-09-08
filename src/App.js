import './App.css';
import Cards from './components/Cards/Cards.jsx';
import { useState, useEffect  } from 'react';
import Nav from './components/Nav/nav.jsx';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import {useLocation, useNavigate } from 'react-router-dom';
import About from './components/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form.jsx';
import Favorites from './components/Favorites/Favorites.jsx';


function App() { 

   const {pathname} = useLocation();

   const [characters, setCharacters] = useState([]); 

   const [access, setAccess] = useState(false);

   const navigate = useNavigate();

   const EMAIL = '123456@gmail.com'
   const PASSWORD = '1234567'
 
   function login(userData) {
     if (userData.password === PASSWORD && userData.email === EMAIL) {
        setAccess(true);
        navigate('/home');
     }
  }
 
  useEffect(() => {
   !access && navigate('/login');
 }, [access, navigate]);

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({data})=> {
         if(!characters.find(character => character.id === data.id)){
            if(data.name){
               setCharacters((prevCharacters) => [...prevCharacters, data])
      }
      } else {
         window.alert('El personaje ya existe');
      } 
   })
   .catch(error => window.alert(error));
}

const onClose = (id) => {
   setCharacters(characters.filter(character => character.id !== id));
}

   if(pathname === '/login'){
      return (
         <div className='App'>
            <Form login={login}/>
         </div>
      )
   }

   return (
      <>
      <div className='App'>
         <Nav onSearch={onSearch}/>
      </div>
      <Routes>
         <Route path='/login' element={<Form login={login}/>} />
         <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>} />
         <Route path='/about' element={<About />} />
         <Route path='/detail/:id' element={<Detail/>} />
         <Route path= '/favorites' element={<Favorites/>} />
      </Routes>
   </>
   );
}

export default App;
