import './assets/css/App.css'
import routes from './router/index'
import { HashRouter as  Switch, Route,Redirect } from 'react-router-dom'
function App() {
	return (
		<div className="App">
			{/* <Switch>    */}
				{routes.map((item, index) => {
					return (
						<Route
							key={index}
							path={item.path}
							component={item.component}
						/>
					)
				})}
				{/* <Redirect to={{ pathname: '/login' }} />           */}
			{/* </Switch> */}
		</div>
	)
}
export default App
