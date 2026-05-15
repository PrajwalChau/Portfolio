import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> goals
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SaaS & Tech Products</h4>
                <h5>Run SaaS business, build real-world tech products</h5>
              </div>
              <h3>Goal 1</h3>
            </div>
            <p>
              My primary goal is to run a successful SaaS business, build real-world tech products that solve actual problems, and work remotely while constantly growing as a developer.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelancing</h4>
                <h5>Start freelancing and earn online income</h5>
              </div>
              <h3>Goal 2</h3>
            </div>
            <p>
              I am aiming to start my freelancing journey, providing value to clients globally, building a strong portfolio, and generating a sustainable online income.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Remote Work</h4>
                <h5>Work remotely and achieve financial freedom</h5>
              </div>
              <h3>Goal 3</h3>
            </div>
            <p>
              I strive to work remotely on exciting and challenging projects, enabling me to achieve financial freedom and maintain a great work-life balance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
