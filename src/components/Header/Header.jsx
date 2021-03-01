import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default () => {
    return (
        <div className="header">
            <div className="header-logo">
                <i className="fas fa-flag"></i>
                CountryBox |
            </div>
            <div className="header-links">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
            </div>
        </div>
    )
}