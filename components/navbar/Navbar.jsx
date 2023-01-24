'use client'
import { CheckSquare, User } from "phosphor-react";

export function Navbar() {
    return(
        <nav className="bg-green text-darker mb-3">
            <div className="flex h-20 mx-6 justify-between items-center">
                <div className="flex justify-center items-center">
                    <a href="#" 
                        aria-label="Home" 
                        className="flex justify-center items-center"
                    >
                        <CheckSquare size={40} />
                        <h1 className="inline-block font-bold text-lg">Todooly</h1>   
                    </a> 
                </div>
                <User size={32} className="" />
            </div>           
        </nav>
    )
}