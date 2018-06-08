import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addFile} from '../AC';
import {FileInput} from './';

import { BarLoader } from 'react-spinners';
import { Alert,Button,Input,Form } from 'reactstrap';
/**
* Верхняя панель, включающая в себя загрузку и добавление файла.
*/
class Panel extends Component{
  state = {
    name : '',
    size : '',
    content : '',
    error : '',
    loader : false
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
  setLoader = () => {
    this.setState({
      loader: !this.state.loader
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
    const {error,loader} = this.state;
    return(
      <div style={{padding:'20px'}}>
        <Form inline style={{margin:'10px'}}>
          <FileInput
            setFileInfo={this.setFileInfo}
            setError={this.setError}
            setLoader={this.setLoader}
          />
          <Button color="success" onClick={this.handleAdd}>Добавить</Button>
        </Form>
        <div className='sweet-loading' style={{padding:'0 20px'}}>
        <BarLoader
          color={'#123abc'}
          loading={loader}
        />
      </div>
        {
          error ? <Alert color="danger"> {error} </Alert> : ''
        }
      </div>
    )
  }
}
export default connect(null, {addFile})(Panel);
