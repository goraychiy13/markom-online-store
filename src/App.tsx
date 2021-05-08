import Header from './components/Header';
import { memo } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App(): JSX.Element {

  return (
    <div className="container">
      <Router>
        <Header />
        <Switch>
          {/* {getRoutes().map((route: TypeRoute) => (
            <Route exact={route.exact} key={route.path} path={route.path}>
              {route.component}
            </Route>
          ))} */}
        </Switch>
      </Router>
    </div>
  )
}

export default memo(App);