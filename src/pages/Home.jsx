import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Communicator from "../service/Communicator";
import ShowCard from "../components/ShowCard";

import { Col, Row, Container } from "react-bootstrap";
import styles from "./Home.module.css";

const Home = () => {
  const [shows, setShows] = useState([]);

  useEffect (() => {
    Communicator.getAll().then(data => setShows(data))
  }, []);
  console.log(shows)
  return (
    <Container fluid>
      <Row>
        {shows.slice(0, 48).map(show =>
          <Col lg={3} md={4} sm={6} key={show.id} className="p-2">
            <Link to={"/show/"+ show.id} className={styles.link}>
              <ShowCard show={show} />
            </Link>  
          </Col>  
        )}
      </Row>
    </Container>
  )
}

export default Home;