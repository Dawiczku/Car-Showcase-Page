import { Content } from "components/gallerypage/Content";
import { Header } from "components/gallerypage/Header";
import { SideBar } from "components/gallerypage/SideBar";

export const GalleryPage = () => {
  return (
    <div className="gallery-page__wrapper">
      <SideBar />
      <Header />
      <Content />
    </div>
  );
};
