import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
    {
        id: 'p1',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Taj_Mahal%2C_Agra%2C_India_edit3.jpg/1200px-Taj_Mahal%2C_Agra%2C_India_edit3.jpg',
        title: 'Taj Mahal',
        address: 'Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001',
        description: 'One of the 7 wonders of the world',
        creatorId: 'u1',
        location: {
            lat: 27.1751448,
            lng: 77.9020665
        }
    },
    {
        id: 'p2',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Taj_Mahal%2C_Agra%2C_India_edit3.jpg/1200px-Taj_Mahal%2C_Agra%2C_India_edit3.jpg',
        title: 'Taj Mahal',
        address: 'Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001',
        description: 'One of the 7 wonders of the world',
        creatorId: 'u2',
        location: {
            lat: 27.1751448,
            lng: 77.9020665
        }
    }
]

const UserPlaces = () => {

    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creatorId === userId);

  return (
    <PlaceList items={loadedPlaces} />
  );
}

export default UserPlaces;