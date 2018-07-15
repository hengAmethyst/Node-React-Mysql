import React from 'react'
import {Link,NavLink,Route} from 'react-router-dom'
import VideoTemplate from './video-template.js'

export default class Video extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: [
                {imgUrl:'static/img/banner1.jpg',title:'科比宣布正式退役',content:'科比在斯台普斯主场正式宣布退役'},
                {imgUrl:'static/img/banner2.jpg',title:'乔丹入选全明星',content:'乔丹以全明星票王正式入选西部全明星首发行列'},
                {imgUrl:'static/img/banner3.jpg',title:'詹姆斯君临天下',content:'小皇帝詹姆斯君临天下'},
                {imgUrl:'static/img/banner3.jpg',title:'詹姆斯君临天下',content:'小皇帝詹姆斯君临天下'},
                {imgUrl:'static/img/banner3.jpg',title:'詹姆斯君临天下',content:'小皇帝詹姆斯君临天下'},
                {imgUrl:'static/img/banner3.jpg',title:'詹姆斯君临天下',content:'小皇帝詹姆斯君临天下'},
                {imgUrl:'static/img/banner3.jpg',title:'詹姆斯君临天下',content:'小皇帝詹姆斯君临天下'}
            ]
        }
    }
    render(){
        return(
            <div className="video-wrap">
                {this.state.data.map((item,index) => (
                    <VideoTemplate info={item} key={index}/>
                ))}
            </div>
        )
    }
}