import React from 'react'
import './navSection.css'

function NavSection() {
    return (
        <div className = "navbar">
           <div className = "logo">
               <h3>art<span>Blogs</span></h3>
           </div>

           <div className = "links">
               <a href = "#">Home</a>
               <a href = "#">Blogs</a>
               <a href = "#">Contact</a>
           </div>

           <div className = "signbtn">
               <a href = "#">Sign up</a>
           </div>
            
        </div>
    )
}

export default NavSection

