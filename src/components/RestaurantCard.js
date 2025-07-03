import { CDN_URL } from "../utils/constants";
const styleCard = {
  backgroundColor: "#f0f0f0",
};
const RestaurantCard = (props) => {
  const { resData } = props;
  console.log("resData: ", resData);
  const { name, cloudinaryImageId, cuisines, costForTwo, avgRatingString } =
    resData?.info;
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="Res Image"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString}</h4>
      <h4>{costForTwo}</h4>
      {/* <h4>{resData.info.sla.slaString}</h4> */}
    </div>
  );
};
export default RestaurantCard;
