import React from "react";
import "./style.css"
import Features from "./features";

const Together = () => {

    return (
        <>
            <section>
                <body>
                    <div className="firstBox">
                        <h1 class="firstHeader">
                            <span class="mainText">Together</span>
                            <span class="subText">A world of communication and learning</span>
                        </h1>
                    </div>
                </body>
            </section>

            <section>
                <Features />
            </section>



        </>
    )

}

export default Together;
