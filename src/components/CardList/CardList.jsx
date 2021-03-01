import React from 'react'
import Card from '../Card/Card'
import Loader from '../../views/Loader'
import Error from '../../views/Error'
import './CardList.css'

export default ({ loading, error, data }) => {
	if (error) return <Error />
    if (loading) return <Loader />  	
    if (data === undefined) return <Loader />
    
    
    return (
        <div data-testid="list" className="card-list">
            {
				data.list.map(item => {
                    return (
                        <Card item={item} key={item._id} />
                    )
                })
			}
        </div>
    )
}