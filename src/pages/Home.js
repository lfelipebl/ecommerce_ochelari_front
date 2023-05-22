import React from 'react'
import { Link } from 'react-router-dom'

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

    {/* WRAPPER - 2 */}
    <section className='home-wrapper-2 py-5'>
      <dev className= 'container-xxl container-wrap-2'>
        <div className='row'>
          <div className='col-12'>
            <div className='d-flex align-items-center justify-content-between'>
              <div className='d-flex align-items-center gap-10'>
                <img src='images/Truck.svg' alt='services' />
                <div>
                  <h6>Envíos gratis</h6>
                  <p className='mb-0'>En pedidos mayores a $500k </p>
                </div>
              </div>
              <div className='d-flex align-items-center gap-10'>
                <img src='images/Support.svg' alt='services' />
                <div>
                  <h6>Soporte 24/7</h6>
                  <p className='mb-0'>Compra con un experto</p>
                </div>
              </div>
              <div className='d-flex align-items-center gap-10'>
                <img src='images/Offer.svg' alt='services' />
                <div>
                  <h6>Precios justos</h6>
                  <p className='mb-0'>Precio directo de fabrica</p>
                </div>
              </div>
              <div className='d-flex align-items-center gap-10'>
                <img src='images/Gift.svg' alt='services' />
                <div>
                  <h6>Ofertas sorpresa
                  </h6>
                  <p className='mb-0'>Descuentos hasta de un 25%</p>
                </div>
              </div>
              <div className='d-flex align-items-center gap-10'>
                <img src='images/Creditcard.svg' alt='services' />
                <div>
                  <h6>Pagos seguros</h6>
                  <p className='mb-0'>Pagos 100% protegidos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </dev>
    </section>

    {/* WRAPPER - 3 */}
    <section className='marque-wrapper-3 py-5'>
    </section>
  </>  
  )
}

export default Home