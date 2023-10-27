import DynamicText from "../../ui/DynamicText";

function Introduction() {
  return (
    <div className="text-left mb-10" style={{ fontFamily: "Cutive Mono" }}>
      <div className="mb-10">
        I&apos;ve spent years shaping beautiful outdoor spaces as a landscape
        architect, working on diverse projects that range from impressive public
        ventures to luxurious residential designs. This journey has not only
        ignited my passion for{" "}
        <DynamicText
          content={["artistry", "creativity", "craftsmanship"]}
          style="text-red-700 bg-orange-50/50 underline decoration-2 underline-offset-4"
        />
        but also nurtured my knack for research, analytical thinking and
        problem-solving. Alongside my landscape architecture work, I&apos;ve
        also delved into the digital world of freelancing, specializing in
        branding and logo design.
      </div>
      <div>
        Now, I&apos;m on a new path to become a full-stack developer, and
        I&apos;m bringing with me a wealth of design and{" "}
        <span className="text-red-700 bg-orange-50/50 underline decoration-2 underline-offset-4">
          problem-solving
        </span>{" "}
        skills. My goal is to create not only user-friendly websites but also
        versatile applications across multiple platforms, bridging my past
        experiences with my exciting new career.
      </div>
    </div>
  );
}

export default Introduction;
