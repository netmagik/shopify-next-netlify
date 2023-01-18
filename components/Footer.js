export default function Footer() {

  const {ALGOLIA_API_KEY} = process.env

 const body = {
    appId: '1QQS2M2LF7',
    apiKey: '<ALGOLIA_API_KEY>',
    siteId: 'b318f5f8-b751-4aaa-94e7-c82711705cd6',
    branch: 'main',
    selector: 'div#search',
  };


  return (
    <>
      <footer>
        <section className="testimonial">
          <h2 className="banner">
          LIFE FITNESS ON DEMAND+
          </h2>
          <button className="cta">LEARN MORE</button>
        </section>
        <section className="app-footer-links">
          <ul>
            <span>CUSTOMER SUPPORT</span>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Accessibility</li>
            <li>Affiliate Program</li>
            <li>Financing</li>
          </ul>
          <ul>
            <span>PRODUCT SUPPORT</span>
            <li>FAQ</li>
            <li>Contact Us</li>
            <li>Returns & Cancellations</li>
            <li>Request Service</li>
          </ul>
          {/* <div className="newsletter">
            <h2 className="newsletter-title">Sign up for our newsletter:</h2>
            <input
              className="newsletter-input"
              type="email"
              placeholder="Enter your email"
            />
          </div> */}
           <ul>
            <span>COMPANY</span>
            <li>Life Fitness Family of Brands</li>
            <li>Careers</li>
            <li>Press Releases</li>
            <li>Privacy Policy</li>
          </ul>
        </section>
        <div className="project-credit">
          <p>
          © 2023 Life Fitness. All Rights Reserved. Life Fitness is a registered trademark.
          </p>
        </div>
      </footer>
    </>
  );
}
