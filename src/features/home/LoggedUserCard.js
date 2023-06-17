import React from 'react';
import { Card, Col, ListGroup, Row } from 'react-bootstrap';
import { useGetLoggedUserQuery } from '../../app/api/apiSlice';

const LoggedUserCard = () => {

    const { data: loggedUser, isLoading } = useGetLoggedUserQuery();
    
    console.log(loggedUser)

    if(isLoading) return <></>
    if(!loggedUser) return <div>There was an error fetching logged user :(</div>
    const joinedDate = new Date(loggedUser?.createdAt)
        ?.toLocaleDateString('en-US', {day: "numeric", month: 'long', year: 'numeric'});

    return (
        <Card style={{maxWidth: 900}}>
            
            <Card.Body>
                <h2 className="mb-4 mt-1">Logged user</h2>
                <Row>
                    <Col sm={5} md={3}>
                        <img src={loggedUser.image} alt="" className="mb-4 img-fluid" />
                    </Col>
                    <Col>
                        <h3>{loggedUser.firstName} {loggedUser.lastName}</h3>
                        <ListGroup variant="flush">
                            <ListGroup.Item>{loggedUser.country}</ListGroup.Item>
                            <ListGroup.Item>{loggedUser.email}</ListGroup.Item>
                            <ListGroup.Item>Joined {joinedDate}</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default LoggedUserCard;