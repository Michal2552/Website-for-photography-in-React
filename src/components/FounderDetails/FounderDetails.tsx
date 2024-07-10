// src/components/FounderDetails/FounderDetails.tsx

import React from 'react';
import useFetch from '../../services/useFetch';
import Loading from '../Loading/Loading';
import { FetchResult } from '../../interfaces';

const FounderDetails: React.FC = () => {
  const { data, loading, error } = useFetch<FetchResult>('https://randomuser.me/api/');

  if (loading) return <div><Loading /></div>;
  if (error) return <div>Error loading data.</div>;

  const user = data?.results[0];

  return (
    <div className="founder-details">
      {user && (
        <>
          <img src={user.picture.large} alt="Founder" />
          <h2>{user.name.first} {user.name.last}</h2>
        </>
      )}
    </div>
  );
};

export default FounderDetails;
