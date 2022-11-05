
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashRouter as Router, Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


// import FavoriteItem from "../FavoriteItem/FavoriteItem";

function DetailsPage() {
    const dispatch = useDispatch();
    const details = useSelector(store => store.details)
    const history = useHistory();

    const backToList = (event) => {
        console.log('in backToList');
        history.push('/')
    }
    return (
        <>

            <h1>details page</h1>
            <button
                onClick={backToList}>Back to list</button>
        </>
    )
}

export default DetailsPage;