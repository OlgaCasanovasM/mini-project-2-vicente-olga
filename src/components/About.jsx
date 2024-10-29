function About() {
  return (
    <section className="about-page-section">
      <div id="about-fakebnb-container">
        <h2>About us</h2>
        <p>
          <b>fakebnb</b> is an online platform dedicated exclusively to property
          rentals, designed to provide both owners and travelers with a reliable
          and comfortable experience. It allows users to list, search, and book
          temporary rental properties in various locations. Owners can manage
          their listings, set prices, and handle reservations, while tenants can
          explore a wide variety of accommodations, compare options, and make
          reservations easily and securely.
        </p>
      </div>
      <div className="collab-container">
        <div class="collaborators-title">
          <h2>Who we are</h2>
        </div>
        <div class="collaborators">
          <div id="collaborator1">
            <img
              className="photo"
              src="https://scontent.fvlc2-1.fna.fbcdn.net/v/t39.30808-6/464717672_8344471362318070_109998814544047567_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=RACRIzC99X0Q7kNvgEsburN&_nc_zt=23&_nc_ht=scontent.fvlc2-1.fna&_nc_gid=A5equxGwwmjtfM5ZptZiGtT&oh=00_AYD6i7gbg-qvwL9WTncxV5StD9jzrHx_ifNaDesnhamJNg&oe=67257628"
            />
            <h3>
              <span id="nav-f-title">V</span>
              <span id="nav-title">icente </span>
              <span id="nav-f-title">D</span>
              <span id="nav-title">uch</span>
            </h3>
            <p>
              I’m an ordinary guy from Valencia, currently I'm learning web
              development at Ironhack, I love video games, movies, drawing, and
              traveling. What I adore most in the world is my pets; right now, I
              have three cats.
            </p>
            <div className="collaborators-icons-container">
              <a href="" target="blank">
                <img
                  className="socials-icons"
                  src="src/assets/github-icon.webp"
                />
              </a>
              <a href="" target="blank">
                <img
                  className="socials-icons"
                  src="src/assets/linkedin-icon.webp"
                />
              </a>
            </div>
          </div>
          <div id="collaborator2">
            <img className="photo" src="src/assets/stuart-photo.png" />
            <h3>
              <span id="nav-f-title">O</span>
              <span id="nav-title">lga </span>
              <span id="nav-f-title">C</span>
              <span id="nav-title">asanovas</span>
            </h3>
            <p>
              I'm quite a standard mum with a passion for reading, skiing, and
              just about any sport that gets me moving! Currently, I’m diving
              into the world of web development through Ironhack and waiting to
              see where life takes me.
            </p>
            <div className="collaborators-icons-container">
              <a href="https://github.com/OlgaCasanovasM" target="blank">
                <img
                  className="socials-icons"
                  src="src/assets/github-icon.webp"
                  href=""
                />
              </a>
              <a
                href="https://www.linkedin.com/in/olga-casanovas-bb29bb89/"
                target="blank"
              >
                <img
                  className="socials-icons"
                  src="src/assets/linkedin-icon.webp"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
