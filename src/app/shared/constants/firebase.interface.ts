export const JBO_EMAIL: string = 'info@jbomarketing.space';

export interface IEvent {
    date: string;
    title: string;
}

export interface IArticle {
    title: string;
    image: string;
    subtitle: string;
    text: string;
    id: string;
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
