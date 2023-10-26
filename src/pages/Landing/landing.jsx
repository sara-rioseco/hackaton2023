import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import OfferCard from '../../components/cards/offertcards';

const OfferCarousel = () => {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        // Función para obtener datos de la API utilizando fetch
        const fetchData = async () => {
            try {
                const response = await fetch('https://iezopofihj.execute-api.us-east-1.amazonaws.com/dev/offers');
                const data = await response.json();
                setOffers(data.data); // Guarda los datos de la API en el estado
                console.log('data:', data.data);
            } catch (error) {
                console.error('Error al obtener datos de la API: ', error);
            }
        };

        fetchData(); 
    }, []); // El segundo argumento del useEffect ([]) asegura que se ejecute solo una vez al montar el componente.

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return(
        <div style={{ width: '100%' }}>
            <Slider {...settings}>
                {offers.map(offer => (
                    <OfferCard key={offer.id}/>
//                    <div 
  //                      key={offer.id}>
    //                    <h3>{offer.title}</h3>
      //</Slider>                  <p>{offer.description}</p>
        //            </div>
                ))}
            </Slider>
        </div>
    );


/*    return (
        <div>
            <h2>Ofertas de Trabajo</h2>
    );*/
};

export default OfferCarousel;
