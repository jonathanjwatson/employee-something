import React, { useEffect, useState } from "react";
import axios from "axios";

const Item = (props) => {
  const styles = {
    employeePhoto: {
      maxHeight: 50,
      maxWidth: 50,
    },
  };

  const [employeeImageUrl, setEmployeeImageUrl] = useState(
    "https://images.dog.ceo/breeds/mountain-bernese/n02107683_3034.jpg"
  );

  useEffect(() => {
    //TODO: Query the dog api: https://dog.ceo/api/breeds/image/random
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        setEmployeeImageUrl(response.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="row">
      <div className="col">
        <img
          src={employeeImageUrl}
          alt="Employee avatar"
          style={styles.employeePhoto}
        ></img>
      </div>
      <div className="col">{props.id}</div>
      <div className="col">{props.employee_name}</div>
      <div className="col">{props.employee_salary}</div>
      <div className="col">{props.employee_age}</div>
    </div>
  );
};

export default Item;
