import React from "react";


export default class ThingItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mode: 'default'
    }
    this.editMode = this.editMode.bind(this);
    this.defaultMode = this.defaultMode.bind(this);
  }

  editMode() {
    this.setState({ mode: 'edit' });
  }

  defaultMode() {
    this.setState({ mode: 'default' })
  }

  render() {

    if (this.state.mode === 'default') {
      return (
        <li onDoubleClick={this.editMode}>
          <h2>{this.props.thing.name}</h2>
          <button onClick={() => props.onRemove(this.props.thing.id)}>delete</button>
          <p>{this.props.thing.content}</p>
        </li>
      );
    } else {
      return (
        <ThingUpdateForm thing={this.props.thing} 
          thing={this.thing.note}
          onUpdate={this.props.onUpdate}
          onCancel={this.defaultMode}
          onDone={this.defaultMode}
        />);
    }
  }
}