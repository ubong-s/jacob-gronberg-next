import React from "react";
import { TestimonialsWrap, Testimonial } from "./testimonials.styles";
import { testimonials } from "@/constants";
import { AnimatedImage } from "../_shared";
import { Quote } from "../icons";

export const Testimonials: React.FC<{}> = () => {
  return (
    <TestimonialsWrap>
      <div className="intro">
        <h2>
          What my <br />
          clients <span>say</span>
        </h2>
        <p>
          Worked with Over <span>50 clients</span> <br />
          around the world
        </p>
      </div>

      <div className="content">
        {testimonials.map(({ id, highlight, image, fullQuote, name, role }) => (
          <Testimonial key={id}>
            <div className="testimonial__image">
              <AnimatedImage
                src={image}
                alt={name}
                height={120}
                width={120}
                identifier={id}
              />
            </div>

            <div className="testimonial__content">
              <div className="highlight">
                <Quote />
                <h3>{highlight}</h3>
              </div>
              <p className="full__quote">{fullQuote}</p>
              <p className="name__role">
                {name} <span className="dash"></span> {role}
              </p>
            </div>
          </Testimonial>
        ))}
      </div>
    </TestimonialsWrap>
  );
};
