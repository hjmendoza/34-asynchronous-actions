import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import ThingForm from './thing/thing-form';
import ThingItem from './thing/thing-item';
import {createThing, updateThing} from './action/thing-action';


class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <h3>Things Needed</h3>
        <p>Enter thing names</p>


        <ThingForm onComplete={this.props.createThing} buttonText='SUBMIT'/>

        <ThingItem onComplete={this.props.updateThing} destroy={this.props.updateThing}/>

      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  thing: state.thingState,
});

const mapDispatchToProps = dispatch => ({
  createThing: thing => dispatch(createThing(thing)),
  updateThing: thing => dispatch(updateThing(thing)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
