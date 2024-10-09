import React from 'react';
import "./Experience.css"

function Experience() {
  return (
    <section class="experience" id="experience">
        <h2 class="heading">Experience</h2>
        <div class="timeline-items">   
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                    <div class="timeline-date">2020</div>
                    <div class="timeline-content">
                        <h3>Institut Teknologi Bandung</h3>
                        <p>
                            <ul>
                                <li>Lab assistant coordinator of Embedded System</li>
                                <li>Lab assistant of Communication Electronics and Computer Networks 1</li>
                                <li>Lab assistant of Electric Circuit, Digital System Design, and Computer Networks 2</li>
                                <li>Deputy head of IT division at Perayaan Wisuda April ITB</li>
                                <li>Head of IT sub division at Perayaan Wisuda Oktober ITB</li>
                                <li>Best IT staff at Perayaan Wisuda Juli ITB</li>
                            </ul>
                        </p>
                    </div>
            </div>
        
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                    <div class="timeline-date">2023</div>
                    <div class="timeline-content">
                        <h3>Solution Engineer - F5 Networks</h3>
                        <p>
                            <ul>
                                <li>Acquire knowledge of Docker and Kubernetes</li>
                                <li>Implement HTTPS on the NGINX web server</li>
                                <li>Meet with F5 distributors in Indonesia</li>
                                <li>Consult with F5 system integrators in Indonesia</li>
                            </ul>
                        </p>
                    </div>
            </div>
        
        
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                    <div class="timeline-date">2024</div>
                    <div class="timeline-content">
                        <h3>Quality Assurance - Telkom Indonesia</h3>
                        <p>
                            <ul>
                                <li>Developed and executed comprehensive test plans and test cases.</li>
                                <li>Collaborated closely with teams to identify and resolve quality issues.</li>
                                <li>Learned automated testing frameworks that increased testing efficiency.</li>
                            </ul>
                        </p>
                    </div>  
            </div>

            <div class="timeline-item">
                <div class="timeline-dot"></div>
                    <div class="timeline-date">2024</div>
                    <div class="timeline-content">
                        <h3>Back End - Digistar Class by Telkom Indonesia</h3>
                        <p>
                            <ul>
                                <li>Developed and maintained back-end systems using Node.js, Express.js, and MongoDB.</li>
                                <li>Implemented secure authentication and authorization mechanisms using JWT to protect API endpoints.</li>
                                <li>Collaborated with front-end developers to integrate user-friendly interfaces with back-end services.</li>
                            </ul>
                        </p>
                    </div>  
            </div>
        </div>
    </section>
  );
}

export default Experience;
