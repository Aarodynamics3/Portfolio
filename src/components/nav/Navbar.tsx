import React from 'react'
import { Link } from 'react-router-dom';
import { Navitem } from './Navitem'

interface Props {

}

export const Navbar: React.FC<Props> = () => {
    return (
        <div className='Navbar'>
            <Link to={'/'} id='ah'>AH.</Link>
            <Navitem text='About' />
            <Navitem text='Resume' />
            <Navitem text='Projects' />
            <Navitem text='Contact' />
        </div>
    );
}