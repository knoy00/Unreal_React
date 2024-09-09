import React from "react";
import './transferSteps.css'
import womanImage from '../assets/Images/woman.jpg';


export default function TransferSteps(){
    return(
        <div className="transferContainer">
            <div className="page">
            <div className="send_steps">
                 <h1>How to transfer money?</h1>
                 <hr/>
                 <ol type="1">
                     <li><b>Create an account</b> This is easy. Sign up using your email address on our website. Keep things secure by using a strong password. </li>
                     <li><b>Start your transfer</b> When signed in, you would see a side panel on the left side of your screen. Click on send money.</li>
                     <li><b>Enter the recipient's details</b> FIll in all the fields provided. Make sure to enter the correct details required.</li>
                     <li><b>Verify the details</b> Make sure you verify the details before completing the transfer.</li>
                 </ol>
            </div>
            <div className="steps_img">
                <img src={womanImage} alt=""/>
            </div>
            </div>
        </div>
    )
}