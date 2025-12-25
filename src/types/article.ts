
interface eyecatchConfig {
	url: string,
	height:string,
	width:string
}

export interface Article {
	id: string, 
	eyecatch: eyecatchConfig, 
	title: string, 
	tag: string[] | undefined, 
	contents: string | undefined,
	publishedAt: string,
}

export interface ArticleProps {
	article: Article[]
}
export interface ArticleContent {
	article: Article,
	text:string,
	color:string,
}