import React from 'react';
import image from '../../assets/image.png';
import "./Home.css"

function Home() {
  return (
    <section class="home" id="home">
        <div class="home-content">
            <h1>Hi, It's <span>Lutfi</span></h1>
            <h3 class="text-animation">I'm a <span></span></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae numquam dolores doloren adipisci recusandae, ex nesciunt. Voluptatum voluptates quasi tempora hic facilis veritatis consequuntur doloribus dolor provident, eligendi nam? Modi?</p>

            <div class="social-icons">
                <a href="https://www.linkedin.com/in/lutfi-razan"><i class='bx bxl-linkedin' ></i></a>
                <a href="https://zgithub.com/lutfirz"><i class='bx bxl-github'></i></a>
            </div>

            <div class="btn-group">
                <a href="#contact" class="btn">Contact</a>
            </div>
        </div>

            <div class="home-img">
                <img src={image} alt="" />
            </div>
    </section>
  );
}

export default Home;
