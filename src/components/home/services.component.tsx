import { services_info } from "@/constants";
import React from "react";
import { Service, ServicesList, ServicesWrap } from "./services.styles";

export const Services = () => {
  return (
    <ServicesWrap>
      <h2>
        <span className="dash"></span>Services
      </h2>

      <ServicesList>
        {services_info.map(({ id, title, description }) => {
          return (
            <Service key={id}>
              <span className="number">0{id}</span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </Service>
          );
        })}
      </ServicesList>
    </ServicesWrap>
  );
};
