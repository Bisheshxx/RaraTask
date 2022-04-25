import { GraphQLClient } from 'graphql-request';
import React from 'react'
import '../components/Table.css'
import { UsersQuery, useUsersQuery } from '../generated';
function Table() {
    const graphqlClient = new GraphQLClient(
        "https://graphqlzero.almansi.me/api"
      );
      const { data, isLoading, error } = useUsersQuery<UsersQuery, Error>(
        graphqlClient,
        {}
      );
    
      if (isLoading) {
        return <div className="box">Loading...</div>;
      }
    
      if (error) {
        return <div>Error!</div>;
      }
    
      
  return (
      <>
    <div className="row">
        <input type="checkbox" />
        <span>Name</span>
        <span>Username</span>
        <span>Email</span>
        <span>Phone</span>
        <span>Website</span>
        <span>Address</span>
    </div>
    {data?.users?.data?.map((u:any) => {
        return (
          <div className="bg-white rounded-lg shadow-md w-80 text-center">
            <div className="mt-4 p-10 text-bold">
              <p>user: {u.username}</p>
            </div>
          </div>
        );
      })}
    </>
  )
}

export default Table