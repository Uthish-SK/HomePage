import React, { useEffect } from "react";
import "./Style.css";
import one from "./page.jpg";
import two from "./Signup.jpg";
import three from "./remainder.jpg";

const Main = () => {
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    let slideIndex = n; // Declare slideIndex here
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
  }

  function currentSlide(n) {
    showSlides(n);
    console.log("hii");
  }

  useEffect(() => {
    let slideIndex = 1;
    showSlides(slideIndex);
  }, []);

  return (
    <div>
      <div className="sti">
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact</a>
        <a href="#feedback">Feedback</a>
        <div className="topnav-right">
          <a href="#">Login</a>
          <a href="#">Sign-Up</a>
        </div>
      </div>
      <div className="space"></div>
      <h1>TaskForge - Your All-in-One Task Management Solution</h1>
      <h3 id="home">
        
        <div className="space"></div>Welcome to TaskForge - Unleash Your Productivity Potential</h3>
      <p>
        Embark on a transformative journey of productivity with TaskForge, the
        ultimate task management solution designed to empower individuals and
        teams. Say goodbye to chaos and hello to a streamlined, organized, and
        efficient workflow.
      </p>
      <div className="space" id="home">
        
      </div>
      
      <div className="slideshow-container">
        <div className="mySlides fade">
          <div className="numbertext">1 / 3</div>
          <img
            src={one}
            style={{ width: "600px", height: "300px" }}
            alt="Slide 1"
          />
          <div className="text">Create your tasks</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">2 / 3</div>
          <img
            src={two}
            style={{ width: "600px", height: "300px" }}
            alt="Slide 2"
          />
          <div className="text">Easy Sign-up</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">3 / 3</div>
          <img
            src={three}
            style={{ width: "600px", height: "300px" }}
            alt="Slide 3"
          />
        </div>
      </div>
      <br />

      <div style={{ textAlign: "center" }}>
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
      </div>

      <h2>Our Story</h2>

      <p>
        TaskForge was born out of a shared frustration with the limitations of
        existing task management tools. As a team of passionate individuals
        driven by the desire to make a real impact on people's lives, we set out
        to create a solution that goes beyond checkboxes and due dates.
      </p>
      <p>
        {" "}
        Our journey started with a simple question: What if managing tasks could
        be an empowering and enjoyable experience? This question fueled our
        commitment to design a platform that not only meets the practical needs
        of users but also enhances the overall quality of their work and
        personal lives.
      </p>
      <p>
        {" "}
        From countless brainstorming sessions to late-night coding marathons,
        TaskForge evolved into more than just a tool; it became a philosophy. A
        philosophy centered around the belief that everyone deserves the tools
        to unlock their full potential and achieve their goals.
      </p>

      
      <div id="about">
        <div className="space"></div>
        <h2>Why TaskForge?</h2>
        <div>
          <section>
            <h2>Our Beliefs</h2>

            <h4>User Empowerment:</h4>
            <p>
              TaskForge is designed to empower users by providing them with the
              tools they need to take control of their tasks and, by extension,
              their lives.
            </p>

            <h4>Innovation with Purpose:</h4>
            <p>
              We don't innovate for the sake of innovation; every feature added
              to TaskForge serves a purpose - to simplify, enhance, and elevate
              your productivity.
            </p>

            <h4>Community-Centric Approach:</h4>
            <p>
              TaskForge is more than a software; it's a community of individuals
              committed to supporting and uplifting each other on their
              productivity journeys.
            </p>
          </section>

          <section>
            <h2>Key Features</h2>

            <h4>Intuitive Task Management:</h4>
            <ul>
              <li>
                Effortlessly organize tasks with a drag-and-drop interface.
              </li>
              <li>
                Create folders, tags, and custom categories for a personalized
                organization system.
              </li>
            </ul>

            <h4>Collaborative Workspaces:</h4>
            <ul>
              <li>
                Enhance teamwork by creating shared workspaces for projects.
              </li>
              <li>
                Real-time collaboration features keep everyone informed and
                engaged.
              </li>
            </ul>

            <h4>Cross-Platform Accessibility:</h4>
            <ul>
              <li>
                Access your tasks on the go with seamless synchronization across
                devices.
              </li>
              <li>Desktop, tablet, or mobile - TaskForge is where you are.</li>
            </ul>

            <h4>Smart Reminders and Notifications:</h4>
            <ul>
              <li>
                Customize reminders to suit your workflow and preferences.
              </li>
              <li>Receive intelligent notifications to keep you on track.</li>
            </ul>

            <h4>Advanced Reporting and Analytics:</h4>
            <ul>
              <li>
                Gain insights into your productivity with detailed reports and
                analytics.
              </li>
              <li>
                Identify trends, track progress, and make informed decisions.
              </li>
            </ul>
          </section>
        </div>
        <div>
          <section>
            <h2>Get Started Today!</h2>
            <p>
              Ready to embark on a more organized and productive journey? Join
              TaskForge today and experience the difference.
            </p>
          </section>

          <section>
            <h3>What Our Users Say</h3>
            <blockquote>
              <p>
                "TaskForge has completely revolutionized the way I manage my
                tasks. It's intuitive, powerful, and has become an essential
                part of my daily workflow."
              </p>
            </blockquote>
          </section>
        </div>
      </div>

      <footer>
        <div id="contact">
          <div>
            <section>
              <h2>Contact Us</h2>
              <p>
                Have questions or suggestions? Our dedicated support team is
                ready to assist you. Reach out to us at:
                <a href="todolistmail23@gmail.com" style={{ color: "#FF8787 " }}>
                  <b>
                    <u>todolistmail23@gmail.com</u>
                  </b>
                </a>
                .
              </p>
            </section>
          </div>
        </div>

        <div id="feedback">
          <div className="space"></div>
          <h2>Feedback</h2>
        </div>
      </footer>
    </div>
  );
};

export default Main;
