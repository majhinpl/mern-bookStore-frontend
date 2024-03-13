import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Card = ({ book }) => {
    console.log(book)
  return (
    <>
        <div className="w-[300px] rounded-md border" key={ book._id }>
            <img
                src={book.imageUrl ? book.imageUrl : "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?q=80&w=1212&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                alt="Book Cover"
                className="h-[200px] w-full rounded-t-md object-cover"
            />
            <div className="p-4">
                <h1 className="inline-flex items-center text-lg font-semibold">
                {book.bookName}                
                </h1>
                <p className="mt-3 text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                debitis?
                </p>
                <div className="mt-4">
                    <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                        RS. {book.bookPrice}
                    </span>
                    <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                    ISBN{book.isbnNumber}
                    </span>
                    <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                        {book.authorName ? book.authorName : "Author Name"}
                    </span>
                </div>
                <Link to={`/book/${book._id}`}>
                    <button
                        type="button"
                        className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                        Read
                    </button>
                </Link>
                
            </div>
        </div>
    
    </>
  )
}

export default Card