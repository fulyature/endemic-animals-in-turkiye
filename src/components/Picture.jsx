import "../styles/style.css";
const Picture = ({ src, type }) => {
  return (
    <div>
      <div className="photo-wrapper">
        <img className="image" src={src} alt="img" />
      </div>
      <div className="type">{type}</div>
    </div>
  );
};

export default Picture;
