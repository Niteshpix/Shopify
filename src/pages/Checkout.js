import React, { useState } from "react";
import Information from "./Information";
import "../components/index.css";

function Checkout() {
  const [page, setPage] = useState(0);
  const [valid, setValid] = useState();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    phone: "",
    college: "",
    qualification: "",
    country: "",
    state: "",
    city: "",
  });

  const FormTitles = ["Personal Information!!", "Pay!!"];

  const PageDisplay = () => {
    if (page === 0) {
      return (
        <Information
          valid={valid}
          setValid={setValid}
          formData={formData}
          setFormData={setFormData}
        />
      );
    } else if (page === 1) {
      return ;
    }
  };

  return (
    <div className="checkout">
      <div
        className="progressbar"
        style={{ width: "400px", height: "10px", margin: "auto " }}
      >
        <div
          style={{ width: page === 0 ? "50%" : page === 1 ? "100%" : "100%" }}
        ></div>
      </div>

      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>

        <div className="footer">
          <button
            disabled={page === 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert("FORM SUBMITTED");
                console.log(formData);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Make Payment" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
