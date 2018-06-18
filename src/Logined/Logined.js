import { Route, Switch, Redirect } from 'react-router-dom';
import { Main } from '../parts/Main/Main';


export class Logined extends React.Component {
  render() {
    return (
      <Switch>
        <Route
          path="/"
          exact
          component={Main}
        />
        <Redirect from="/login" to="/" />
      </Switch>
    );
  }
}
