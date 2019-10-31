import React from 'react';

class FormDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  handleSubmit(e) {
    alert(`${this.state.username} ${this.state.password}`);
    e.preventDefault();
  }
  render() {
    return (
      <div className="form-demo">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>User name</label>
            <input name="username" type="text" onChange={this.handleInputChange}></input>
          </div>
          <div>
            <label>Password</label>
            <input name="password" type="password" onChange={this.handleInputChange}></input>
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>);
  }
}

export default FormDemo;