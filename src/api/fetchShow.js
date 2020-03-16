import axios from 'axios';
    
const fetchShow = (setShow, setSeasons, formatSeasons) => {
    axios
    .get(
        "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
    )
    .then(res => {
        setShow(res.data);
        setSeasons(formatSeasons(res.data._embedded.episodes));
        console.log('res.data', res.data)
    });
};

export default fetchShow;