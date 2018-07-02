import {connect} from 'react-redux';

import {updateUserAsync} from '../../store';
import {Loader, Form} from '../../components';

export class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  // static getDerivedStateFromProps(props, current_state) {
  //     return {
  //       email: props.email,
  //       firstName: props.firstName,
  //       lastName: props.lastName,
  //     }
  // }

  submit = (fields) => {
    this.setState({loading: true});


    this.props.dispatch(updateUserAsync(fields));
    this.props.history.push('/');
  };


  render() {
    const {loading} = this.state;
    const {email, firstName, lastName} = this.props.user;
    console.log(email, 'render');
    return (
      loading ? <Loader/> :
        <Form
          data={{
            email,
            firstName,
            lastName
          }}
          disabled={['email']}
          skipped={['password', 'repeatPassword']}
          onSubmit={this.submit}
        />
    );
  }
}

const mapStoreToProps = ({user}) => ({
  user
});

export const Profile = connect(mapStoreToProps)(ProfileContainer);
