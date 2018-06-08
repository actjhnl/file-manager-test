import React, { Component } from 'react';
import { Card,Form,Button,CardText,CardHeader,Container,Row,Col } from 'reactstrap';
import { connect } from 'react-redux';
import { deleteFile } from '../AC';

class FileCard extends Component {
  handleDelete = () => {
    const {name} = this.props.file;
    this.props.deleteFile(name);
  }
  render(){
    console.log(this.props.file)
    const {name,size,content} = this.props.file;
    return (
      <Container>
      <Row>
      <Col>
      <Card style={{maxWidth:'1000px',margin:'0 auto'}}>
        <CardHeader>
          <Form inline>
            <div>Файл: {name} Размер: {size} Kb</div>
            <Button color="danger" style={{margin:'5px'}} onClick={this.handleDelete}> Удалить </Button>
          </Form>
        </CardHeader>
        <CardText>
          <textarea
            value={content}
            onChange={()=>{return}}
            style={{width:'100%',resize:"none"}}
            rows="10"
          />
        </CardText>
      </Card>
      </Col>
      </Row>
      </Container>
    )
  }
}
export default connect(null,{deleteFile})(FileCard);
