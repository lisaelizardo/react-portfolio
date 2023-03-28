import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Project 1</Card.Title>
          <Card.Text>
            This is project one.
          </Card.Text>
          <Button variant="primary">Github</Button>
        </Card.Body>
      </Card>
    );
  }
  
  export default Cards;