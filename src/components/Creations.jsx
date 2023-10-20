import { dataMobile, dataDesktop } from "./data";

const Creations = () => {
  return (
    <section className="lg:px-12 mb-20">
      <div className="px-6 mb-12 flex flex-row w-full md:justify-between">
        <h2 className="text-4xl font-thin text-center md:text-left m-auto md:m-0">
          OUR CREATIONS
        </h2>
        <button className="hidden md:block border-2 border-black py-2 px-8 hover:bg-black hover:text-white">
          SEE ALL
        </button>
      </div>

      <div className="md:hidden mb-8 px-6 flex flex-col gap-2 w-full justify-center items-center">
        {dataMobile.map((elem) => {
          return (
            <div key={elem.id} className="relative text-white">
              <img
                alt="card background"
                src={elem.img}
                className="z-[-1]"
              ></img>
              <h2 className="absolute bottom-4 left-4 text-2xl font-thin tracking-wide">
                {elem.title}
              </h2>
            </div>
          );
        })}
      </div>

      <div className="md:hidden w-fit flex justify-center items-center m-auto">
        <button className="border-2 border-black py-2 px-8">SEE ALL</button>
      </div>

      <div className="hidden md:grid justify-items-center grid-cols-4 px-6 gap-6">
        {dataDesktop.map((elem) => {
          return (
            <div
              key={elem.id}
              className="hover:scale-105 relative text-white hover:text-black duration-300"
            >
              <div className="brightness-50 z-[-1] hover:opacity-50 duration-300 cursor-pointer">
                <img
                  src={elem.img}
                  className="w-full object-cover"
                  alt="background"
                ></img>
              </div>
              <h2 className="absolute text-2xl   bottom-4 left-4 translate-x-[-4] translate-y-[4] ">
                {elem.title}
              </h2>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Creations;
