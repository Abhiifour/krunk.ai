import React from "react";
import bot from "./bot.png";
import vector from "./vectortick.png";
import more from "./Vector.png";
import next from "./next.png";
import slider from "./slider.png";
import frame from "./frame.png";
import blueCross from "./bluecros.png";
import grayCross from "./graycross.png";
import paper from "./paperclip.png";
import logo from "./Logo.png";
import whiteVector from "./vectorWhite.png";
function Card() {
  return (
    <div className="card w-[360px] h-[800px]  rounded-[20px] pt-[7px] bg-cardColor  font-poppins pb-[7px]">
      <div className="top w-[346px] h-[80px]  m-auto flex justify-between bg-one items-center px-[20px] rounded-t-[20px]">
        <div className="left w-[190px] h-[60px] relative flex items-center gap-[10px]">
          <div className="content">
            <div className="icon w-[50px] h-[50px] rounded-full overflow-hidden border-[1px] bg-cardColor object-cover  ">
              <img src={bot} alt="" className="w-[50px] h-[50px]" />
            </div>
            <div className="online w-[8px] h-[8px] rounded-full bg-green absolute left-[39.5px] top-[42.5px]"></div>
          </div>
          <div className="left-name w-[120px] h-[60px] flex flex-col items-start py-[5px] ">
            <div className="name h-[25px] flex gap-[10px] items-center">
              <p className="font-semibold h-[27px] text-blue">Timpu</p>
              <div className="vector w-[14.48px] h-[15px]">
                <img src={vector} alt="" />
              </div>
            </div>
            <div className="sub h-[25px] text-[15px] text-blue font-medium">
              chat assistance
            </div>
          </div>
        </div>
        <div className="right w-[62px] h-[60px] flex items-end">
          <div className="wrapper flex items-center gap-[5px]">
            <div className="online w-[8px] h-[8px] rounded-full bg-green"></div>
            <p className="text-blue font-medium">Online</p>
          </div>
        </div>
      </div>
      <div className="content h-[630px] w-[346px] m-auto">
        <div className="mainbox w-[336px] m-auto h-[630px] pt-[50px] ">
          <div className="chat1 w-[316px] h-[100px] m-auto flex flex-col gap-[5px] items-start ">
            <div className="chat-content w-[240px] rounded-[15px] h-[80px] bg-gradient-to-r from-three to-four px-[15px] py-[10px]">
              <p className="text-[13px] text-start text-text font-normal">
                Hi Sam! I am your personal shopping assistant , how can i help
                you today ?
              </p>
            </div>
            <div className="time px-[10px]">
              <p className="text-text text-[10px] font-normal">4:45 PM</p>
            </div>
          </div>

          <div className="chat2 w-[316px] m-auto h-[80px] mt-[20px] flex flex-col items-end">
            <div className="maincontent w-[210px] h-[60px] rounded-[15px] bg-lightGreen px-[15px] py-[10px]">
              <p className="text-[13px] text-text text-start font-normal">
                I am looking for a hand bag, with long strap .
              </p>
            </div>
            <div className="time px-[10px]">
              <p className="text-text text-[10px] font-normal">4:45 PM</p>
            </div>
          </div>

          <div className="third-box w-[316px] h-[60px] mt-[20px] flex flex-col gap-[10px] items-start m-auto">
            <div className="heading  h-[20px]">
              <p className="text-[13px] text-heading font-normal ">
                Popular tags for handbag
              </p>
            </div>
            <div className="corousel h-[30px] w-[316px] flex flex-row gap-[5px] ">
              <div className="left w-[285px]  overflow-hidden">
                <div className="wrapper w-[316px] flex flex-row gap-[10px]">
                  <div className="card h-[30px] px-[10px] py-[5px] border-[1px] border-blue rounded-[5px] bg-box">
                    <p className="text-[13px] text-blue font-normal">Clutch</p>
                  </div>
                  <div className="card h-[30px] px-[10px] py-[5px] border-[1px] border-blue rounded-[5px] bg-box">
                    <p className="text-[13px] text-blue font-normal">Fabric Lining</p>
                  </div>
                  <div className="card h-[30px] px-[10px] py-[5px] border-[1px] border-blue rounded-[5px] bg-box">
                    <p className="text-[13px] text-blue font-normal"> Baggit</p>
                  </div>

                  <div className="card h-[30px] px-[10px] py-[5px] border-[1px] border-blue rounded-[5px] bg-box border-r-dotted">
                    <p className="text-[13px] text-blue font-normal"> Multi</p>
                  </div>
                </div>
              </div>
              <div className="right flex justify-center items-center">
                <div className="img-wrapper h-[24px] w-[24px] flex justify-center items-center">
                  <img src={more} alt="next" className="w-[6px] h-[12px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="forth-box h-[250px] w-[316px] m-auto mt-[20px]">
            <div className="top h-[161px] ">
              <div className="chat-screen h-[141px] w-[230px] p-[10px] rounded-[20px] bg-gradient-to-br from-three via-three to-four flex flex-col gap-[10px] ">
                <div className="img-section h-[70px] px-[10px] py-[15px] rounded-[10px] bg-cardColor flex gap-[11px] items-center">
                  <div className="left w-[70px] h-[50px]">
                    <img src={frame} alt="" className=" w-[70px] h-[50px]" />
                  </div>
                  <div className="right h-[51px] flex flex-col gap-[7px] w-[130px]">
                    <div className="top h-[20px] flex gap-[5px] items-center">
                      <p className="text-text text-[13px] font-normal">
                        Bags on <span className="text-text font-semibold ">Timpu</span>
                      </p>
                      <div className="img-wrapper w-[15px] h-[14px]">
                        <img
                          src={vector}
                          alt=""
                          className="w-[15px] h-[14px]"
                        />
                      </div>
                    </div>
                    <div className="bottom h-[24px] flex justify-between items-center">
                      <p className="text-[12px] text-heading">1123 products</p>
                      <div className="icon w-[24px] h-[24px] flex justify-center items-center ">
                        <img src={next} alt="" className="w-[6px] h-[12px]" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bottom-text h-[40px] ">
                  <p className="text-text text-[13px] text-start">
                    Or set filter and help us choose the best bag for you.
                  </p>
                </div>
              </div>
              <div className="time px-[10px] mt-[5px]">
                <p className="text-text text-[10px] text-start">4:45 PM</p>
              </div>
            </div>

            <div className="bottom w-[316px] h-[88px] flex flex-col gap-[10px] mt-[10px]">
              <div className="top flex justify-between">
                <div className="left">
                  <p className="text-[13px] text-heading">Select filters</p>
                </div>
                <div className="right flex gap-[2px]">
                  <div className="img-wrapper w-[20px] h-[20px] ">
                    <img src={slider} alt="" className="w-[20px] h-[20px]" />
                  </div>
                  <p className="text-text text-[13px]">Filter</p>
                </div>
              </div>
              <div className="bottom h-[58px] flex flex-wrap gap-[10px]">
                <div className="card h-[24px]  border-[1px] border-blue rounded-[5px] px-[10px] py-[2px]">
                  <div className="content h-[20px] flex gap-[5px] items-center">
                    <p className="text-blue text-[13px]">Strap - Long</p>
                    <div className="img w-[11px] h-[11px]">
                      <img
                        src={blueCross}
                        alt=""
                        className="w-[11px] h-[11px]"
                      />
                    </div>
                  </div>
                </div>
                <div className="card h-[24px]  border-[1px] border-blue rounded-[5px] px-[10px] py-[2px] bg-cardBg">
                  <div className="content h-[20px] flex gap-[5px] items-center">
                    <p className="text-cardText text-[13px]">Colour</p>
                    <div className="img w-[11px] h-[11px]">
                      <img
                        src={grayCross}
                        alt=""
                        className="w-[11px] h-[11px]"
                      />
                    </div>
                  </div>
                </div>
                <div className="card h-[24px]  border-[1px] border-blue rounded-[5px] px-[10px] py-[2px] bg-cardBg">
                  <div className="content h-[20px] flex gap-[5px] items-center">
                    <p className="text-cardText text-[13px]">Size</p>
                    <div className="img w-[11px] h-[11px]">
                      <img
                        src={grayCross}
                        alt=""
                        className="w-[11px] h-[11px]"
                      />
                    </div>
                  </div>
                </div>
                <div className="card h-[24px]  border-[1px] border-blue rounded-[5px] px-[10px] py-[2px] bg-cardBg">
                  <div className="content h-[20px] flex gap-[5px] items-center">
                    <p className="text-cardText text-[13px]">Brand</p>
                    <div className="img w-[11px] h-[11px]">
                      <img
                        src={grayCross}
                        alt=""
                        className="w-[11px] h-[11px]"
                      />
                    </div>
                  </div>
                </div>{" "}
                <div className="card h-[24px]  border-[1px] border-blue rounded-[5px] px-[10px] py-[2px] bg-cardBg">
                  <div className="content h-[20px] flex gap-[5px] items-center">
                    <p className="text-cardText text-[13px]">Material</p>
                    <div className="img w-[11px] h-[11px]">
                      <img
                        src={grayCross}
                        alt=""
                        className="w-[11px] h-[11px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fifth-box  h-[73px] w-[346px] m-auto rounded-b-[20px] bg-gradient-to-br from-bottomStart via-bottomStart to-bottomEnd px-[10px] py-[7px]">
        <div className="top h-[40px] flex gap-[5px]">
          <div className="left w-[255px] h-[40px] rounded-[10px] bg-cardColor border-[1px] border-borderColor flex items-center pl-[20px]">
            <div className="text h-[20px] flex gap ">
              <p className="text-[13px] text-heading w-[200px] text-start">
                Type your message
              </p>
              <div className="paper w-[20px] h-[20px]">
                <img src={paper} alt="" className="w-[20px] h-[20px]" />
              </div>
            </div>
          </div>
          <div className="right w-[70px] h-[40px] rounded-[10px] bg-blue flex justify-center items-center">
            <div className="wrapper w-[8px] h-[15px]">
              <img src={whiteVector} alt="" className=" w-[8px] h-[15px]" />
            </div>
          </div>
        </div>
        <div className="bottom flex justify-center gap-[5px] mt-[5px]">
          <p className="text-heading text-[12px]">
            Powered by{" "}
            <span className="text-cardText text-[12px] font-semibold">Krunk.ai</span>
          </p>
          <div className="img w-[16px] h-[16px]">
            <img src={logo} alt="" className="w-[16px] h-[16px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
