import { Comment } from "./Comment";

export interface IPost {
    id: string;
    title: string;
    attachedMedia?: string[]; // Array of ObjectIds of the media in MongoDB
    content: string;
    authorCode: string;
    likes: number;
    comments?: Comment[];
  }