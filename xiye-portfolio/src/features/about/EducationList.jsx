import { AtSymbolIcon } from "@heroicons/react/24/outline";

function EducationList() {
  return (
    <ul className="mt-24 md:mx-10 flex flex-col gap-6">
      <li>
        <div className="grid grid-cols-12 gap-5 items-center">
          <AtSymbolIcon className="w-[60%] h-[60%] justify-self-center" />
          <div className="hidden md:block md:col-start-2 md:col-span-1">
            <img
              src="UMN-logo.webp"
              alt="logo of UMN"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="col-start-2 md:col-start-3 col-span-6 justify-self-start text-start">
            <h3 className="font-bold">Master of Landscape Architecture</h3>
            <p className="text-sm text-stone-500">University of Minnesota</p>
          </div>
          <p className="col-start-9 col-span-4 justify-self-end self-start text-sm">
            2-year
          </p>
          <div className="row-start-2 border-l border-red-700 h-full w-1/2 justify-self-end" />
          <p
            className="row-start-2 col-start-2 col-span-11 text-start"
            style={{ fontFamily: "Cutive Mono" }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil quod
            numquam tempora magni obcaecati earum rerum odit explicabo sapiente
            a fuga provident repellendus, ipsum id autem odio perferendis.
            Incidunt laborum quae deserunt excepturi esse. Eum minima esse
            ratione voluptatum dolor. Et expedita adipisci harum iure est
            nostrum quis! Suscipit, quod!
          </p>
        </div>
      </li>
      <li>
        <div className="grid grid-cols-12 gap-5 items-center">
          <AtSymbolIcon className="w-[45%] h-[45%] justify-self-center" />
          <div className="hidden md:block md:col-start-2 md:col-span-1">
            <img
              src="Tongji-logo.webp"
              alt="logo of UMN"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="col-start-2 md:col-start-3 col-span-6 justify-self-start text-start">
            <h3 className="font-bold">Bachelor of Engineering</h3>
            <p className="text-sm text-stone-500">Tongji University</p>
          </div>
          <p className="col-start-9 col-span-4 justify-self-end self-start text-sm">
            4-year
          </p>
          <div className="row-start-2 border-l border-red-700 h-full w-1/2 justify-self-end" />
          <p
            className="row-start-2 col-start-2 col-span-11 text-start"
            style={{ fontFamily: "Cutive Mono" }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil quod
            numquam tempora magni obcaecati earum rerum odit explicabo sapiente
            a fuga provident repellendus, ipsum id autem odio perferendis.
            Incidunt laborum quae deserunt excepturi esse. Eum minima esse
            ratione voluptatum dolor. Et expedita adipisci harum iure est
            nostrum quis! Suscipit, quod!
          </p>
        </div>
      </li>
    </ul>
  );
}

export default EducationList;
