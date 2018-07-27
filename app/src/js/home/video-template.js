import React from 'react'
import 'toSrc/css/home/video.scss'
import {withRouter} from 'react-router-dom'


@withRouter
export default class VideoTemplate extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    intoVideo(){
        this.props.history.push('/video')
    }
    render(){
        return(
            <div className="video-box"  onClick={this.intoVideo.bind(this)}>
                <div className="video-img">
                    <img src={this.props.info.imgUrl}/>
                </div>
                <div className="video-title">
                    <h2 className="title">{this.props.info.title}</h2>
                    <h4 className="content">{this.props.info.content}</h4>
                </div>
            </div>
        )
    }
}