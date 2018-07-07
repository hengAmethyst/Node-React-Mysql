import React from 'react';
import ReactDOM from 'react-dom';
//引入组件
import RouteMap from './routerMap'
//将模板转换为HTML，并插入到指定的标签中
ReactDOM.render(
	<RouteMap/>
	,
	document.getElementById('app')
)