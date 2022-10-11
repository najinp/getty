import React from 'react'
import Logo from './Logo'

const Header = () => {
    return (
        <header className='Header'>
            <div className="inner">
                <Logo />
                <ul>
                    <li>이용안내</li>
                    <li>전시</li>
                    <li>교육프로그램</li>
                    <li>소장품</li>
                    <li>미술관소개
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header