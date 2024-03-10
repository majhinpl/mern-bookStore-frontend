import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
        <div className="relative w-full bg-white mb-4">
            <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8 sm:grid-cols-2 md:grid-cols-2">
                <div className="flex flex-col justify-center items-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
                
                <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
                    A BOOK STORE
                </h1>

                <p className="mt-8 mb-2 text-lg text-gray-700 text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
                    modi blanditiis dolores quasi eaque explicabo!
                </p>
                <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0 mt-2 mb-3">
                <Link to={"/book"}>
                <button
                    type="button"
                    className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black hover:opacity-[0.4]"
                >
                    View All Books
                </button>
                </Link>
                
                </div>

                </div>
                <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
                <img
                    className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]"
                    src="https://images.pexels.com/photos/2761017/pexels-photo-2761017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="https://images.pexels.com/photos/2761017/pexels-photo-2761017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
                </div>
            </div>
            
        </div>
        <hr  className='border-2 border-slate-500'/>
        
    </>
  )
}

export default Hero