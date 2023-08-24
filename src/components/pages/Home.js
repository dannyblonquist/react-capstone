import "../../styles/home.scss";

import gifImage from "../../images/capstone-gif.gif";

const Home = () => {
  return (
    <div className="home">
      <h1>You are on the Home page!</h1>
      <img src={gifImage} />
    </div>
  );
};
export default Home;
