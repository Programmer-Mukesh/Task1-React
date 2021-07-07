import React from 'react'
import logo from './logo.png'

const Logo = () => {
    const style={
        marginLeft: '10rem',
        padding: '1rem'
    }
    return (
        <div className="logo">
            <img style={style} src={logo} alt="logo"/>        
        </div>
    )
}

export default Logo;
