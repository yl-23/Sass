import './assets/css/App.css'
import routes from './router/index'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
function App() {
	console.log(routes)
	return (
		<div className="App">
			<Router>
				<Switch>
					{routes.map((item, index) => {
						return (
							<Route
								key={index}
								path={item.path}
								component={item.component}
							/>
						)
					})}
					<Redirect to={{ pathname: '/home' }} />          
				</Switch>
			</Router>
		</div>
	)
}
export default App
