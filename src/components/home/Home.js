import React, { useEffect, useState } from 'react'
import ContactCard from '../contactCard/ContactCard'
import './Home.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getContactData } from '../../redux/slices/contactSlice';

function Home({ sortedContacts, filteredContacts }) {
    const getData = useSelector(state => state.contactReducer.contactData)
    const dispatch = useDispatch();
    const [sort, setSort] = useState(false);
    const [filter, setFilter] = useState(false);

    useEffect(() => {
        if (sortedContacts.length > 0) {
            setSort(true);
        }
        else {
            setSort(false);
        }
        filteredContacts.length > 0 ? setFilter(true) : setFilter(false);
    }, [sortedContacts, filteredContacts])

    useEffect(() => {
        dispatch(getContactData());
    }, [dispatch])

    return (
        <div className='Home center'>
            {
                filter ? filteredContacts?.map((contact) => <ContactCard key={contact._id} contact={contact} />) : sort ? sortedContacts?.map((contact) => <ContactCard key={contact._id} contact={contact} />) : getData?.contacts?.map((contact) => <ContactCard key={contact._id} contact={contact} />)
            }
        </div>
    )
}

export default Home