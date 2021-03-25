import React from "react";
import { Link } from "gatsby";
export default function Header() {
    const [menuIsOpen, setMenu] = React.useState(false)
    return (
        <div className="bg-gray-200 font-semibold py-4">
            <nav>
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="absolute right-0 flex items-center sm:block md:hidden">
                            <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false" onClick={() => setMenu(!menuIsOpen)} >
                                <span className="sr-only">Open main menu</span>
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex-1 flex items-center justify-center sm:items-stretch md:justify-start">
                            <div className="flex-shrink-0 flex items-center">
                                <Link to="/">Anti-Amazon Shopper</Link>
                            </div>
                        </div>
                        <div className="flex flex-row space-y-4 space-x-2 hidden md:block">
                            <Link to="/" activeClassName="font-semibold border-b-2 border-black" className="px-3 py-2 hover:bg-gray-500 hover:text-white rounded-t-md text-sm font-medium">Home</Link>
                            <Link to="/about" activeClassName="font-semibold border-b-2 border-black rounded-none" className="px-3 py-2 text-black hover:bg-gray-500 hover:text-white rounded-t-md text-sm font-medium">About</Link>
                            <Link to="#" activeClassName="font-semibold border-b-2 border-black rounded-none" className="px-3 py-2 text-black hover:bg-gray-500 hover:text-white rounded-t-md text-sm font-medium">Why not Amazon?</Link>
                            <Link to="#" activeClassName="font-semibold border-b-2 border-black rounded-none" className="px-3 py-2 bg-red-500 text-white font-medium bg-opacity-75 hover:bg-red-600 hover:text-white rounded-md text-sm font-medium">Download the extension</Link>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <div className="ml-3 relative">
                                <div>
                                    <button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-haspopup="true">
                                        <span className="sr-only">Open user menu</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={menuIsOpen ? "md:hidden sm:block sm:ml-6" : "hidden"}>
                    <div className="flex flex-col space-y-4">
                        <Link to="/" activeClassName="px-3 py-2 font-semibold border-b-2 border-black" className="px-3 py-2 hover:bg-gray-500 hover:text-white rounded-t-md text-sm font-medium border-black">Home</Link>
                        <Link to="/about" activeClassName="px-3 py-2 font-semibold border-b-2 border-black" className="text-black hover:bg-gray-500 hover:text-white px-3 py-2 rounded-t-md text-sm font-medium">About</Link>
                        <Link to="#" activeClassName="px-3 py-2 font-semibold border-b-2 border-black" className="text-black hover:bg-gray-500 hover:text-white px-3 py-2 rounded-t-md text-sm font-medium">Why not Amazon?</Link>
                        <Link to="#" activeClassName="px-3 py-2 font-semibold border-b-2 border-black" className="bg-red-500 text-white font-medium bg-opacity-75 hover:bg-red-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Download the extension</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}