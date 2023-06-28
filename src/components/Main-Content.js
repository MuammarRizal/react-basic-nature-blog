import CardsNature from "./CardsNature";
import Hero from "./Hero";
import nature1 from "../assets/card/card1.jpg";
import nature2 from "../assets/card/card2.jpg";
import nature3 from "../assets/card/card3.jpg";
import CardBeautiful from "./CardsBeautiful";
import imageNature from "../assets/card/imageNature.jpg";

const MainContent = () => {
  const text1 = "Alam yang sangat indah akan pemandangan nya,membuat kita menatap terkagum saat akan melihatnya";
  const text2 = "Jika alam hendak kau musnahkan, lalu dari mana kamu akan mendapatkan makanan dan tempat tinggal?.";
  const text3 = "Agar hidupmu tak gagal jika dekat alam, maka makan dan tidurlah pada pelukannya";
  return (
    <div>
      <Hero />
      <div className="container">
        <div className="row">
          <div className="col-12 text-center my-5">
            <h1>Beautiful Nature</h1>
          </div>
        </div>

        <div className="row justify-content-center g-3">
          <div className="col-lg-4 col-md-6 col-12 text-center d-flex justify-content-center">
            <CardsNature imageCard={nature1} textCard={text1} titleCard="Tempat" />
          </div>
          <div className="col-lg-4 col-md-6 col-12 text-center d-flex justify-content-center">
            <CardsNature imageCard={nature2} textCard={text2} titleCard="Alam" />
          </div>
          <div className="col-lg-4 col-md-6 col-12 text-center d-flex justify-content-center">
            <CardsNature imageCard={nature3} textCard={text3} titleCard="Kehangatan" />
          </div>
        </div>

        <div className="row">
          <div className="col-12 ">
            <h1 className="my-5 text-center">Nature</h1>
          </div>
          <div className="col-12">
            <CardBeautiful imageNature={imageNature} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
