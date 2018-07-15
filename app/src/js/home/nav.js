import React from 'react'
import {Link,NavLink,Route} from 'react-router-dom'
import 'toSrc/css/home/nav.scss'

import Video from './video'

export default class Nav extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="nav">
                <ul>
                    <li>
                        <NavLink to="/home/video" activeClassName='selected'>视频</NavLink>
                    </li>
                    <li>
                        <NavLink to="/home/news"  activeClassName='selected'>新闻</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}