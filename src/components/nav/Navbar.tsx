import React from 'react'

interface Props {

}

export const Navbar: React.FC<Props> = () => {
    return (
        <div className='Navbar'>
            <span>AH</span>
            <span>About</span>
            <span>Resume</span>
            <span>Projects</span>
            <span>Contact</span>
        </div>
    );
}