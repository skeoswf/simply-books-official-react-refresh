'use client';

import React from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function ProfileCard({ userObj }) {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={userObj.photoURL} />
        <Card.Body>
          <Card.Title>{userObj.displayName}</Card.Title>
          <Card.Text>
            <h6>{userObj.email}</h6>
            <h6>last logged in: {userObj.metadata.lastSignInTime}</h6>
          </Card.Text>
        </Card.Body>
      </Card>

      <Button onClick={signOut}>sign out</Button>
    </>
  );
}

ProfileCard.propTypes = {
  userObj: PropTypes.shape({
    photoURL: PropTypes.string,
    displayName: PropTypes.string,
    email: PropTypes.string,
    metadata: PropTypes.shape({
      lastSignInTime: PropTypes.string,
    }),
  }).isRequired,
};
