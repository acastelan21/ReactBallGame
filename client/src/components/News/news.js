import React, {Component} from "react";
import API from "../../utils/API";
import "./news.css";
class News extends Component{

constructor(){
    super();
    this.state={
        allArticles:[]
    }
}
componentWillMount(){
    this.handleSearchNews();
}
handleSearchNews =()=>{
    
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
    const articles = this.state.allArticles.slice(0,10);
    return(
        <div className="sectionName">
         <div className="row">
                <div className="col-12">
                <h2><u>News</u></h2>
                </div>
                </div>
            <div className="row">
                <div className="col-12">
                
                {articles.map((articles,i)=>
                (
                <div key={i}>
                    <div className="newsArticle">
                   <div> <strong>{i + 1+"."} {articles.title}</strong>
                    </div>
                    <div>
                    {articles.description}
                    </div>
                    <div><a href={articles.url}> To read more click here </a>
                    

                    </div>

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