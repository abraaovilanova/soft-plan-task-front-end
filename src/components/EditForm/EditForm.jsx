import React, { useEffect, useReducer  } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import { useLazyQuery } from '@apollo/client'
import { DETAILS } from '../../service/queries'
import { contriesItemsVar } from '../../service/index'
import Form from '../Form/Form'
import './EditForm.css'
import Error from '../../views/Error'
import Loader from '../../views/Loader'

export default () => {
    const history = useHistory()
    const { id } = useParams()
    const [ getDetails, { error, loading, data }] = useLazyQuery( DETAILS, 
		{ variables: { id: id } }
	)

	useEffect( () => {
		getDetails();
	},[getDetails]);


	if (error) return <Error />
	if (loading) return <Loader />
	if (data === undefined) return <Loader />
	  
  	if (data.details.length === 0) {

  		return <Error />
  	}

    const edit = edited => {
        const newLocalData = contriesItemsVar().map( item => {
            if ( item._id === edited._id )
                return edited;
            return item;
        })

        contriesItemsVar([ ...newLocalData ])
        history.push("/")
    }


    return (
        <div className="form">
            <Form country={ data.details } edit={ edit }/>
        </div>
    )
}