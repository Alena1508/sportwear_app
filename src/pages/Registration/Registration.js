import { Loader, Form } from '../../components';
import { registration } from '../../services';

export class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

    submit = (fields) => {
      this.setState({
        loading: true
      });

      registration(fields)
        .then(() => this.props.history.push('/success'))
        .catch(err => console.log('Can\'t login', err));
    }

    render() {
      const { loading } = this.state;
      return (
        loading ? <Loader /> :
        <Form onSubmit={fields => this.submit(fields)} />
      );
    }
};
