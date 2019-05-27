class book {
    constructor(id, title, authors, description, smallThumbnailLink, thumnailLink, previewLink){
        this.id = id
        this.title = title
        this.authors = authors
        this.description = description
        this.smallThumbnailLink = smallThumbnailLink
        this.thumnailLink = thumnailLink
        this.previewLink = previewLink
    }
}

module.exports = book;

