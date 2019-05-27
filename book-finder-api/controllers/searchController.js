const Book = require('../models/book');
const axios = require('axios');
const googleBooksAPIUrl = 'https://www.googleapis.com/books/v1/volumes?key=AIzaSyAONS1R3Yu9DdxP4GNUU_VTAu86l7cLqEs&projection=lite&q=';

exports.booksearch_byTextInput = (req, res, next) => {
    let input = req.query.searchText;
  
    axios.get(googleBooksAPIUrl+input)
      .then((response) => {           
        res.json(mapitems(response.data.items))                      
      })
      .catch((error => {
        console.log(error)
        next(new Error(error));
      }));      
}

function mapitems(items){   
 return (items)? items.map(({id, volumeInfo}) => new Book(id, volumeInfo)):[]; 
}