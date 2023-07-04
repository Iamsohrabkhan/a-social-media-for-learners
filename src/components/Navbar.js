import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
const Navbar= () => {

    const [state, setState] = useState(false)
    const active =useRouter().route
    console.log("🚀 ~ file: Navbar.js:8 ~ Navbar ~ active:", active)
    

    return (
        <header className='fixed left-0 right-0 z-50 shadow-sm'>
            
        <nav className="fixed left-0 right-0 bg-slate-50 md:static md:text-sm md:border-none">
            <div className="items-center max-w-screen-xl px-4 mx-auto md:flex md:px-8">
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <Link className='text-lg italic font-bold text-teal-700' href="/">
                        <span>Frontendfyi </span>
                        <span>Motion</span>
                        
                    </Link>
                    <div className="md:hidden">=
                        <button className="text-gray-500 hover:text-gray-800"
                            onClick={() => setState(!state)}
                        >
                            {
                                state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </div>
                <div className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
                    <ul className="items-center justify-end space-y-6 md:flex md:space-x-6 md:space-y-0 ">
            
                                <li className=' group'>
                                    <Link href="/" className='block h-6 overflow-hidden w-14'>
                                        <div className="relative">
                                            <span className={`absolute block font-medium transition-transform duration-300 translate-y-0 group-hover:-translate-y-full group-hover:text-teal-500 group-hover:font-bold ${active==="/"?"text-teal-500 font-bold":""}`}>Home</span>
                                            <span className={`absolute block font-medium transition-transform duration-300 translate-y-full group-hover:translate-y-0 group-hover:text-teal-500 group-hover:font-bold ${active==="/"?"text-teal-500 font-bold":""}`}>Home</span>
                                        </div>
                                    </Link>
                                </li>
            
                                <li className=' group'>
                                    <Link href="/about" className='block h-6 overflow-hidden w-14'>
                                        <div className="relative">
                                            <span className={`absolute block font-medium transition-transform duration-300 translate-y-0 group-hover:-translate-y-full group-hover:text-teal-500 group-hover:font-bold ${active==="/about"?"text-teal-500 font-bold":""}`}>About</span>
                                            <span className={`absolute block font-medium transition-transform duration-300 translate-y-full group-hover:translate-y-0 group-hover:text-teal-500 group-hover:font-bold ${active==="/about"?"text-teal-500 font-bold":""}`}>About</span>
                                        </div>
                                    </Link>
                                </li>
                               
                                <li className=' group'>
                                    <Link href="/blogs" className='block h-6 overflow-hidden w-14'>
                                        <div className="relative">
                                            <span className={`absolute block font-medium transition-transform duration-300 translate-y-0 group-hover:-translate-y-full group-hover:text-teal-500 group-hover:font-bold ${active==="/blogs"?"text-teal-500 font-bold":""}`}>Blogs</span>
                                            <span className={`absolute block font-medium transition-transform duration-300 translate-y-full group-hover:translate-y-0 group-hover:text-teal-500 group-hover:font-bold ${active==="/blogs"?"text-teal-500 font-bold":""}`}>Blogs</span>
                                        </div>
                                    </Link>
                                </li>
                               
                                <li className=' group'>
                                    <Link href="/contact" className='block h-6 overflow-hidden w-14'>
                                        <div className="relative">
                                            <span className={`absolute block font-medium transition-transform duration-300 translate-y-0 group-hover:-translate-y-full group-hover:text-teal-500 group-hover:font-bold ${active==="/contact"?"text-teal-500 font-bold":""}`}>Contact</span>
                                            <span className={`absolute block font-medium transition-transform duration-300 translate-y-full group-hover:translate-y-0 group-hover:text-teal-500 group-hover:font-bold ${active==="/contact"?"text-teal-500 font-bold":""}`}>Contact</span>
                                        </div>
                                    </Link>
                                </li>
                               
                             
                       
                    </ul>
                </div>
            </div>
        </nav>
        </header>

    )
}
export default Navbar