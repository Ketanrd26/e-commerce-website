import React from "react";
import { IoMdClose } from "react-icons/io";
import "../stytles/Pop.scss"
const Pop = ( props ) => {
  return (
    <>
      <form action="" onSubmit={props.onSubmit}>
        <div className="pop">
        
          <div className="card">
          <div className="close-btn" onClick={props.close}>
            <IoMdClose />
          </div>
         <div className="header-section">
         <div className="header">
              <p>{props.title}</p>
            </div>
            <div className="headers-btn">
              {props.cardvalue &&
                props.cardvalue.header.map((data) => {
                  return data.function || data.type ? (
                    data.type === "submit" ? (
                      <button key={data.title} type="submit" >
                        <span>{data.icon}</span> {data.title}
                      </button>
                    ) : (
                      <button
                        className="btn-3 heading"
                        onClick={data.function}
                        key={data.title}
                      >
                        <span className="icon">{data.icon}</span> {data.title}
                      </button>
                    )
                  ) : null;
                })}
            </div></div>
            <div className="body">
          {props.children}
        </div>
          </div>
      
        </div>
      </form>
    </>
  );
};

export default Pop;
