import React, { useRef } from "react";
import { TestimonialsWrap, Testimonial } from "./testimonials.styles";
import { testimonials } from "@/constants";
import { CustomImage, CustomButton } from "../../_shared";
import { Quote } from "../../icons";
import Link from "next/link";
import { useIsomorphicLayoutEffect } from "@/utils/helpers";
import { gsap } from "gsap";

export const Testimonials: React.FC<{}> = () => {
  const testimonialContainer = useRef(null);
  const testimonialRefs = useRef<any[]>([]);

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline({
          defaults: {
            opacity: 0,
            ease: "ease",
          },
          scrollTrigger: {
            trigger: testimonialContainer.current,
            start: "top center+=100px",
            toggleActions: "play none none none",
          },
        })
        .to(testimonialContainer.current, {
          autoAlpha: 1,
        })
        .from(".intro h2", {
          y: 20,
        })
        .from(".intro h2 sapn", {
          y: 20,
        })
        .from(".intro p", {
          y: 20,
        })
        .from(".intro a", {
          y: -20,
        });

      testimonialRefs.current.forEach((element, index) => {
        gsap
          .timeline({
            defaults: {
              opacity: 0,
              ease: "ease",
            },
            scrollTrigger: {
              id: `testimonial__${index}`,
              trigger: element,
              start: "top center+=100px",
              toggleActions: "play none none reverse",
            },
          })
          .to(element, { autoAlpha: 1 })
          .to(
            `#testimonial__${index} .image__wrap .overlay`,
            {
              xPercent: 0,
              autoAlpha: 1,
            },
            "<"
          )
          .to(`#testimonial__${index} .image__wrap .overlay`, {
            translateX: "101%",
            autoAlpha: 1,
          })
          .from(
            `#testimonial__${index} .image__wrap .image`,
            {
              scale: 1.1,
            },
            "<"
          )
          .from(`#testimonial__${index} .testimonial__content`, {
            y: 50,
          });
      });
    }, testimonialContainer);

    return () => ctx.revert();
  }, []);

  const addTestimonialsToRefs = (el: any) => {
    if (el && !testimonialRefs.current.includes(el)) {
      testimonialRefs.current.push(el);
    }
  };

  return (
    <TestimonialsWrap ref={testimonialContainer}>
      <div className="intro">
        <h2>
          What my <br />
          clients <span>say</span>
        </h2>
        <p>
          Worked with Over <span>50 clients</span> <br />
          around the world
        </p>
        <Link href="/contact">
          <CustomButton text="Work with me" variant="default" />
        </Link>
      </div>

      <div className="content">
        {testimonials.map(
          ({ id, highlight, image, fullQuote, name, role }, index) => (
            <Testimonial
              key={id}
              id={`testimonial__${index}`}
              ref={addTestimonialsToRefs}
            >
              <div className="testimonial__image">
                <CustomImage src={image} alt={name} height={120} width={120} />
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
          )
        )}
      </div>
    </TestimonialsWrap>
  );
};
