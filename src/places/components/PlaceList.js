import Card from "../../shared/components/UIElements/Card";
import PlaceItem from "./PlaceItem";
import './PlaceList.css';

const PlaceList = ({ items }) => {

    if (items.length === 0) {
        return (
            <div className="place-list center">
                <Card>
                    <h2>No places found. Maybe create one?</h2>
                    <button>Share Place</button>
                </Card>
            </div>
        );
    }

    return (
        <ul className="place-list">
            {items.map(place => <PlaceItem key={place.id} {...place} /> )}
        </ul>
    );
}

export default PlaceList;