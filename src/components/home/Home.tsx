import React from 'react'
import Typewriter from 'typewriter-effect'
import styled from 'styled-components'

interface Props {

}

export const Home: React.FC<Props> = () => {
    const typewriterStrings = [
        'computer science major.',
        'creative thinker.',
        'team player.',
        '.Net developer.'
    ]

    return (
        <div className='Home'>
            <div className='home-top-left'>
                <span id='hello'>Hello,</span>
                <span>I'm Aaron Hanrahan,</span>
                <TWWrapper> 
                    <span>a</span>&nbsp;
                    <Typewriter 
                        options={{
                            strings: typewriterStrings,
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 50,
                            wrapperClassName: 'typewriter-text',
                            cursorClassName: 'typewriter-cursor'
                        }}
                    />
                </TWWrapper>
            </div>
            <div className='home-top-right'>
                TR
            </div>
            <div className='home-bottom-left'>
                BL
            </div>
            <div className='home-bottom-right'>
                BR
            </div>
        </div>
    );
}

const TWWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;