export interface IEvent {
    date: string;
    title: string;
}

export interface IArticle {
    title: string;
    text: string;
    views: string;
    date: string;
}

export interface IReview {
    title: string;
    review: string;
    imgURL: string;
}

export interface IStats {
    cost: string;
    imgURL: string;
    percentage: string;
    geo: string[];
    title: string;
}
