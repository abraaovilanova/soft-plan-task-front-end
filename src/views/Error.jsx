import React from 'react'
import './Error.css'
import { Link } from 'react-router-dom'

export default () => {
    return (
        <div className="error-page">
            <h2>Ooops!</h2>
            <p>Something's missing</p>
            <Link to="/">Back</Link>
        </div>
    )
}