import ButtonComponent from './ButtonComponent';
import ImageCarousel from './ImageCarrousel';


const GreenFeatureSection = ({ title, description, buttonText, borderRadius, bgcolor, images  }) => {
    return (
        <>
        <div className="mx-auto bg-yellow-500 h-1 w-3/4 sm:w-1/2"></div>

        <div className="bg-[#B8CAA8] grid grid-cols-1 md:grid-cols-2 gap-3 p-4 justify-items-center items-center">       
            <div className="items-center justify-items-center px-10 py-5 md:mb-20">
                <h1 className="text-center whitespace-nowrap font-rufina pb-3 mb-1 mt-6 font-bold text-third-green text-3xl sm:text-3xl md:text-3xl md:pb-5 md:pt-10 sm:pb-3 sm:pt-11 sm:mb-1 xs:pb-3 xs:pt-11">
                    {title}
                </h1>
                <p className="text-justify text-xl text-custom-green xs:m-5">
                    {description}
                </p>
            </div>
            <div className="w-2/3 p-1 sm:w-2/3 md:w-full md:p-0 lg:p-0 xl:py-0 lg:w-full xl:w-full 2xl:w-full mx-auto pt-8">
                <ImageCarousel images={images} rounded='3xl'/>
            </div> 

        </div>
                <div className="bg-[#B8CAA8] flex justify-center pb-10">
                    <ButtonComponent text={buttonText} borderRadius={borderRadius} backgroundColor={bgcolor}/>
                </div>
                </>
    );
    };


export default GreenFeatureSection;