import axios from 'axios';

export const fetchReviews = () =>
    axios.get(
        'http://webwrap-title.herokuapp.com/crawl.json?spider_name=scrapingdata-imdb&start_requests=true&movie_code=80156386&movie_title=Guardians%20of%20the%20Galaxy%20Vol.%202',
    );
