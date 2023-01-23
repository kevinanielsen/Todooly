'use client'
import { CheckSquare, User } from "phosphor-react";
import './navbar.css';

export function Navbar() {
    return(
        <nav>
            <div className="nav-container">
                <div className="logo">
                    <a href="#" aria-label="Home" className="logo">
                        <CheckSquare size={40} />
                        <h1>Todooly</h1>   
                    </a> 
                </div>
                <User size={32} />
            </div>           
        </nav>
    )
}