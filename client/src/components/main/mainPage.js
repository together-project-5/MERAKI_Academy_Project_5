import React from "react";
import "./main.css";
import Link from "@material-ui/core/Link";
import { useHistory } from "react-router-dom";

const MainPage = () => {
  const history = useHistory();

  const english = () => {
    window.location = "https://learnenglish.britishcouncil.org/";
  };
  const program = () => {
    window.location = "https://www.facebook.com/MerakiAcademyJO/";
  };
  const sport = () => {
    window.location = "https://us.yalla-shoot-new.com/";
  };
  const cook = () => {
    window.location =
      "https://www.thespruceeats.com/cooking-basics-for-everyone-4684010";
  };

  return (
    <>
      <div className="Advertisement">
        <div className="advLabel">
          <h2>Advertisement</h2>
          </div>
        <div className="sub-advertisement" onClick={english}>
          <div className="imageDiv">
            <img
              className="advertisementImages"
              src="https://m.marefa.org/images/thumb/e/e1/BritishCouncil.png/200px-BritishCouncil.png"
            />
          </div>
          <div className="title_description">
            <h3 className="title-details">Learning english</h3>
            <h4 className="description">Do you want to improve your english ,click here please.</h4>
          </div>
        </div>


        <div className="sub-advertisement" onClick={sport}>
          <img
            className="advertisementImages"
            src="https://sun9-14.userapi.com/s/v1/ig2/PtREuYXP7LlSlTcSDnGyWZMzkgXcTiQSbdHZkV8yRAQsIfpX6U9HdGh_yuFUAfHY5AG0QTY6AjZQOy6Pa0DYfQco.jpg?size=200x0&quality=96&crop=12,12,200,200&ava=1"
          />
          <div className="title_description">
            <h3 className="title-details">Watch football</h3>
            <h4 className="description">
              to watch live match and details of the match, click here please.{" "}
            </h4>
          </div>
        </div>

        <div className="sub-advertisement" onClick={cook}>
          <img
            className="advertisementImages"
            src="https://media-exp3.licdn.com/dms/image/C4D0BAQHViS0-ao19Zg/company-logo_200_200/0/1519922019279?e=2159024400&v=beta&t=-C7FGiehMlQOxfLt1F9LGiY4xdHH5_3jpz-12-voHfw"
          />
          <div className="title_description">
            <h3 className="title-details">Learning cook</h3>
            <h4 className="description">
              do you want to learning how to make food and sweet click
            </h4>
          </div>
        </div>

        <div className="sub-advertisement" onClick={program}>
          <img
            className="advertisementImages"
            src="https://media-exp3.licdn.com/dms/image/C4E0BAQFhLk1hH86-dA/company-logo_200_200/0/1615602634198?e=2159024400&v=beta&t=64VapR2gYYDsCCNKQzNt6vhZQ37VoTLpAV73gqT-kwk"
          />
          <div className="title_description">
            <h3 className="title-details">Cooding bootcamp</h3>
            <h4 className="description">
              do you want to be a programming click and contact with them
            </h4>
          </div>
        </div>

      </div>
    </>
  );
};
export default MainPage;
