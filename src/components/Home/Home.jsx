import React, { useEffect, useState} from 'react'
import { useLazyQuery } from '@apollo/client'
import { LIST } from '../../service/queries'
import CardList from '../CardList/CardList'
import Search from '../Search/Search'
import Home from './Home.css'

export default () => {

    const [term, setTerm] = useState('')
    const [show, setShow] = useState(false)
    const [ getList, { error, loading, data }] = useLazyQuery(LIST, 
		{ variables: { term: ''} }
	)

    useEffect(() => { 
		getList();
	},[getList]);

    const hanedleSearch = term => {
		getList({ variables: { term: term } });
	};

    
    const submit = (event, term) => {
		event.preventDefault();
        setShow(true)
		hanedleSearch(term);
	}

    return (
        <div className="home">
            <Search submit={submit}/>
            <CardList loading={ loading } error={ error } data={ data } />
        </div>

    )
}