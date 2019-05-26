

exports.booksearch_byTextInput = (req, res, next) => {
    let intput = req.query.searchText;

    console.log(intput)
    let mockBooks = [{
        title: 'test1',
        categoty: 'testCategory',
        intput
    },
    {
        title: 'test2',
        categoty: 'testCategory',
        intput  
    }]
    
    res.json({mockBooks});
}