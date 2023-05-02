import React from "react";
import main from "./../images/principal.avif"

const HomePage = () => {
    return (
    <>
        <div class="container text-center">
            <div class="">
                <img class="img-fluid" src={main} alt="main_image"></img>
            </div>
        </div>
    </>
    );
}
export default HomePage;