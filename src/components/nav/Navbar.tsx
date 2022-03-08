import React from 'react'
import { Link } from 'react-router-dom';
import { Navitem } from './Navitem'
import styled from 'styled-components'

interface Props {

}

export const Navbar: React.FC<Props> = () => {
    return (
        <div className='Navbar'>
            <AH to={'/'} id='ah'>AH.</AH>
            <Navitem text='about' />
            <Navitem text='projects' />
            <Navitem text='resume' />
            <Navitem text='contact' />
        </div>
    );
}

const AH = styled(Link)`
    text-decoration: none;
    color: var(--main-red);
    margin-right: auto;
    font-size: 36px;
    font-weight: 800;
`;