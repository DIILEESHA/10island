import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textElement,
        start: "top center+=100",
        end: "bottom center-=200",
        scrub: true,
      },
    });

    // Customize the animation properties based on your requirements
    tl.fromTo(
      textElement,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    );

    // Additional animations or modifications can be added as needed

    return () => {
      // Clean up if necessary
      tl.kill();
    };
  }, []);

  return (
    <div ref={textRef}>
      {/* Your text content goes here */}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae fuga,
        cupiditate distinctio architecto praesentium quo omnis nesciunt sunt
        veniam repellendus dolores laborum cum! Sit mollitia odio, repellat,
        atque iusto maiores tempore cupiditate sapiente, ex laborum
        exercitationem dolor! Officia tempora dolorum voluptatibus dolores,
        minus facere perferendis saepe voluptas consectetur repudiandae
        temporibus, commodi necessitatibus blanditiis earum? Vel reprehenderit
        similique alias, eum magni temporibus! Labore reiciendis, assumenda
        officia saepe pariatur accusantium. Qui modi ducimus vitae, ratione,
        nemo eaque rem ex aliquam alias voluptates nisi id dicta ipsam fuga
        repudiandae veniam beatae minima iure corrupti? Aspernatur laborum,
        sequi nulla ipsum ex nam, modi debitis expedita exercitationem veniam
        quae! Fuga vel cupiditate tenetur non illo quo alias quae itaque modi
        nemo incidunt eos excepturi ad rem exercitationem repudiandae numquam
        saepe aperiam, quos sequi. In vero nesciunt magni repellat cumque
        blanditiis consectetur, at tempore facere mollitia hic perspiciatis
        pariatur sed consequatur ex fugit? Perferendis laudantium et odit
        voluptas totam doloremque itaque maxime distinctio eos, aliquam nobis at
        praesentium minus reprehenderit, dolore quo architecto hic tempora
        repellendus neque pariatur eligendi fugiat? Ex laboriosam eveniet
        impedit accusantium nisi, quae sunt debitis cumque exercitationem
        fugiat. Eveniet porro fuga commodi voluptatum, dolores autem ipsam non
        similique deserunt fugit obcaecati esse!
      </p>
    </div>
  );
};

export default ScrollAnimation;
