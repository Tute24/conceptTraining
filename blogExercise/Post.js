let Comment = require("./Comment")
class Post {
    constructor(author, topic){
        this.author = author
        this.comments = []
        this.topic = topic
    }

    addComment (commentAuthor,commentContent){
        let comment = new Comment(commentAuthor,commentContent)
        this.comments.push(comment)
    }
}

module.exports = Post

