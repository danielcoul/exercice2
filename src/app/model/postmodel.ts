export class PostM {

	title : string;
	content : string;
	loveIts: number;
	create_at: string;

	constructor( Title: string,  Content: string, ){
			 		this.title = Title;
			 		this.content = Content;
			 		this.loveIts = 0;
			 		this.create_at = Date();
		 	}
}