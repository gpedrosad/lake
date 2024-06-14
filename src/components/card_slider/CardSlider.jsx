// import './CardSlider.css'
// import Slider from 'react-slick';
// import Card from '../Card';
// import { useLayoutEffect, useState } from 'react';


// const CardSlider = () => {
//   // Estado para almacenar la configuración
//   const [settings, setSettings] = useState({
//     className: "center",
//     centerMode: false,
//     dots: true,
//     infinite: false,
//     speed: 1000,
//     slidesToShow: 3, // Valor predeterminado para desktop
//     slidesToScroll: 2,
//     autoplay: false,
//     autoplaySpeed: 5000,

//   });

//   useLayoutEffect(() => {
//     // Función para actualizar la configuración basada en el tamaño de la pantalla
//     const updateSettings = () => {
//       const isMobile = window.innerWidth < 768; // Asumiendo 768px como breakpoint para móvil
//       setSettings(prevSettings => ({
//         ...prevSettings,
//         slidesToShow: isMobile ? 1.5 : 3 // 1.5 slides para móvil, 3 para desktop
//       }));
//     };

//     updateSettings(); // Llama a la función cuando el componente se monta
//     window.addEventListener('resize', updateSettings); // Ajusta la configuración cuando se cambia el tamaño de la ventana

//     return () => {
//       window.removeEventListener('resize', updateSettings); // Limpiar el event listener al desmontar
//     };
//   }, []);

//   return (
//     <div className='Slider-component'>
//       <div className='component_t_card_slider '>


//         <div className='flex items-center items-center mt-5 mb-5'>
//         <img 
//       src="src/assets/images/hoja1.png" 
//       alt="Descripción de la imagen" 
//       style={{ width: '40px', height: '40px' }} 
//       className="ml-6 md:mr-2 md:mb-4"
//     />
//     <h1 className='font-rufina font-bold text-2xl text-custom-green sm:text-3xl md:text-4xl lg:text-5xl md:mt-10 md:mb-12'>
//       Experience the tranquility
//       </h1>        
// </div>
//         <img 
//       src="src/assets/images/hoja2.png" 
//       alt="Descripción de la imagen" 
//       style={{ width: '40px', height: '40px' }} 
//       className="ml-4 md:ml-2"
//     />

//       </div>
//     <Slider className='card_slider_component'{...settings}>
      
//       <Card title={'Indoor dining'} description={'Immerse yourself in the warm embrace of our indoor oasis, savor al-fresco moments on our charming outdoor terrace, or unwind at the stylish bar where crafted libations await.'} image={'src/assets/images/card-image-1.png'}/>
//       <Card title={'Outdoor dining'} description={'Immerse yourself in the warm embrace of our indoor oasis, savor al-fresco moments on our charming outdoor terrace, or unwind at the stylish bar where crafted libations await.'}  image={'src/assets/images/card-image2.png'}/>
//       <Card title={'Boat cruise'} description={'Immerse yourself in the warm embrace of our indoor oasis, savor al-fresco moments on our charming outdoor terrace, or unwind at the stylish bar where crafted libations await.'} image={'src/assets/images/card-image3.png'}/>
//       <Card title={'Indoor dining'} description={'Immerse yourself in the warm embrace of our indoor oasis, savor al-fresco moments on our charming outdoor terrace, or unwind at the stylish bar where crafted libations await.'}  image={'src/assets/images/card-image-1.png'}/>
//       <Card title={'Boat cruise'} description={'Immerse yourself in the warm embrace of our indoor oasis, savor al-fresco moments on our charming outdoor terrace, or unwind at the stylish bar where crafted libations await.'}  image={'src/assets/images/card-image3.png'}/>

//     </Slider>
//     </div>
//   );
// };

// export default CardSlider;


import { useState, useEffect, useRef } from 'react';
import './CardSlider.css';
import Card from '../card/Card';

const CardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);
  const [totalDots, setTotalDots] = useState(0); // Estado para almacenar el número de dots
  const sliderRef = useRef(null);

  useEffect(() => {
    const updateSettings = () => {
      const isMobile = window.innerWidth < 768;
      setItemsToShow(isMobile ? 1.5 : 3);
    };

    updateSettings(); // Llama a la función cuando el componente se monta
    window.addEventListener('resize', updateSettings); // Ajusta la configuración cuando se cambia el tamaño de la ventana

    return () => {
      window.removeEventListener('resize', updateSettings); // Limpia el event listener al desmontar
    };
  }, []);

  // UseEffect adicional para calcular el número total de dots después de que el componente esté montado
  useEffect(() => {
    if (sliderRef.current) {
      setTotalDots(Math.ceil(sliderRef.current.children.length / itemsToShow));
    }
  }, [itemsToShow]);

  const nextSlide = () => {
    if (sliderRef.current && currentIndex < sliderRef.current.children.length - itemsToShow) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="slider-component">
      <div className="slider-header">
        <div className="header-content">
          <img 
            src="src/assets/images/hoja1.png" 
            alt="Descripción de la imagen" 
            className="header-image"
          />
          <h1 className="header-title">
            Experience the tranquility
          </h1>
          <img 
            src="src/assets/images/hoja2.png" 
            alt="Descripción de la imagen" 
            className="header-image"
          />
        </div>
      </div>
      <div className="slider-container">
        <button className="slider-button left" onClick={prevSlide}></button>
        <div className="slider-wrapper" ref={sliderRef} style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}>
          <Card title="Indoor dining" description="Immerse yourself in the warm embrace of our indoor oasis, savor al-fresco moments on our charming outdoor terrace, or unwind at the stylish bar where crafted libations await." image="src/assets/images/card-image-1.png" />
          <Card title="Outdoor dining" description="Immerse yourself in the warm embrace of our indoor oasis, savor al-fresco moments on our charming outdoor terrace, or unwind at the stylish bar where crafted libations await." image="src/assets/images/card-image2.png" />
          <Card title="Boat cruise" description="Immerse yourself in the warm embrace of our indoor oasis, savor al-fresco moments on our charming outdoor terrace, or unwind at the stylish bar where crafted libations await." image="src/assets/images/card-image3.png" />
          <Card title="Indoor dining" description="Immerse yourself in the warm embrace of our indoor oasis, savor al-fresco moments on our charming outdoor terrace, or unwind at the stylish bar where crafted libations await." image="src/assets/images/card-image-1.png" />
        </div>
        <button className="slider-button right" onClick={nextSlide}></button>
      </div>
      <div className="slider-dots">
        {[...Array(totalDots)].map((_, index) => (
          <div key={index} className={`dot ${index === currentIndex ? 'active' : ''}`} onClick={() => setCurrentIndex(index)}></div>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;


