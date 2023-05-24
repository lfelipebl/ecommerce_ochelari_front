import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard.js';
import ProductCard from '../components/ProductCard.js';
import ProductCardSpecial from '../components/ProductCardSpecial.js';

const Home = () => {
  return (
    <>
     {/* WRAPPER - 1 */}
    <section className='home-wrapper-1 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-6'>
            
            {/* BANNER 1 */}
            <div className='main-banner position-relative text-white'>
              <img src='images/main-banner-1.jpg' 
                   alt='main banner'
                   className='img-fluid rounded-3'
              />
             
              <div className='main-banner-content position-absolute'>
                <h4>RALPH LAUREN</h4>
                <h5>Nueva colección</h5>
                <p>Presentamos la nueva colección de gafas graduadas y de sol; clásicos modernos para la mujer metropolitana</p>
                <Link className='button'>Ver ahora</Link>
              </div>

            </div>

          </div>

          <div className='col-6'>

            <div className='d-flex flex-wrap justify-content-between align-items-center'>

              {/* BANNER 2-1 */}
              <div className='small-banner gap-10 position-relative text-white'>
                <img src='images/small-banner-1.jpg' 
                    alt='small banner'
                    className='img-fluid rounded-3'
                />
              
                <div className='small-banner-content position-absolute'>
                  <h4>MICHAEL KORS</h4>
                  <h5>Colección primavera - verano</h5>
                  <p>Las siluetas de inspiración vintage definen los nuevos estilos de gafas de Michael Kors</p>
                </div>
              </div>

              {/* BANNER 2-2 */}
              <div className='small-banner  position-relative text-white gap-10'>
                <img src='images/small-banner-1.jpg' 
                    alt='small banner'
                    className='img-fluid rounded-3'
                />
              
                <div className='small-banner-content position-absolute'>
                  <h4>EMPORIO ARMANI</h4>
                  <h5>Primavera/verano 2023</h5>
                  <p>Emporio Armani persigue su recorrido sostenible con diseños vanguardistas y materiales biobasados</p>
                </div>
              </div>

              {/* BANNER 2-3 */}
              <div className='small-banner gap-10 position-relative text-white'>
                <img src='images/small-banner-1.jpg' 
                    alt='small banner'
                    className='img-fluid rounded-3'
                />
              
                <div className='small-banner-content position-absolute'>
                  <h4>MICHAEL KORS</h4>
                  <h5>Colección primavera - verano</h5>
                  <p>Las siluetas de inspiración vintage definen los nuevos estilos de gafas de Michael Kors.</p>
                </div>
              </div>

              {/* BANNER 2-4 */}
              <div className='small-banner gap-10 position-relative text-white'>
                <img src='images/small-banner-1.jpg' 
                    alt='small banner'
                    className='img-fluid rounded-3'
                />
              
                <div className='small-banner-content position-absolute'>
                  <h4>MICHAEL KORS</h4>
                  <h5>Colección primavera - verano</h5>
                  <p>Las siluetas de inspiración vintage definen los nuevos estilos de gafas de Michael Kors.</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>


    {/* WRAPPER NEWS- 5 */}
    <section className='special-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12 d -flex'>
            <h3 className='section-heading'>Ofertas</h3>
            <p className='section-heading-2'>¡Encuentras precios increíbles!</p>
          </div>
          <div className='row'>
            <ProductCardSpecial />
            <ProductCardSpecial />
            <ProductCardSpecial />
            <ProductCardSpecial />
            <ProductCardSpecial />
            <ProductCardSpecial />
          </div>  
        </div>
      </div>
     </section>
      

    {/* WRAPPER - 2 */}
    <section className='home-wrapper-2 py-5'>
      <dev className= 'container-xxl container-wrap-2'>
        <div className='row'>
          <div className='col-12'>
            <div className='d-flex align-items-center justify-content-between'>
              <div className='d-flex align-items-center gap-10'>
                <img src='images/Truck.svg' alt='services' />
                <div>
                  <h6>Envíos Gratis</h6>
                  <p className='mb-0'>En todos tus productos </p>
                </div>
              </div>
              <div className='d-flex align-items-center gap-10'>
                <img src='images/Support.svg' alt='services' />
                <div>
                  <h6>Atención Personalizada</h6>
                  <p className='mb-0'>Compra con un experto</p>
                </div>
              </div>
              <div className='d-flex align-items-center gap-10'>
                <img src='images/Offer.svg' alt='services' />
                <div>
                  <h6>Marcas Excusivas</h6>
                  <p className='mb-0'>Productos Top Global</p>
                </div>
              </div>
              <div className='d-flex align-items-center gap-10'>
                <img src='images/Gift.svg' alt='services' />
                <div>
                  <h6>Ofertas Sorpresa</h6>
                  <p className='mb-0'>Descuentos especiales</p>
                </div>
              </div>
              <div className='d-flex align-items-center gap-10'>
                <img src='images/Creditcard.svg' alt='services' />
                <div>
                  <h6>Pagos Seguros</h6>
                  <p className='mb-0'>Pagos 100% protegidos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </dev>
    </section>

    {/* WRAPPER NEWS- 5 */}
    <section className='featured-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Productos destacados</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
     </section>

    {/* WRAPPER MARQUEE- 3 */}
    <section className='marque-wrapper-3 py-4'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='marquee-inner-wrapper card_wrapper'>
              <Marquee className='d-flex'>
                <div className='marquee-div'><img src='images/ARMANI-EXCHANGE.svg' alt='brand' /></div>
                <div className='marquee-div'><img src='images/EMPORIO-ARMANI.svg' alt='brand' /></div>
                <div className='marquee-div'><img src='images/KIPLING.svg' alt='brand' /></div>
                <div className='marquee-div'><img src='images/MICHAEL-KORS.svg' alt='brand' /></div>
                <div className='marquee-div'><img src='images/OACKLEY.svg' alt='brand' /></div>
                <div className='marquee-div'><img src='images/POLO-RALPH-LAUREN.svg' alt='brand' /></div>
                <div className='marquee-div'><img src='images/POLO-RALPH-LAUREN-EYEWEAR.svg' alt='brand' /></div>
                <div className='marquee-div'><img src='images/RALPH-LAUREN.svg' alt='brand' /></div>
                <div className='marquee-div'><img src='images/RAYBAN.svg' alt='brand' /></div>
                <div className='marquee-div'><img src='images/VERSACE.svg' alt='brand' /></div>
                <div className='marquee-div'><img src='images/VOGUE-EYEWEAR.svg' alt='brand' /></div>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>

     {/* WRAPPER NEWS- 4 */}
     <section className='blog-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Noticias y tendencias</h3>
          </div>
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
     </section>
  </>  
  )
}

export default Home