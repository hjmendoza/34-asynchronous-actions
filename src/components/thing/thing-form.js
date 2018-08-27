import React, { Component } from 'react';
import { createThing, updateThing } from '../reducer/thing-reducer'
import { connect } from 'react-redux';

class ThingForm extends Component {
  constructor(props) {
    super(props)
    this.addThing = this.addThing.bind(this)
    this.exitUpdate = this.exitUpdate.bind(this)
}

exitUpdate() {
    this.props.exitUpdateMode();
}

addThing(event) {
    event.preventDefault()

    if(this.props.updateId) {
        let name = event.target.name.value;
        let id = this.props.updateId;
        let obj = {
            name,
            id
        }
        this.props.updateItem(obj)
        document.getElementsByClassName('update')[0].reset();
    } else {
        let name = event.target.name.value;
        let obj = {
            name,
        }
        this.props.createItem(obj)
        document.getElementsByClassName('form')[0].reset();
    }
    
}
render() {
    return (
        <Fragment>
            <div className="container">
                {this.props.updateId ? <h2>Update Thing</h2> : <h1>Enter Thing Name</h1> }
                <form className={this.props.updateId ? 'update' : 'form'} onSubmit={this.addThing}>
                    <label>Name:</label>
                    <input type="text" name="name"/>
                    <button>Submit</button>
                    {this.props.updateId ? <input type="button" value="X" onClick={this.exitUpdate}/> : null}
                    
                </form>
            </div>
        </Fragment>
    )
}
}

const mapDispatchToProps = (dispatch) => ({
createItem : (payload) => dispatch(createItem(payload)),
updateItem : (payload) => dispatch(updateItem(payload)),
})

export default connect(null,mapDispatchToProps)(ThingForm)