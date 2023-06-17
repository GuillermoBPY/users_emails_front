import React from 'react';
import { Row } from 'react-bootstrap';
import { useGetLoggedUserQuery } from '../../app/api/apiSlice';
import LoadingScreen from '../../components/LoadingScreen';
import { useGetAllUsersQuery } from './homeApiSlice';
import LoggedUserCard from './LoggedUserCard';
import UserCard from './UserCard';

const Home = () => {

    const { data: loggedUser } = useGetLoggedUserQuery();
    const { users = [], isLoading } = useGetAllUsersQuery(undefined, {
        selectFromResult: ({ data }) => ({
            users: data?.filter(user => user.id !== loggedUser?.id)
        })
    });


    if (isLoading ) return <LoadingScreen />

    return (
        <div>
            <h1 className='mb-5'>Users App</h1>
            <LoggedUserCard />
            <h2 className="mt-5 mb-4">Other users</h2>
            <Row xs={1} md={2} lg={3} xl={4} className="g-4">
                {users.map(user => (
                    <UserCard user={user} key={user.id} />
                ))}
            </Row>
        </div>
    );
};

export default Home;