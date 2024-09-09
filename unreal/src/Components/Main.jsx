import React from "react";
import './Main.css'


export default function Main() {
    return(
        <div className="container">
            <div className="content_container">
                 <div className="txt1">
                     <i class="fa-solid fa-paper-plane"></i>
                     <h2>Send Money</h2>
                     <p>Send money across any part of Ghana anytime, anywhere, anyday using Unreal.</p>
                     <a href="">Learn More</a>
                 </div>

                 <div className="txt2">
                     <i class="fa-solid fa-arrow-up"></i>
                     <h2>Withdraw Money</h2>
                     <p>You can withdraw cash at any of our agents or withdraw at any bank from your unreal account.</p>
                     <a href="">Learn More</a>
                 </div>

                 <div className="txt3">
                     <i class="fa-solid fa-arrow-down"></i>
                     <h2>Receive Money</h2>
                     <p>Receive cash today from any platfrom directly into your unreal account with ease.</p>
                     <a href="">Learn More</a>
                 </div>
            </div>
           
        </div>
    )
}