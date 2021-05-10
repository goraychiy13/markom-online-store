import Header from './components/Header';
import { memo } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import AppRoutes from './core/AppRoutes';

function App(): JSX.Element {
  return (
    <div className="container">
      <Router>
        <Header />
        <Switch>
          <AppRoutes />
        </Switch>
      </Router>
    </div>
  );
}

export default memo(App);
