import { connect } from 'react-redux';
// import { getInfoTask } from '../../services/tasks';
import { Link } from 'react-router-dom';
// import { getInfoUser } from '../../store';

export class UserContainer extends React.Component {
  // componentDidMount() {
  //   getInfoTask()
  //     .then(tasksInfo => this.props.dispatch(getInfoUser(tasksInfo)));
  // }

  render() {
    return (
      <div className="user-info">
        <h2>S&W Shop</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium, alias animi consequuntur cupiditate doloremque eius esse eveniet harum ipsum labore laboriosam libero molestiae nesciunt quis recusandae rem saepe ullam.</p>
        <Link to="/categories">Go to the categories</Link>
      </div>
    );
  }
}

const mapStoreToProps = ({ information }) => ({
   information
});

export const User = connect(mapStoreToProps)(UserContainer);
