import React from 'react'
import { Link } from 'react-router-dom';
import { Navitem } from './Navitem'

interface Props {

}

export const Navbar: React.FC<Props> = () => {
    return (
        <div className='Navbar'>
            <Link to={'/'} id='ah'>AH.</Link>
            <Navitem text='about' />
            <Navitem text='projects' />
            <Navitem text='resume' />
            <Navitem text='contact' />
        </div>
    );
}