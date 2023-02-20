import UsersList from "../components/UsersList";

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Dherya', 
            image: 'https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 
            places: 3
        }
    ];
    
    return (
        <UsersList items={USERS} />
    );
}

export default Users;