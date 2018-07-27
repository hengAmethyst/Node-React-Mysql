import React from 'react'
import 'toSrc/css/detail/video.scss'
import Discuss from './discuss'

export default class Video extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="video">
                <div className="header">
                    <video src="static/img/video.mp4" controls="controls" width="85%">
                        您的浏览器不支持 video 标签。
                    </video>
                </div>
                <div className="discuss">
                    <Discuss/>
                </div>
            </div>
        )
    }
}