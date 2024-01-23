import React from "react";
import useUser from "../../hooks/useUser";
import cs from "./about.module.css"
const AboutPage = () => {

  const { userData, fetchAllUsers } = useUser()

  console.log({userData})

  return (
    <div className="App">
      <header className="App-header">
        <p>About Page</p>
        <button onClick={fetchAllUsers} className={cs.btn} >Fetch Data</button>

        <div className={cs.container}>
        {userData && userData?.map(x => (
          <p className={cs.name}>{x.first_name ?? "--"}</p>
        ))}
        </div>
      </header>
    </div>
  );
};

export default AboutPage;
