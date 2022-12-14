import "./TripStyle.css";

const TripData = (props) => {
  return (
    <div className="card">
      <div className="t-image">
        <img src={props.img} alt="CardImg" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
};

export default TripData;
