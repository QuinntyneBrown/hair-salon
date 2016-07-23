import { Photo } from "../photos/photo.model";

export class Gallery { 
	id:number;
    name: string;
    photos: Array<Photo> = [];
}
