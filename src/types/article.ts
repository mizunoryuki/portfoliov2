export interface Article {
	id: string, 
	imgUrl: string | undefined, 
	title: string, 
	tag: string[] | undefined, 
	explanation: string | undefined
}

export interface ArticleProps {
	article: Article[]
}