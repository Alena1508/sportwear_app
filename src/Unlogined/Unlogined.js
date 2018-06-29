import { Route, Switch, Redirect } from 'react-router-dom';
import { Login } from '../pages/Login/Login';
import { Registration } from '../pages/Registration/Registration';
import {SuccessPage} from "../pages/SuccessPage/SuccessPage";

export class Unlogined extends React.Component {
  render() {
    return (
      <Switch>
        <Route
          path="/login"
          component={Login}
        />
        <Route
          path="/registration"
          component={Registration}
        />
        <Route
          path="/success"
          component={SuccessPage}
        />
        <Redirect to="/login" />
      </Switch>
    );
  }
}
