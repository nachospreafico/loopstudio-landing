import VRGuy from "./../../images/desktop/image-interactive.jpg";

const Main = () => {
  return (
    <main className="bg-white mb-20 flex flex-col gap-6 md:flex-row md:relative">
      <img src={VRGuy} className="pt-16 px-6 object-cover"></img>
      <div className="flex flex-col justify-center md:w-[50%] md:min-w-[50vw] md:p-8 lg:p-12 md:pb-0 lg:pb-0 md:absolute md:bottom-0 md:right-0 items-center px-6 gap-4 md:bg-white">
        <h2 className="font-thin text-4xl md:text-5xl lg:text-6xl text-center">
          THE LEADER IN INTERACTIVE VR
        </h2>
        <p className="text-center text-gray-700">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creatins have transformed business through digital
          experiences that bind to their brand.
        </p>
      </div>
    </main>
  );
};

export default Main;
