import React from "react";

import { Card } from "react-bootstrap";


const ShowCard = ({show}) => {
  console.log(show.id)
  return (
    <Card className="p-2">
        <Card.Img variant="top" src={show.image.medium} />
        <Card.Body>
          <Card.Title className="text-center">{show.name}</Card.Title>
        </Card.Body>
      </Card>
  )
}

export default ShowCard;