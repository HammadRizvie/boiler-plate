import React from 'react';
import { connect } from 'react-redux';
class Practice extends React.Component
{
    render()
    {
        console.log(this.props.chat)
        return(
            <div>

            </div>
        )
    }
}
const mapStateToProps = (state)=>(
    {
      name: state.auth.name,
      email: state.auth.email,
      chat: state.app.chat,
      class: state.class
    }
  )
export default connect(mapStateToProps,null)(Practice);