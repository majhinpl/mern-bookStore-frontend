import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import Card from '../../components/Card'
import axios from 'axios'


const Books = () => {
    const [books,setBooks] = useState([])
    const fetchBooks = async()=>{
    const response =  await axios.get('https://mern-book-store-frontend-gamma/book')
    if(response.status === 200){
        setBooks(response.data.data)        
    }
    }

    useEffect(()=>{
        fetchBooks()
    },[])
    
    return (
    <>
        <Navbar />
        <div className='flex flex-wrap justify-evenly mt-20'>

            {
                books.length > 0 && books.map((book)=>{
                return (
                    <Card book={book}/>
                )
                })
            }

        </div>
    </>
  )
}

export default Books