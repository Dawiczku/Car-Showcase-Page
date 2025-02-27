import { Gallery } from "components/gallerypage/Gallery";

export const Content = () => {
  return (
    <div className="content__wrapper">
      <div className="content__info-container">
        <p className="content__nickname">Drift King</p>
        <h2>
          Nissan <span>SX180</span>
        </h2>
        <div className="content__custom-bar">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className="content__short-specs">
          <div>
            <img
              src="src/assets/icons/engine.svg"
              style={{
                height: "48px",
                width: "48px",
              }}
            />
            <p>Engine</p>
            <strong>2.0 R4</strong>
          </div>
          <div>
            <img
              src="src/assets/icons/speed.svg"
              style={{
                height: "48px",
                width: "48px",
              }}
            />
            <p>Top Speed</p>
            <strong>210 km/h</strong>
          </div>
          <div>
            <img
              src="src/assets/icons/fire.svg"
              style={{
                height: "48px",
                width: "48px",
              }}
            />
            <p>Horse Power</p>
            <strong>205</strong>
          </div>
        </div>
        <p className="content__description">
          A JDM drift legend, the 180SX came with pop-up headlights and was
          powered by the CA18DET or SR20DET turbocharged engines. Known for its
          lightweight chassis and RWD setup.
        </p>
      </div>
      <Gallery />
    </div>
  );
};
