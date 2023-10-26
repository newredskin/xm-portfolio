function CareerPath() {
  return (
    <ul className="grid lg:grid-cols-7 gap-y-4 md:gap-y-6">
      <li className="md:col-span-1 lg:col-start-4 lg:col-span-4 container rounded-xl py-1 px-3 text-stone-200 bg-teal-950/80 top-1/3 left-1/4 shadow-xl">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-start">Hoerr Schadut</h3>
          <div className="text-end inline-block text-sm">2019-2023</div>
        </div>
        <p
          className="text-start text-stone-400 text-sm"
          style={{ fontFamily: "Cutive Mono" }}
        >
          Landscape Architect
        </p>
      </li>
      <li className="md:col-span-1 lg:col-start-5 lg:col-span-3 container rounded-xl py-1 px-3 text-stone-200 bg-teal-950/80 top-1/3 left-1/4 shadow-xl">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-start">Freelance</h3>
          <div className="text-end inline-block text-sm">since 2020</div>
        </div>
        <p
          className="text-start text-stone-400 text-sm"
          style={{ fontFamily: "Cutive Mono" }}
        >
          Design/ Dev
        </p>
      </li>
      <li className="md:col-span-1 lg:col-start-2 lg:col-span-2 container rounded-xl py-1 px-3 text-stone-200 bg-teal-950/80 top-1/3 left-1/4 shadow-xl">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-start">Altamanu</h3>
          <div className="text-end inline-block text-sm">2017-2019</div>
        </div>
        <p
          className="text-start text-stone-400 text-sm"
          style={{ fontFamily: "Cutive Mono" }}
        >
          Landscape Designer
        </p>
      </li>
      <li className="md:col-span-1 lg:col-start-1 lg:col-span-1 container rounded-xl py-1 px-3 text-stone-200 bg-teal-950/80 top-1/3 left-1/4 shadow-xl">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-start">HGA</h3>
          <div className="text-end inline-block text-sm">2016-2017</div>
        </div>
        <p
          className="text-start text-stone-400 text-sm"
          style={{ fontFamily: "Cutive Mono" }}
        >
          Landscape Designer
        </p>
      </li>
    </ul>
  );
}

export default CareerPath;
