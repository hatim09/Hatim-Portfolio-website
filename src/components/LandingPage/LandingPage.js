import "./LandingPage.scss";
import Landing from "../../assets/Images/landing.jpg";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing">
      <div className="landing__img-container">
        <img className="landing__img" src={Landing} alt="landing image" />
        <div className="landing__overlay">
          <h2 className="landing__name">Hatim Mamujee</h2>
          <div className="landing__subtext">Full Stack Developer</div>
          <div className="landing__description">
            Hi there! Take a peek  
          </div>
          <div className="landing__button-container">
            <button className="landing__button">
              <Link className="landing__link" to="/Projects">VIEW PORTFOLIO</Link>
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
