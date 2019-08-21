export default class Review {
    constructor(data) {
        this.title = data.title;
        this.added = data.added;
        this.content = data.content;
        this.path = data.path;
        this.rating = data.rating;
        this.user = data.user;
    }

    static parse(data) {
        const review = {
            title: data.title,
            added: data.added,
            content: data.content,
            path: data.path,
            rating: data.rating,
            user: data.user,
        };

        return new Review(review);
    }
}
