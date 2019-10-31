import React from 'react';
import Axios from 'axios';

class FormDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      data: 'No data'
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
  fetchData = () => {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    Axios.get(url).then(res => {
      console.log(res);
      this.setState({ data: JSON.stringify(res.data) });
    })
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
        <div>{this.state.data}</div>
        <button onClick={() => this.fetchData()}>Fetch data</button>
      </div>);
  }
}

export default FormDemo;