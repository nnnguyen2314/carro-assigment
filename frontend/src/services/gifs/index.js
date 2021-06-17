import axios from 'axios';
import giphyConfig from '../../configs/giphy';

export const doSearch = (keyword, lang, limit, offset) => {
    const params = {
        api_key: giphyConfig.API_KEY,
        lang: lang || giphyConfig.LANG,
        limit: limit || giphyConfig.PAGE_SIZE,
        offset: offset,
        q: keyword
    };

    return new Promise((resolve) => {
        axios.get(giphyConfig.API_URL, {params}).then((res) => {
            resolve({isError: false, data: res.data});
        }).catch((err) => {
            resolve({isError: true, error: err.message});
        })
    });
};
