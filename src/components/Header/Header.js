import React, { useEffect } from 'react';
import "./Header.css";

function Header() {
  useEffect(() => {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    const handleScroll = () => {
      sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
          navLinks.forEach((link) => {
            link.classList.remove('active');
            let activeLink = document.querySelector(`header nav a[href*=${id}]`);
            if (activeLink) {
              activeLink.classList.add('active');
            }
          });
        }
      });
    };

    const handleMenuClick = () => {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
    };

    window.addEventListener('scroll', handleScroll);
    menuIcon.addEventListener('click', handleMenuClick);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      menuIcon.removeEventListener('click', handleMenuClick);
    };
  }, []);

  return (
    <header className="header">
      <a href="#home" className="logo">
        <span>Lutfi Razan</span>
      </a>
      <i className="bx bx-menu" id="menu-icon"></i>

      <nav className="navbar">
        <a href="#home" className="active">Home</a>
        <a href="#experience">Experience</a>
        <a href="#project">Project</a>
        <a href="#testimonial">Testimonial</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
