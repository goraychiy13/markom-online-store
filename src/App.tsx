import { memo } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './components/Layout/Header';
import AppRoutes from './core/routes/AppRoutes';
import store from './redux/reduxStore';

function App(): JSX.Element {
  return (
    <div className="container">
      <Router>
        <Provider store={store}>
          <Header />
          <Switch>
            <AppRoutes />
          </Switch>
        </Provider>
      </Router>
    </div>
  );
}

export default memo(App);
