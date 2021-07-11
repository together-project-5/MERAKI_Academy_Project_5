import React from "react";
import "./style.css"
import earth from "./img/earth.png"
import connection from "./img/connection.png"
import smile from "./img/smile.png"

const Features = () => {

    return (
        <>
            <div className="features">
                <div className="row">
                    <div className="col-1-of-4">
                        <div className="features-box">
                            <img src={earth} />
                            <h3 className="heading-bOne">
                                People around the world
                            </h3>
                            <p className="features-box__text">
                                Get information and learn about different cultures.
                            </p>
                        </div>

                        <div className="features-box">
                            <img src={connection} />
                            <h3 className="heading-bOne">
                                Easily communicate
                            </h3>
                            <p className="features-box__text">
                                Talking to others seamlessly, comment on posts and interact.
                            </p>
                        </div>

                        <div className="features-box">
                            <img src={smile} />
                            <h3 className="heading-bOne">
                                A distinctive experience
                            </h3>
                            <p className="features-box__text">
                                Ease of use, seamless design, distinctive environment.
                            </p>
                        </div>


                    </div>
                </div>

            </div>
        </>
    )

}

export default Features