import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
//引入组件
import RouteMap from './routerMap'

import store from '../redux/store'
//将模板转换为HTML，并插入到指定的标签中
ReactDOM.render(
	<Provider store={store}>
		<RouteMap/>
	</Provider>
	,
	document.getElementById('app')
)