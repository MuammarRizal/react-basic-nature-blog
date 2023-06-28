import Card from "react-bootstrap/Card";

function CardsNature({ imageCard, textCard, titleCard }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imageCard} />
      <Card.Body>
        <Card.Title>{titleCard}</Card.Title>
        <Card.Text>{textCard}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardsNature;
