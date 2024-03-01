import React from "react";
import Header from "../components/Header";
import MailIcon from "../assets/icons/mail.png";
import CallIcon from "../assets/icons/Call.png";
import WebIcon from "../assets/icons/web.png";
import Line from "../assets/line.png";
import TwitterIcon from "../assets/icons/twitter_icon.png";
import FacebookIcon from "../assets/icons/facebook_icon.png";
import WhatsappIcon from "../assets/icons/whatsapp_icon.png";
import InstagramIcon from "../assets/icons/instagram_icon.png";

const Contact = () => {
  return (
    <>
      <Header />
      <div className="lg:max-w-[1300px] pl-[24px] pr-[24px] mx-auto mb-[160px]">
        <div className=" flex justify-between ">
          <div className="bg-[#2967BC] mt-[46px] w-[573px] h-[684px] flex justify-center flex-col px-[107px] gap-[24.5px] text-white rounded-[10px]">
            <div className=" flex gap-[15.5px]">
              <img src={WebIcon} />
              <p className=" py-[auto]">internpulse.com</p>
            </div>
            <div className=" flex gap-[15.5px]">
              <img src={MailIcon} />
              <p className=" py-[auto]">internpulsehq@gmail.com</p>
            </div>
            <div className=" flex gap-[15.5px]">
              <img src={CallIcon} />
              <p className=" py-[auto]">+2348061185623</p>
            </div>
            <div className=" flex gap-[31px] pt-[162px] ">
              <img src={TwitterIcon} className=" w-[10%] object-contain" />
              <img src={InstagramIcon} className=" w-[10%] object-contain" />
              <img src={FacebookIcon} className=" w-[10%] object-contain" />
              <img src={WhatsappIcon} className=" w-[10%] object-contain" />
            </div>
          </div>

          <div className=" mt-[46px] flex justify-center flex-col px-[107px] gap-[24.5px]">
            <h1 className=" text-[#222425] text-5xl">Contact Us</h1>
            <p className=" text-[#63696E]">
              We are eager to discuss this internship with you, and answer any
              questions you may have. Visit any of our social media platforms
              and we will get back to you shortly
            </p>
            <img src={Line} />
            <p className=" text-[#63696E]">Stay connected and feel delighted</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
