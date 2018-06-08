import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addFile} from '../AC';
import {FileInput} from './';

import { Alert,Button,Jumbotron,Input,Form } from 'reactstrap';

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
      <div style={{padding:'20px'}}>
        <Form inline style={{margin:'10px'}}>
          <FileInput
            setFileInfo={this.setFileInfo}
            setError={this.setError}
          />
          <Button color="success" onClick={this.handleAdd}>Добавить</Button>
        </Form>
        {
          error ? <Alert color="danger"> {error} </Alert> : ''
        }
      </div>
    )
  }
}
export default connect(null, {addFile})(Panel);
