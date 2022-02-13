

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: true };
  }

  render() {
    return <h1>Bonjour, {this.props.name}</h1>;
  }
}

