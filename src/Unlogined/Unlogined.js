import { Route, Switch, Redirect } from 'react-router-dom';
import { Login } from '../pages/Login';

export class Unlogined extends React.Component {
  render() {
    return (
      <Switch>
        <Route
          path="/login"
          component={Login}
        />
        <Redirect to="/login" />
      </Switch>
    );
  }
}
