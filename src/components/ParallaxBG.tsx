import { Parallax } from "react-parallax";

const ParallaxBG = () => {
  return (
    <Parallax
      bgImage="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      bgImageAlt="background"
      strength={300}
      className="mb-10"
    >
      <div
        style={{ height: 400 }}
        className="flex justify-center items-center flex-col"
      >
        <div className="p-10 rounded-lg bg-slate-100 bg-opacity-10 drop-shadow-md backdrop-blur-sm">
          <h1 className="text-red-500 text-5xl font-bold">RED ATLAS</h1>
          <h2 className="text-white text-lg">Junior Challenge</h2>
        </div>
      </div>
    </Parallax>
  );
};

export default ParallaxBG;
