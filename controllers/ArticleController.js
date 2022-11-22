import e from 'express';
import ArticleAction from '../actions/Article.js'

export const getNews = async (req, res) => {
    try{

        const articles = await ArticleAction.getByFilters(req, res);

        res.header("Content-Type",'application/json');  
        res.status(200).send(JSON.stringify(articles, null, 4));

    } catch(err) {

        console.log(err);
        res.status(500).json({
            message: 'Failed to retrieve articles'
        })
    }
}

export default {
    getNews
}