import React from 'react'
import { NavLink } from 'react-router-dom'

interface Props {
    text: string
}

export const Navitem: React.FC<Props> = ({text}) => {
    const activeClassName = 'NavLinkActive';

    return (
        <div className='Navitem'>
            <NavLink to={text.toLowerCase()} 
                className={({isActive}) => 
                    isActive ? activeClassName : 'NavLink'}>
                {text}
            </NavLink>
        </div>
    );
}