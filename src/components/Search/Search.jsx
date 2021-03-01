import React, { useState } from 'react'
import './Search.css'

export default ({ submit }) => {
    const [term, setTerm] = useState('')

    return (
        <div className="search" data-testid="search">
            <div className="search-input">
                <input placeholder="Search... i.e Brazil" className="input" type="text" value={term} onChange={(e) => setTerm(e.target.value)} />
                <button className="button" onClick={ e => submit(e, term) }><i className="fas fa-search"></i></button>
            </div>
        </div>
    )
}
