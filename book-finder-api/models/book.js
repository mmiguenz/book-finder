class book {
    constructor(id, volumeInfo){
        this.id = id;
        this.title = (volumeInfo&& volumeInfo.title)? volumeInfo.title: '';
        this.authors = (volumeInfo && volumeInfo.authors)? volumeInfo.authors.join(','): '';
        this.description = (volumeInfo && volumeInfo.description)?volumeInfo.description: '';
        this.publisher = (volumeInfo && volumeInfo.publisher)?volumeInfo.publisher: '';
        this.smallThumbnailLink = (volumeInfo && volumeInfo.imageLinks && volumeInfo.imageLinks.smallThumbnail)?volumeInfo.imageLinks.smallThumbnail: 'https://png.pngtree.com/png_detail/20181019/open-book-png-clipart_3298621.png';
        this.thumbnailLink = (volumeInfo && volumeInfo.imageLinks && volumeInfo.imageLinks.thumbnail)?volumeInfo.imageLinks.thumbnail: '';
        this.previewLink = (volumeInfo && volumeInfo.previewLink)?volumeInfo.previewLink: '';
    }
}

module.exports = book;

