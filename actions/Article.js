import {config} from 'dotenv';

config();

import axios from 'axios';
import NodeCache from 'node-cache';

const articleCache = new NodeCache({ stdTTL: process.env.NODE_CACHE_TTL, checkperiod: process.env.NODE_CACHE_CHECK} );

const url = process.env.GNEWS_API_URL;
const token = process.env.GNEWS_API_KEY;

const getByFilters = async function(req, res){
    try{
        let results = {};

        const filter = getFilterString(req);

        //check the cache by filter
        const cached = articleCache.get(filter);

        if (cached == undefined ){
            //if no cache get results and set it to cache
            const params = encodeURI(`${url}${filter}`);
            results = await axios.get(params);

            articleCache.set(filter, results.data);
        }else{
            // if cache is found return it
            results.data = cached;
        }

        return results.data;
        
    } catch(err){
       console.log('getNews error', err);

       throw err;
    }
}

const getFilterString = function (req){

    const query = req.query.keyword; // keyword which defined in the url
    const size = (req.params.amount) ? `&max=${req.params.amount}` : '';

    // if lang, title defined in url, add to filter
    const lang = (req.query.lang) ? `&lang=${req.query.lang}`: ``;
    const title = (req.query.title) ? `&in=title` : ``;
 
    return `search?q=${query}&token=${token}${size}${title}${lang}`
}


export default {
    getByFilters
}
