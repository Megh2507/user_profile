import React, { useState, useEffect } from "react";

function UserDetail() {
  const [profiles, setProfiles] = useState([
    {
      full_name: "Megha Paul",
      city: "Kolkata",
      state: "West Bengal",
    },
    {
      full_name: "Rohit Roy",
      city: "Mumbai",
      state: "Maharashtra",
    },
  ]);
  const [fullname, setFullname] = useState("");
  const [cityname, setCityname] = useState("");
  const [statename, setStatename] = useState("");
  useEffect(() => {
    const savedProfiles = JSON.parse(localStorage.getItem("profiles-data"));
    if (savedProfiles) {
      setProfiles(savedProfiles);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("profiles-data", JSON.stringify(profiles));
  }, [profiles]);
  const addProfile = () => {
    const newProfile = {
      full_name: fullname,
      city: cityname,
      state: statename,
    };
    const newProfiles = [...profiles, newProfile];
    setProfiles(newProfiles);
    alert("You are added successfully!");
    setFullname("");
    setCityname("");
    setStatename("");
  };
  return (
    <div className="userprof">
      <div className="userinput">
        <input
          type="text"
          placeholder="full name"
          onChange={(e) => setFullname(e.target.value)}
          value={fullname}
        />
        <input
          type="text"
          placeholder="city name"
          onChange={(e) => setCityname(e.target.value)}
          value={cityname}
        />
        <input
          type="text"
          placeholder="state name"
          onChange={(e) => setStatename(e.target.value)}
          value={statename}
        />
        <button onClick={addProfile}>Add Me</button>
      </div>
      <div className="userlist">
        <div className="borderline"></div>
       

        {profiles.map((e) => {
          return (
            <>
            <div className="usercardlist">
              <div className="usercard">
              <p>
                <b>Full name :  </b> {e.full_name}
                </p>
                <p style={{textAlign:"center"}}>
            <b>City Name :</b>  {e.city}
                </p>
                <p>
              <b> State Name :</b>  {e.state}
                </p>
              </div>
            </div>
             
              <div className="borderline"></div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default UserDetail;
