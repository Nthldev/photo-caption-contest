const NodeCache = require('node-cache');
const myCache = new NodeCache({stdTTL: 0});

//Middlware de cache exclusivo para rota getImages
const cacheGetImages = (req, res, next) => {
    const cacheKey = 'get_images';
    const dataCache = myCache.get(cacheKey);

    if (dataCache) {
        console.log("Respondido pelo cache do Middleware (All)");
        return res.json(dataCache);
    }

    next();
};

module.exports = {
    myCache,
    cacheGetImages
};