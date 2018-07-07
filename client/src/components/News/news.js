import React, {Component} from "react";
import API from "../../utils/API";

class News extends Component{

constructor(){
    super();
    this.state={
        allArticles:[]
    }
}
handleSearchNews =(event)=>{
    event.preventDefault();
    API.searchForNews()
    .then((response)=>{
        console.log("=====================================");
        console.log(response.data);
        console.log("======================================");
        this.setState({
            allArticles:response.data.articles
        })
    })
}

render(){
    const articles = this.state.allArticles.slice(0,5);
    return(
        <div className="sectionName"> News
            <button onClick={this.handleSearchNews} type="submit" className="btn btn-primary">
                Get News
            </button>
            <div className="row">
                <div className="col-12">
                
                {articles.map((articles,i)=>
                (
                <div key={i}>
                    <div className="newsArticle">
                    {i + 1+"."}
                    {articles.title}
                    <br/>
                    {articles.description}
                    <br/>
                    {articles.url}
                    </div>

                </div>



                ))}
                    

                </div>
            </div>
        </div> 







    )
}


}
export default News; 