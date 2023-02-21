import React from "react";
import me from "../assets/1.jpeg"
import is from "../assets/2.jpeg"
import maa from "../assets/3.jpg"

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>

      <section>
        <TestimonialCard
          img={me}
          name={"Muhammad Yaseen"}
          feedback={"I will high recommend every one to work with abuzar khan."}
        />

        <TestimonialCard
        img={is}
          name={"Ismail Azam"}
          feedback={
            "I recommend this professional developer Abuzar Khan!"
          }
        />

        <TestimonialCard
        img={maa}
          name={"Muhammad Maaz"}
          feedback={" Abuzar is the best when it comes to Web Development work . Highly recommended."}
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback, img }) => (
  <article>
    <img
    className="img-test"
      src={img}
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;
