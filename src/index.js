class Site {
    constructor(){
        this.boards = []
    }

    addBoard(board){
        if(this.boards.find(v=>v.name === board.name)) throw new Error("Error")
        board.addBoardTF = true
        this.boards.push(board)
    }
    
    findBoardByName(board){
        return this.boards.find(v => v.name === board)
    }
}

class Board{
    constructor(name){
        if(!name) throw new Error("Error")
        this.name = name
        this.addBoardTF = false
        this.articles = []
    }

    publish(article){
        if(this.addBoardTF === false) throw new Error("Error")
        article.id = this.name+'-'+Math.random()
        article.createdDate = new Date().toISOString()
        article.addArticleTF=true
        this.articles.push(article)
    }

    getAllArticles(){
        return this.articles
    }
}

class Article {
    constructor(article){
        const {subject, content, author} = article
        if(!subject || !content || !author) throw new Error("Error")

        this.addArticleTF = false
        this.comments = []
    }

    reply(comment){
        if(this.addArticleTF == false) throw new Error("Error")
        comment.createdDate = new Date().toISOString()
        this.comments.push(comment)
    }

    getAllComments(){
        return this.comments
    }
}

class Comment {
    constructor(comment){
        const {content, author} = comment
        if(!content || !author) throw new Error("Error")
    }
}

module.exports = {
    Site,
    Board,
    Article,
    Comment,
};
