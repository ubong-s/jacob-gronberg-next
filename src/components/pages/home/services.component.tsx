import { services_info } from "@/constants";
import React, { useRef } from "react";
import { Service, ServicesList, ServicesWrap } from "./services.styles";
import { useIsomorphicLayoutEffect } from "@/utils/helpers";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Services = () => {
  const servicesContainer = useRef(null);
  const serviceRefs = useRef<any[]>([]);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      gsap
        .timeline({
          defaults: {
            opacity: 0,
            ease: "ease",
          },
          scrollTrigger: {
            trigger: servicesContainer.current,
            start: "top 40%",
            toggleActions: "play none none none",
          },
        })
        .to(servicesContainer.current, {
          autoAlpha: 1,
        })
        .from("h2", {
          y: 20,
        });

      serviceRefs.current.forEach((service, index) => {
        gsap
          .timeline({
            defaults: {
              opacity: 0,
              ease: "ease",
            },
            scrollTrigger: {
              id: `service__${index}`,
              trigger: service,
              start: "top center+=100px",
              toggleActions: "play none none none",
            },
          })
          .to(service, {
            autoAlpha: 1,
            borderWidth: 0,
          })
          .from(`#service__${index} .number`, { y: 20 })
          .from(`#service__${index} h3`, { y: 20 }, "<")
          .from(`#service__${index} p`, { y: 20 })
          .to(service, {
            autoAlpha: 1,
            borderWidth: 1,
          });
      });
    }, servicesContainer);

    return () => ctx.revert();
  }, []);

  const addServiceToRefs = (el: any) => {
    if (el && !serviceRefs.current.includes(el)) {
      serviceRefs.current.push(el);
    }
  };

  return (
    <ServicesWrap id="services" ref={servicesContainer}>
      <h2>
        <span className="dash"></span>Services
      </h2>

      <ServicesList>
        {services_info.map(({ id, title, description }, index) => {
          return (
            <Service key={id} id={`service__${index}`} ref={addServiceToRefs}>
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
