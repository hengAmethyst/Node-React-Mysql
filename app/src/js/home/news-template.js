import React from 'react'
import 'toSrc/css/home/news.scss'
import {withRouter} from 'react-router-dom'

@withRouter
export default class NewsTemplate extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    intoNews(){
        this.props.history.push('/news')
    }

    render(){
        return(
            <div className="news-box" onClick={this.intoNews.bind(this)}>
                <div className="news-img">
                    <img src={this.props.info.imgUrl}/>
                </div>
                <div className="news-title">
                    <h2 className="title">{this.props.info.title}</h2>
                    <h4 className="content">{this.props.info.content}</h4>
                </div>
            </div>
        )
    }
}