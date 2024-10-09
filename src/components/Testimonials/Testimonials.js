import React from 'react';
import "./Testimonials.css"
import image from '../../assets/1.png';

function Testimonials() {
  return (
    <section class="testimonials" id="testimonials">
        <div class="testimonials-box">
            <h2 class="heading">Testimonials</h2>

            <div class="wrapper">
              <div class="testimonial-item">
                <img src={image} alt="" />
                <h2>Lutfi</h2>
                <div class="rating">
                  <i class='bx bxs-star' id="star"></i>
                  <i class='bx bxs-star' id="star"></i>
                  <i class='bx bxs-star' id="star"></i>
                  <i class='bx bxs-star' id="star"></i>
                  <i class='bx bxs-star' id="star"></i>
                </div>
                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ab exercitationem similique odio commodi. Beatae, laboriosam magni provident aspernatur magnam esse, dolore veritatis et doloribus saepe adipisci sint nesciunt totam?"</p>
              </div>

              <div class="testimonial-item">
                <img src={image} alt="" />
                <h2>Lutfi</h2>
                <div class="rating">
                  <i class='bx bxs-star' id="star"></i>
                  <i class='bx bxs-star' id="star"></i>
                  <i class='bx bxs-star' id="star"></i>
                  <i class='bx bxs-star' id="star"></i>
                  <i class='bx bxs-star' id="star"></i>
                </div>
                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ab exercitationem similique odio commodi. Beatae, laboriosam magni provident aspernatur magnam esse, dolore veritatis et doloribus saepe adipisci sint nesciunt totam?"</p>
              </div>

              <div class="testimonial-item">
                <img src={image} alt="" />
                <h2>Lutfi</h2>
                <div class="rating">
                  <i class='bx bxs-star' id="star"></i>
                  <i class='bx bxs-star' id="star"></i>
                  <i class='bx bxs-star' id="star"></i>
                  <i class='bx bxs-star' id="star"></i>
                  <i class='bx bxs-star' id="star"></i>
                </div>
                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ab exercitationem similique odio commodi. Beatae, laboriosam magni provident aspernatur magnam esse, dolore veritatis et doloribus saepe adipisci sint nesciunt totam?"</p>
              </div>
            </div>
        </div>
        
    </section>
  );
}

export default Testimonials;