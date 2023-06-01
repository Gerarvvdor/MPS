import React from "react";

const Contacts = () => {
  return (
    <>
      <div class="container">
        <div class="row">
          <h1 class="text-center">CONTACTOS</h1>
          <h2 class="text-start">Dirección oficinas:</h2>
          <div class="col align-items-center text-start justify-items-center">
            <h3>Colonia San Francisco #77, Calle los Castaños</h3>
            <p>Teléfono: +503 2247-3400</p>
            <p>E-mail: info@mpservice.com.sv</p>
            <ul class="list-unstyled">
              <li style={{ '--i': '#a955ff', '--j': '#ea51ff' }}>
                  <span class="icon"><i class="bi bi-facebook"></i></span>
                  <span class="titulo">
                    <a  href='https://www.facebook.com/profile.php?id=100063475033565' 
                        target='_blank' 
                        rel="noreferrer" 
                        class='me-3 text-cente jutify-content-centerr' 
                        style={{textDecoration: 'none', color: 'black'}}>
                          Facebook
                    </a>
                  </span>
              </li>
              <li style={{ '--i': '#FF0000', '--j': '#000000' }}>
                  <span class="icon"><i class="bi bi-youtube"></i></span>
                  <span class="titulo">
                    <a  href='https://www.youtube.com/channel/UC8Pm_a_1mfNMEsJuf66P56w?view_as=subscriber' 
                        target='_blank' 
                        rel="noreferrer" 
                        class='me-3 text-cente jutify-content-centerr' 
                        style={{textDecoration: 'none', color: 'black'}}>
                      Youtube
                    </a>
                </span>
              </li>
              <li style={{ '--i': '#ffa9e6', '--j': '#f434e2' }}>
                  <span class="icon"><i class="bi bi-instagram"></i></span>
                  <span class="titulo">
                    <a href='https://www.instagram.com/mp_service_/' 
                        target='_blank' 
                        rel="noreferrer" 
                        class='me-3 text-cente jutify-content-centerr' 
                        style={{textDecoration: 'none', color: 'black'}}>
                      Instagram
                    </a>
                  </span>
              </li>
              <li style={{ '--i': '#56eef2', '--j': '#2e80ed' }}>
                  <span class="icon"><i class="bi bi-twitter"></i></span>
                  <span class="titulo"><a href='https://twitter.com/MPSservice' target='_blank' rel="noreferrer" class='me-3 text-cente jutify-content-centerr' style={{textDecoration: 'none', color: 'black'}}>Twitter</a></span>
              </li>
              <li style={{ '--i': '#FF0000', '--j': '#01C3EB' }}>
                  <span class="icon"><i class="bi bi-envelope-at"></i></span>
                  <span class="titulo">
                    <a  href="mailto:info@mpservice.com.sv" target='_blank' 
                        rel="noreferrer" 
                        class='me-3 text-cente jutify-content-centerr' 
                        style={{textDecoration: 'none', color: 'black'}}>
                          E-mail
                    </a>
                  </span>
              </li>
          </ul>
          </div>
          <div class="col">
            <div class="embed-responsive embed-responsive-16by9">
              <iframe
                title="Map"
                class="embed-responsive-item"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16959.165349501363!2d-89.22871921126413!3d13.681359801096859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f633033e78f96bb%3A0x3012c545d0fa0371!2sMP%20Service%2C%20S.A.%20de%20C.V.!5e0!3m2!1ses-419!2ssv!4v1679931379904!5m2!1ses-419!2ssv"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      
      </div>
    </>
  );
};

export default Contacts;
