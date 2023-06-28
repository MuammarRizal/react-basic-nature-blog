import Card from "react-bootstrap/Card";
function CardBeautiful({ imageNature }) {
  return (
    <Card>
      <Card.Img variant="top" src={imageNature} />
      <Card.Body>
        <Card.Text>Senja, perpaduan yang sungguh indah bagi alam semesta</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardBeautiful;
