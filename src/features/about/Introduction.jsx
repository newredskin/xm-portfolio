import DynamicText from "../../ui/DynamicText";

function Introduction() {
  return (
    <div className="text-left" style={{ fontFamily: "Cutive Mono" }}>
      <div>
        As a licensed landscape architect, I&apos;ve spent years shaping
        beautiful outdoor spaces, working on diverse projects that range from
        impressive public ventures to luxurious residential designs. This
        journey has not only ignited my passion for{" "}
        <DynamicText
          content={["artistry", "creativity", "craftsmanship"]}
          style="text-red-700 bg-orange-50/50 underline decoration-2 underline-offset-4"
        />
        but also nurtured my knack for research, analytical thinking and
        problem-solving. Alongside my landscape architecture work, I&apos;ve
        also delved into the digital world of freelancing, specializing in
        branding and logo design.
      </div>
    </div>
  );
}

export default Introduction;
