import cardNature from "../assets/card/cardNature.jpg";
import itemCardNature from "../assets/card/itemCardNature.jpg";

// CSS eksternal
import "../css/style.css";

const CardNature = () => {
  return (
    // inline CSS
    <>
      <div className="my-5 text-center">
        <h1>Card Nature</h1>
      </div>
      <div style={{ backgroundImage: `url("${cardNature}")`, backgroundPosition: "bottom", overflow: "hidden", display: "flex", height: "700px", justifyContent: "center", flexDirection: "column", textAlign: "center" }}>
        <div>
          <img src={itemCardNature} style={{ width: "300px", height: "300px" }} alt="Card Nature" className="mb-5 image-nature" />
        </div>
        <div>
          <h2 className="job-developer">Front-End Developer</h2>
        </div>
        <div>
          <h3 className="author">Muammar Rizal</h3>
        </div>
        <div>
          <p className="desc">Saya Adalah seorang web designer</p>
        </div>
        <div>
          <button style={{ width: "400px" }} className="btn btn-primary">
            Contact Me
          </button>
        </div>
      </div>
    </>
  );
};

export default CardNature;
