export const Gallery = () => {
  return (
    <div className="gallery__wrapper">
      <div className="gallery__top-overlay overlay" />
      <div className="gallery__item-container"></div>
      <div className="gallery__item-container">
        <img src={"src/assets/backgrounds/nissan_sx180/sx180_1.jpg"} />
      </div>
      <div className="gallery__item-container">
        <img src={"src/assets/backgrounds/nissan_sx180/sx180_2.jpg"} />
      </div>
      <div className="gallery__item-container">
        <img src={"src/assets/backgrounds/nissan_sx180/sx180_3.jpg"} />
      </div>
      <div className="gallery__bottom-overlay overlay" />
    </div>
  );
};
