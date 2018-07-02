import { Route, Switch, Redirect } from 'react-router-dom';
import { Main } from '../parts/Main/Main';
import { Profile } from '../pages/Profile/Profile';


export class Logined extends React.Component {
  render() {
    return (
      <Switch>
        <Route
          path="/"
          exact
          component={Main}
        />
        <Route
          path="/profile"
          exact
          component={Profile}
        />
        <Redirect from="/login" to="/" />
      </Switch>
    );
  }
}
