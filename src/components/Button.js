import { Component } from "react";

export default class Button extends Component {
  render() {
    const func = this.props.func;
    const value = this.props.buttonValue;

    return <button onClick={func}>{value}</button>;
  }
}
