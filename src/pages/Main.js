import { Component } from "react";
import Button from "../components/Button";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Button buttonValue="click" func={()=>{
            fetch("https://search-post-back.herokuapp.com/lists").then(
                (response)=>{
                    console.log(response.body);
                }
            )
        }}/>
        <p>Main</p>
      </div>
    );
  }
}
