import "./DestinationStyle.css";

const DestinationData = (props) => {
  return (
    <>
      <div className={props.cName}>
        <div className="des-text">
          <h2>{props.heading}</h2>
          <p>{props.text}</p>
        </div>
        <div className="image">
          <img src={props.img1} alt="Mt1" />
          <img src={props.img2} alt="Mt2" />
        </div>
      </div>
    </>
  );
};

export default DestinationData;
