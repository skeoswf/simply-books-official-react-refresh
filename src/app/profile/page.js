'use client';

import React from 'react';
import Card from 'react-bootstrap/Card';
import ProfileCard from '../../components/ProfileCard';
import { useAuth } from '../../utils/context/authContext';

export default function Profile() {
  const { user } = useAuth();

  return (
    <Card style={{ width: '18rem' }}>
      <ProfileCard key={user.uid} userObj={user} />
    </Card>
  );
}
