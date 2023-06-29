import { useState } from "react";

const ObjectNature = () => {
  let [gunung, setGunung] = useState({
    nama: "Pangrango",
    lokasi: "Bogor",
    simaksi: 75_000,
    naikGunung: () => {
      alert("Hati hati untuk penaikan nya");
      setGunung((data) => {
        return {
          ...data,
          simaksi: 0,
        };
      });
    },
  });

  return (
    <>
      <div className="text-center my-5">
        <h1>{gunung.nama}</h1>
        <h3>{gunung.lokasi}</h3>
        <h3>{gunung.simaksi}</h3>
        <button className="btn btn-primary" onClick={() => gunung.naikGunung()}>
          naik sekarang
        </button>
      </div>
    </>
  );
};

export default ObjectNature;
