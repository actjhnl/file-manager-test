import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addFile} from '../AC'
import {FileInput} from './'

class Panel extends Component{
  state = {
    name : '',
    size : '',
    content : '',
    error : '',
  }
  setFileInfo = (name, size, content) => {
    this.setState({
      name : name,
      size : size,
      content : content
    })
  }
  setError = (text) => {
    this.setState({
      error : text
    })
  }
  handleAdd = () => {
    const {name, size, content} = this.state;
    if(name && size && content){
      this.props.addFile(this.state);
    }
    this.setState({name:'',size:'',content:''})
  }
  render(){
    const {error} = this.state;
    return(
      <div>
        <h3>Panel</h3>
        <FileInput
          setFileInfo={this.setFileInfo}
          setError={this.setError}
        />
        <button onClick={this.handleAdd}>Добавить</button>
        {
          error ? <p> {error} </p> : ''
        }
      </div>
    )
  }
}
export default connect(null, {addFile})(Panel);
