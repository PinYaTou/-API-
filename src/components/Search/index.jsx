/* eslint-disable no-const-assign */

import React from 'react'
import './index.css'

export default function Search(props) {



    const search = () => {

        //const keyWord = inputElement.current.value;
        props.updateIsFirst(false);
        props.updateIsLoading(true);

        fetch(`https://api.wmdb.tv/api/v1/top?type=Imdb&skip=0&limit=20&lang=Cn`)
            .then(
                response => {
                    return response.json();
                }
            )
            .then(
                response => {
                    props.updateIsLoading(false);
                    props.updateUsers(response);
                }
            )
            .catch(
                error => {
                    props.updateIsLoading(false);
                    props.updateError(error.message);
                }
            )
    }

    return (
        <div className="searchPart">
            <div className='searchMovies'>
                <h3 className="jumbotron-heading">豆瓣电影TOP250</h3>
                <input type="button" onClick={search} value='点我显示豆瓣TOP250榜单' />&nbsp;
            </div>
        </div>
    )
}




