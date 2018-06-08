import React, { Component } from 'react';
import { Card } from './'
import {connect} from 'react-redux';
class CardsList extends Component {
  render(){
    const {filesList} = this.props;
    const cards = filesList.map((index)=>{
      return <Card file={index} key={index.name}/>
    })
    return(
      <div>
        <h3>CardsList</h3>
        <div>
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
