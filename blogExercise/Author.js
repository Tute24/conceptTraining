const Post = require("./post.js")


class Author {
    constructor(name){
        this.name = name
        this.posts = []
    }
    addPost(topic){
        let posted = new Post(this,topic)
        this.posts.push(posted)
        return posted
    }
}






let author1 = new Author("Tute")
let post = author1.addPost("Football")
post.addComment("Chico","Top")
console.log(post)
console.log(author1)


module.exports = Author