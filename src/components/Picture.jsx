import "../styles/style.css";
const Picture = ({ src, type }) => {
  return (
    <div className="image-wrapper">
      <div className="image-container">
        <img className="image" src={src} alt="img" />
      </div>
      <div className="type">{type}</div>
    </div>
  );
};

export default Picture;
