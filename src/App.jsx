import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios';

import SingleBook from './pages/singleBook/SingleBook';
import AddBook from './pages/addBook/AddBook';
import AllBooks from './pages/allBooks/Books';
import EditBook from './pages/editBook/EditBook';
import Home from './pages/home/Home';

function App() {

  const [books,setBooks] = useState([])
  const fetchBooks = async()=>{
   const response =  await axios.get('https://mern-book-store-frontend-gamma/book')
  if(response.status === 200){
    setBooks(response.data.data)
  }
  } 

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/book/:id' element={<SingleBook />} />
        <Route path='/addbook' element={<AddBook />} />
        <Route path='/book' element={<AllBooks />} />
        <Route path="/editBook/:id" element={<EditBook />} />
      </Routes>
    </BrowserRouter>
    
      
    </>
  )
}

export default App
