import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import Practice from './components/practice';
import { set_data } from "./store/action/index";
import thunk from 'redux-thunk';
class App extends React.Component
{
  render()
  {
    console.log(this.props.data);
    return(
      <div>
        <Practice />
        <h1>Hello</h1>
        <button onClick={()=>this.props.set_data("me data hun")}>button</button>
      </div>
    )
  }
}
const mapStateToProps = (state)=>(
  {
    name: state.auth.name,
    data: state.auth.data,
    chat: state.app.chat,
  }
)

const mapDispatchToProp = (dispatch)=>
 (
   {
    set_data:(data)=> dispatch(set_data(data))

   }
 )
export default connect(mapStateToProps,mapDispatchToProp )(App);
