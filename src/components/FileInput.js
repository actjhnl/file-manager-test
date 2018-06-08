import React, { Component } from 'react';
import { Input } from 'reactstrap';
import {connect} from 'react-redux';

class FileInput extends Component{
  uploadFile = (e) => {
    const {filesList} = this.props;
    const self = this;
    const infoFile = e.target.files[0];
    let err = false;
    // strange moment with undefined property
    // when close file explorer
    try{
      const err = filesList.find(element => {
        return element.name === infoFile.name
      });
      if(err){
        this.props.setError('Файл с таким именем уже существует');
        return;
      }
      else {
        this.props.setError('');
      }
    }
    catch(e){
      console.log(e);
    }
    const reader = new FileReader();
    reader.onload = function(){
      const content = reader.result;
      // cut "data:image/jpeg;base64" of content
      const sliceContent = content.split(',')
      self.props.setFileInfo(infoFile.name, infoFile.size, sliceContent[1]);
    };
    reader.onerror = function(){
      self.props.setError('При загрузке данных произошла ошибка');
    }
    infoFile && reader.readAsDataURL(e.target.files[0]);
  }
  render(){
    return(
      <span>
        <Input type="file"
        name="myFile"
        onChange={this.uploadFile} />
      </span>
    )
  }
}
export default connect(state => ({
  filesList: state.filesList
}),{})(FileInput);
