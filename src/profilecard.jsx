import React from "react";
import reactlogo from "./assets/react.svg";

const Profilecard = ({Profilelist}) => {
    return(
        <div
            style={{
                display: "flex",
                justifycontent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            <div
              style={{
                position: "relative",
                border: "2px solid #ccc",
                borderRadius: "8px",
                width: "300px",
                height: "350px",
                backgroundColor: "gray",
                boxShadow: "black",
                paddingRight: "300px",
                marginLeft: "250px",
                marginRight: "300px",
                fontSize: "20px",
                color: "white",
              }}
            >
                <div
                 style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "20px",
                    textAlign: "left",
                 }}
                >
                    <img
                    src={reactlogo}
                    alt="profile"
                    style={{
                        position: "absolute",
                        bottom: "200px",
                        left: "400px",
                        width: "100px",
                        height: "100px",
                        borderRadius: "50%",
                    }}></img>
                <p>{Profilelist.name}</p>
                <p>Department: {Profilelist.department}</p>
                <p>Year:{Profilelist.year}</p>
                <p>Mobile:{Profilelist.mobile}</p>
                <p>Address:{Profilelist.address}</p>
              </div>
            </div>     
        </div>
    );
}
export default Profilecard;