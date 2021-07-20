export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const TOGGLE_FAVORITES = 'TOGGLE_FAVORITES';

export const fetchArticles = () => {
    return async dispatch => {

        // logic to fetch data
        const result = await fetch('http://newsapi.org/v2/everything?domains=wsj.com&apiKey=3724a8240c064edf979715110afa5157');

        const resultData = await result.json();

        console.log(resultData);

        dispatch({
            type: FETCH_ARTICLES,
            payload: resultData
        });
    }
}

export const toggleFavorites = url => {
    return{
        type: TOGGLE_FAVORITES,
        payload: url
    }
}