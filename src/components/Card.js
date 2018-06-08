import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteFile } from '../AC';

class Card extends Component {
  handleDelete = () => {
    const {name} = this.props.file;
    this.props.deleteFile(name);
  }
  render(){
    console.log(this.props.file)
    const {name,size,content} = this.props.file;
    return (
      <div>
        <div>
          <div>Файл: {name} Размер: {size} Kb</div>
          <button onClick={this.handleDelete}> Удалить </button>
        </div>
        <div>
          <textarea
            value={content}
            onChange={()=>{return}}
            style={{resize:"none"}}
            rows="10"
          />
        </div>
      </div>
    )
  }
}
export default connect(null,{deleteFile})(Card);
