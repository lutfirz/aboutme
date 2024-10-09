import React from 'react';
import HCIA from '../../assets/HCIA.jpg';
import "./Services.css"

function Services() {
  return (
    <section class="services" id="services">
        <h2 class="heading">Services</h2>
        <div class="services-container">
            <div class="service-box">
                <div class="service-info">
                    <h4><img src={HCIA} /></h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium tempore rerum beatae autem consectetur, ipsum aut, ut neque molestiae veniam necessitatibus quisquam explicabo natus minima quas vel incidunt, unde perferendis!</p>
                </div>
            </div>

            <div class="service-box">
                <div class="service-info">
                    <h4>UI Design</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium tempore rerum beatae autem consectetur, ipsum aut, ut neque molestiae veniam necessitatibus quisquam explicabo natus minima quas vel incidunt, unde perferendis!</p>
                </div>
            </div>

            <div class="service-box">
                <div class="service-info">
                    <h4>UI Design</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium tempore rerum beatae autem consectetur, ipsum aut, ut neque molestiae veniam necessitatibus quisquam explicabo natus minima quas vel incidunt, unde perferendis!</p>
                </div>
            </div>
        </div>
        
    </section>
  );
}

export default Services;