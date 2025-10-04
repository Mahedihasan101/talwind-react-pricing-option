import React, { useState } from 'react';
import Link from './Link';
import { Menu, X,} from 'lucide-react';


const urlData = [
    { id: 101, url: "https://example.com/home", name: "Home" },
    { id: 102, url: "https://example.com/about", name: "About Us" },
    { id: 103, url: "https://example.com/contact", name: "Contact" },
    { id: 104, url: "https://example.com/products", name: "Products" },
    { id: 105, url: "https://example.com/blog", name: "Blog" }
];


const NavBar = () => {

    const [open, setOpen] = useState(false)

    const links = urlData.map(route => <Link key={route.id} route={route}></Link>)
    return (
        <nav className='flex justify-between mx-10'>
            <span className='flex' onClick={()=>setOpen(!open)}>
              {
                open ?<X className='md:hidden'></X> :<Menu className='md:hidden'></Menu>
              }
                
                <ul className={`md:hidden absolute duration-1000
                ${open?'top-8':'-top-40'}
                 bg-amber-200 
                    text-black`}>{links}</ul>
                <h3 className='ml-4'>My Navbar</h3>
            </span>
            <ul className='md:flex hidden'>
                {
                    links
                }
            </ul>
            <button>Sing in</button>
        </nav>

    );
};

export default NavBar;