import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'

const SingleBook = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    console.log(id)
    const [book, setBook] = useState({});

    const fetchBook = async () => {
        const response = await axios.get(`https://mern-bookstore-backend-rf03.onrender.com/book/${id}`);
        console.log(response)
        if (response.status === 200) {
            setBook(response.data.data)
        } 
    }    

    useEffect(() => {
        fetchBook()
    }, [])

    console.log(setBook)

    const deleteBook = async() => {
        const response = await axios.delete(`https://mern-bookstore-backend-rf03.onrender.com/book/${id}`)

        if (response.status === 200) {
            navigate("/book");
            alert("Your book has been deleted")
        } else {
            console.log('Deletions not complete');
        }
    }

  return (
    <>
        <Navbar />

        <section className="overflow-hidden">
            <div className="mx-auto max-w-5xl px-5 py-24">
                <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
                <img
                    alt="Nike Air Max 21A"
                    className="h-64 w-full rounded object-cover lg:h-96 lg:w-1/2"
                    src={book.imageUrl ? book.imageUrl : "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                />
                <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
                    <h2 className="text-sm font-semibold tracking-widest text-gray-500">
                    </h2>
                    <h1 className="my-4 text-3xl font-semibold text-black">{book.bookName ? book.bookName : "Book Name Here"}</h1>
                    <div className="my-4 flex items-center">
                    <span className="flex items-center space-x-1">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="text-yellow-500"
                        >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="text-yellow-500"
                        >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="text-yellow-500"
                        >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="text-yellow-500"
                        >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="text-yellow-500"
                        >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                        <span className="ml-3 inline-block text-xs font-semibold">
                        4 Reviews
                        </span>
                    </span>
                    </div>
                    <p className="leading-relaxed">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur rem
                    amet repudiandae neque adipisci eum enim, natus illo inventore totam?
                    </p>
                    <div className="mt-4 flex items-center border-b-2 border-gray-100 pb-5">  
                        {`ISBN${book.isbnNumber ? book.isbnNumber : "ISBNNUMBER"}`} 
                         
                    </div>
                    <div className="flex items-center border-b-2 border-gray-100 pb-5">  
                        {`Author Name: ${book.authorName ? book.authorName : "Author"}`}                          
                    </div>
                    <div className="flex items-center border-b-2 border-gray-100 pb-5">  
                        {`Price: RS. ${book.bookPrice ? book.bookPrice : "1234"}`}                         
                    </div>
                    <div className="flex items-center justify-stretch sm:flex-column flex-wrap">
                        <Link to={`/editBook/${book._id}`}>
                        <button
                            type="button"
                            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm                           hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset- focus-visible:outline-black uppercase"
                        >
                            Edit
                        </button>
                        </Link>
                        <button
                            type="button"
                            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black uppercase"
                            onClick={deleteBook}
                        >
                            Delete
                        </button>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default SingleBook