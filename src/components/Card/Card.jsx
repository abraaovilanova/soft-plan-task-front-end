import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom';

export default ({ item }) => {
    return (
        <div className="card" data-testid="card" key={item._id}>
            <Link  data-testid="link" to={`/${item._id }`}>
                <div className="card-flag">
                    <img src={item.flag.svgFile} alt={` Flag ${ item.name } `} />
                </div>
                <div className="card-content">
                    <h2 className="title">{item.name}</h2>
                    <p>{item.capital}</p>
                </div>
            </Link>
        </div>
    )
}