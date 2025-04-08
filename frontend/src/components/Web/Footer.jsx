import React from 'react'

export const Footer = () => {
    return (
        <footer className="bg-Color4 text-white py-4 ">
          <div className="container mx-auto text-center">
            <p>&copy; {new Date().getFullYear()} MySite. All rights reserved.</p>
          </div>
        </footer>
      );    
}
