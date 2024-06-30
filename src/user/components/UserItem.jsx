/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Avatar from "../../shared/components/UIElements/Avatar.jsx";
import Card from "../../shared/components/UIElements/Card.jsx";
import "./UserItem.css";

const UserItem = (props) => {
  const assetUrl = import.meta.env.VITE_ASSET_URL;
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${props.id}/places`}>
          <div className="user-item__image">
            <Avatar image={`${assetUrl}${props.image}`} alt={props.name} />
          </div>
          <div className="user-item__info">
            <h2>{props.name}</h2>
            <h3>
              {props.placeCount} {props.placeCount === 1 ? "Place" : "Places"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;
