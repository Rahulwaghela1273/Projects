import React, { useState } from "react";
import { useForm } from "react-hook-form";

function FormDemo1() {
  const { register, handleSubmit } = useForm();
  const [userData, setUserData] = useState(null);
  const submitHandler = (data) => {
    console.log(data);
    setUserData(data);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>FormDemo1</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>Name</label>
          <input type="text" {...register("name")} />
        </div>
        <div>
          <label>Email</label>
          <input type="text" {...register("email")} />
        </div>
        <div>
          <label>City</label>
          <select {...register("city")}>
            <option value="">Select City</option>
            <option value="Vadodara">Vadodara</option>
            <option value="Ahmedabad">Ahmedabad</option>
            <option value="Surat">Surat</option>
          </select>
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
      {userData && (
        <div>
          <h2>OUTPUT</h2>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p>City: {userData.city}</p>
        </div>
      )}
    </div>
  );
}

export default FormDemo1;
