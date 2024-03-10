import React from 'react'
import { RiBook2Line } from "react-icons/ri";
import { Link } from 'react-router-dom';
import AllBooks from '../pages/allBooks/Books';

const Navbar = () => {
  return (
    <div>
      <div className="relative w-full bg-white shadow-md mb-4 py-3">
        <div className="mx-auto flex max-w-7xl items-center justify-around px-4 py-2 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2">
            <span>
              <RiBook2Line />
            </span>
            <span className="font-bold">{<Link to={"/"}>Abookstore</Link>}</span>
          </div>
          <div className="">
            <ul className="inline-flex space-x-8">
              <li>
                <a
                  href="#"
                  className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  {<Link to={"/"}>Home</Link>}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  {<Link to={"/book"}>All Book</Link>}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  <span className="font-bold">{<Link to={"/addBook"}>Add Book</Link>}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar