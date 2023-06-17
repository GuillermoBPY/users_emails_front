import React from 'react';
import { Card, Col, ListGroup } from 'react-bootstrap';

const UserCard = ({ user }) => {

    const joinDate = new Date(user.createdAt)
        .toLocaleDateString('en-US', {day: 'numeric', month: 'long', year: 'numeric'})

    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={user.image} />
                <Card.Body>
                    <Card.Title>{user.firstName} {user.lastName}</Card.Title>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>{user.email}</ListGroup.Item>
                        <ListGroup.Item>{user.country}</ListGroup.Item>
                        <ListGroup.Item>Joined {joinDate}</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default UserCard;