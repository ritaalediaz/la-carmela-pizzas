import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

import "../assets/styles/Productos.css";

export default function Productos() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section id="productos" className="productos">
      <h2 className="productos-title">Nuestros Productos</h2>

      {/* Carrusel principal */}
      <Swiper
        spaceBetween={10}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="producto-main-swiper"
      >
        <SwiperSlide>
          <img src="/imagen/masa-madre.jpg" alt="Masa Madre" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/imagen/masa-madre1.jpg" alt="Masa Madre 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/imagen/masa-madre2.jpg" alt="Masa Madre 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/imagen/jamon-muzza.jpg" alt="Pizza Jamón" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/imagen/jamon-muzza1.jpg" alt="Pizza Jamón 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/imagen/jamon-muzza2.jpg" alt="Pizza Jamón 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/imagen/pan-papa.jpg" alt="Pan de Papa" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/imagen/pan-papa1.jpg" alt="Pan de Papa 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/imagen/pan-papa2.jpg" alt="Pan de Papa 2" />
        </SwiperSlide>
         <SwiperSlide>
          <img src="/imagen/menu.jpg" alt="Menu" />
        </SwiperSlide>
      </Swiper>

      {/* Miniaturas */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="producto-thumbs-swiper"
      >
        <SwiperSlide>
          <img src="/imagen/masa-madre.jpg" alt="Masa Madre" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/imagen/masa-madre1.jpg" alt="Masa Madre 1" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/imagen/masa-madre2.jpg" alt="Masa Madre 2" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/imagen/jamon-muzza.jpg" alt="Pizza Jamón" />
        </SwiperSlide>

        <SwiperSlide>
           <img src="/imagen/jamon-muzza1.jpg" alt="Pizza Jamón 1" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/imagen/jamon-muzza2.jpg" alt="Pizza Jamón 2" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/imagen/pan-papa.jpg" alt="Pan de Papa" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/imagen/pan-papa1.jpg" alt="Pan de Papa 1" />
        </SwiperSlide>
        
        <SwiperSlide>
          <img src="/imagen/pan-papa2.jpg" alt="Pan de Papa 2" />
        </SwiperSlide>

          <SwiperSlide>
          <img src="/imagen/menu.jpg" alt="Menu" />
        </SwiperSlide>

      </Swiper>
    </section>
  );
}
