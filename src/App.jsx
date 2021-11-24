import './styles/app.scss'
import Home from './pages/home/Home';
import Watch from './pages/watch/Watch';
import Registrate from './pages/register/Registrate';
import Login from './pages/login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from 'react';
import {AuthContext} from './authContext/AuthContext'
import Personal from './pages/personal/Personal';
import Search from './pages/search/Search';

const App = () => {
	const {user} = useContext(AuthContext)
  return (
    <Router>
			<Switch>
				<Route exact path="/">
						{user ? <Home/> : <Redirect to="/login"/>}
				</Route>
				<Route exact path="/register">
						{!user ? <Registrate/> : <Redirect to="/"/>}
				</Route>
				<Route exact path="/login">
						{!user ? <Login/> : <Redirect to="/"/>}
				</Route>
				{user && (
					<>
						<Route exact path="/movies">
							<Home type="movie"/>	
						</Route>
						<Route exact path="/series">
							<Home type="series"/>
						</Route>
						<Route exact path="/watch">
							<Watch/>
						</Route>
						<Route exact path="/personal">
							<Personal/>
						</Route>
						<Route exact path="/search">
							<Search/>
						</Route>
					</>
				)}
				<Redirect to="/login"/>
			</Switch>
    </Router>
  );
};

export default App;