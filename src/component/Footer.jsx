import React from 'react';

import { Container,Card } from "react-bootstrap";


const Footer = () => {
    return (
      <Container >
      <Card body>
       
            <div className='row'>
              <div className='col-12'>
              <ul class="list-unstyled mb-0">
                <li>
                  <p class="text-dark">Jalan Semangat No. 1 Pantang Mundur Kota Bandung</p>
                </li>
                <li>
                  <p class="text-dark">inilahloker@gmail.com</p>
                </li>
                <li>
                  <p class="text-dark">081-222-222-222</p>
                </li>
              </ul>
              </div>

              <div className='col-12 col-md-6 '>
              <h5 className='mb-0'>Copyright InilahLoker2022</h5>

              
            </div>
            </div>
            </Card>;
        </Container>
        
     
        

    );
}

export default Footer;