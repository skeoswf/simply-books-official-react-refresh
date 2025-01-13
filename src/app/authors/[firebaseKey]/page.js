'use client';

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getSingleAuthor } from '@/api/authorData';
import AuthorCard from '@/components/AuthorCard';

export default function AuthorDetails({ params }) {
  const { firebaseKey } = params;

  const [singleAuthor, setSingleAuthor] = useState([]);

  useEffect(() => {
    getSingleAuthor(firebaseKey).then(setSingleAuthor);
  }, [firebaseKey]);

  return <AuthorCard authorObj={singleAuthor} />;
}

AuthorDetails.propTypes = {
  params: PropTypes.objectOf({}).isRequired,
};
