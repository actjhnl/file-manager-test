import React, { Component } from 'react';
import { FileCard } from './'
import {connect} from 'react-redux';
class CardsList extends Component {
  render(){
    const {filesList} = this.props;
    const cards = filesList.map((index)=>{
      return <FileCard file={index} key={index.name}/>
    })
    return(
      <div style={{padding:'10px'}}>
        <h3>CardsList</h3>
        <div style ={{display:'flex',flexFlow:'row wrap'}}>
          {
            filesList.length === 0 ? "Список файлов пуст" : cards
          }
        </div>
      </div>
    )
  }
}
export default connect(state=>({
  filesList: state.filesList
}))(CardsList);
