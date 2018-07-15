import React from 'react'
import { Carousel,WingBlank } from 'antd-mobile'
import 'toSrc/css/home/carousel.scss'

export default class Banner extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data: [
                {imgUrl:'static/img/banner1.jpg'},
                {imgUrl:'static/img/banner2.jpg'},
                {imgUrl:'static/img/banner3.jpg'}
            ],
            autoplay: true,// 自动播放
            infinite: true,// 循环
            autoplayInterval:3000,// 自动播放时间间隔

        }
    }
    render(){
        return(
            <WingBlank>
                <Carousel
                 autoplay = {this.state.autoplay}
                 infinite = {this.state.infinite}
                 autoplayInterval = {this.state.autoplayInterval}  
                >
                {this.state.data.map((item,index) => (
                    <img className="banner-img" src={item.imgUrl} key={index}/>
                ))}
                </Carousel>
            </WingBlank>
        )
    }
}
