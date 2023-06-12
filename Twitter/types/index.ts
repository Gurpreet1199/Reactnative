export type User = {
    id: String;
    name: string;
    username: string;
    image? : string;
  };
  export type tweetType = {
    id:string,
    content: string;
    user : User;
    image? : string;
    createdAt: string;
    numberOfComments?: number,
    numberOfRetweets?: number,
    numberOfLikes?: number,
    impressions?: number,

  };