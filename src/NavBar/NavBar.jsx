import React from 'react';
import Link from './Link';

const urlData = [
    { id: 101, url: "https://example.com/home", name: "Home" },
    { id: 102, url: "https://example.com/about", name: "About Us" },
    { id: 103, url: "https://example.com/contact", name: "Contact" },
    { id: 104, url: "https://example.com/products", name: "Products" },
    { id: 105, url: "https://example.com/blog", name: "Blog" }
];


const NavBar = () => {
    return (

        <ul className='flex'>
            {
                urlData.map(route => <Link key={route.id} route={route}></Link>)
            }
        </ul>

    );
};

export default NavBar;