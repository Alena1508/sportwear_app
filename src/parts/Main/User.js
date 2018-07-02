import { connect } from 'react-redux';
import { getCategoties } from '../../services/categories';
import { Link } from 'react-router-dom';
import { getInfoUser } from '../../store';

export class UserContainer extends React.Component {
  componentDidMount() {
    getCategoties()
      .then(categoriesInfo => this.props.dispatch(getInfoUser(categoriesInfo)));
  }

  render() {
    const { user, information } = this.props;
    return (
      <div className="user-info">
        {
              user && <h2>Hello {user.firstName}</h2>
          }
        <p>{`You have ${information} categories`}</p>
        <p>You have 50 products</p>
        <Link to="/categories">Go to the categories</Link>
      </div>
    );
  }
}

const mapStoreToProps = ({ user, information }) => ({
  user,
  information
});

export const User = connect(mapStoreToProps)(UserContainer);
