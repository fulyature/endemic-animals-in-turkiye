import data from "../helper/data";
import Picture from "../components/Picture";

const Homepage = () => {
  return (
    <div className="home-container">
      <h1 className="header">ENDEMIC ANIMALS IN TÜRKİYE</h1>
      <div className="container">
        {data.map((data) => {
          const { type, src } = data;
          return <Picture type={type} src={src.link} />;
        })}
      </div>
    </div>
  );
};

export default Homepage;
