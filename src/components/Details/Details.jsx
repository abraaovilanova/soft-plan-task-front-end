import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useLazyQuery } from '@apollo/client'
import { DETAILS } from '../../service/queries'
import './Details.css'
import Loader from '../../views/Loader'
import Error from '../../views/Error'

export default () => {
    const { id } = useParams()
    const [ getList, { error, loading, data }] = useLazyQuery( DETAILS,
		{ variables: { id: id } }
	)

    useEffect(() => {
		getList();
	},[getList])


	if (error) return <Error />
    if (loading) return <Loader />
    if (data === undefined) return <Loader />
          
    if (data.details.length === 0) {

        return <Error />
      
    }

    const name = data.details.name;
	const { flag, capital, area, population, topLevelDomains } = data.details;

    return (
        <div className="details">
            <div className="details-flag">
                <img src={ flag.svgFile } alt=""/>
            </div>
            <div className="details-content">
                <div className="info">
                    <h3>Name:</h3>
                    <p>{ name }</p>
                </div>
                <div className="info">
                    <h3>Capital:</h3>
                    <p>{ capital }</p>
                </div>
                <div className="info">
                    <h3>Area:</h3>
                    <p>{ area  } km²</p>
                </div>
                <div className="info">
                    <h3>Populatio: </h3>
                    <p>{ population  } hab</p>
                </div>
                <div className="info">
                    <h3>Top-Level-Domains: </h3>
                    <p>{ topLevelDomains[0].name}</p>
                </div>
                <div className="details-button">
                    <Link to="/"><button className="orange">Back</button></Link>
                    <Link to={`/edit/${id}`}><button className="purple">Edit</button></Link>
            </div>
            </div>
        </div>
    )
}