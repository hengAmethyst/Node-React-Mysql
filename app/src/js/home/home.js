import React from 'react'
import {Link,Route} from 'react-router-dom'

import Head from '../components/common/header'
import Banner from './carousel'
import Nav from './nav'
import Video from './video'
import News from './news'



class Home extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="home">
              <Head/> 
              <Banner/>
              <Nav/>
              <Route path="/home/video" component={Video}/>
              <Route path="/home/news" component={News}/>
            </div>
        )
    }
}

export default Home