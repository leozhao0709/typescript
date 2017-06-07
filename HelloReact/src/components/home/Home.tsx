import * as React from 'react';

interface HomeProps {
  name?: string;
  message?: string;
}

export class Home extends React.Component<HomeProps, {}> {
  static defaultProps: HomeProps = {
    name: 'React',
    message: 'This is from a component!'
  };

  onButtonClick(e: Event) {
    e.preventDefault();
    alert(this.refs.name);
  }

  render() {
    return (
      <div>
        <h1>Hello, React! I'm {this.props.name}</h1>
        <p>{this.props.message} !!!</p>
        <form onSubmit={this.onButtonClick.bind(this)}>
          <input type='text' ref='name' />
          <button>Set Name</button>
        </form>
      </div>
    );
  }
}
