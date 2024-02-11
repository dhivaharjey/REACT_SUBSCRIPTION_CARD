import React from "react";
import PriceCard from "./components/PriceCard";
import "./index.css";

function App() {
  const data = [
    {
      title: "FREE",
      price: "0",
      user: "Single user",
      storage: "50GB Storage",
      domain: "Free Subdomain",
      project: "text-muted",
      projectIcon: "fas fa-times",
      phone: "text-muted",
      phoneIcon: "fas fa-times",
      subDomain: "text-muted",
      subDomainIcon: "fas fa-times",
      month: "text-muted",
      monthIcon: "fas fa-times",
    },
    {
      title: "PLUS",
      price: "9",
      user: "Single user",
      storage: "50GB Storage",
      domain: "Free Subdomain",
      project: "fw-bolder",
      projectIcon: "fas fa-check",
      phone: "fw-bolder",
      phoneIcon: "fas fa-check",
      subDomain: "fw-bolder",
      subDomainIcon: "fas fa-check",
      month: "text-muted",
      monthIcon: "fas fa-times",
    },
    {
      title: "PRO",
      price: "49",
      user: "Single user",
      storage: "50GB Storage",
      domain: "Free Subdomain",
      project: "fw-bolder",
      projectIcon: "fas fa-check",
      phone: "fw-bolder",
      phoneIcon: "fas fa-check",
      subDomain: "fw-bolder",
      subDomainIcon: "fas fa-check",
      month: "fw-bolder",
      monthIcon: "fas fa-check",
    },
  ];

  return (
    <div className="pricing py-5 bg-primary">
      <div className="container ">
        <div className="row">
          {/* {data.map((item, index) => {
            return <PriceCard cardData={item} i={index} />;
          })} */}
          <PriceCard data={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
