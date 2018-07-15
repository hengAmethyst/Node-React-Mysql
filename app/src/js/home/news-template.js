import React from 'react'
import 'toSrc/css/home/news.scss'

export default class NewsTemplate extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    render(){
        return(
            <div className="news-box">
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