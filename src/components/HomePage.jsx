import { Link } from "react-router";

export default function HomePage() {
  return (
    <section className="landing-bg">
      <div className="landing-box">
        <div className="landing-title-box">
          <h1 className="landing-title">Welcome To Paradise Nursery</h1>

          <div className="landing-divisor"></div>
          <p className="landing-slogan">Where Green Meets Serenity</p>
          <Link to="/products" className="landing-cta">
            Get Started
          </Link>
        </div>
        <div className="landing-description-box">
          <p className="landing-description" style={{ textAlign: "center" }}>
            Welcome to Paradise Nursery, where green meets serenity!
          </p>
          <p className="landing-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque,
            quae! Porro consequatur fugit, magnam dicta recusandae ex nihil?
            Est, vel ipsum ipsa accusantium culpa assumenda eaque quos neque
            voluptatem alias? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Esse commodi est, reiciendis voluptatibus hic dicta. Nam quam
            asperiores corrupti aut tempora repellat itaque fugiat? Voluptatum
            sit molestias ipsa iusto aspernatur.
          </p>
          <p className="landing-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque,
            quae! Porro consequatur fugit, magnam dicta recusandae ex nihil?
            Est, vel ipsum ipsa accusantium culpa assumenda eaque quos neque
            voluptatem alias? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Esse commodi est, reiciendis voluptatibus hic dicta. Nam quam
            asperiores corrupti aut tempora repellat itaque fugiat? Voluptatum
            sit molestias ipsa iusto aspernatur.
          </p>
          <p className="landing-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque,
            quae! Porro consequatur fugit, magnam dicta recusandae ex nihil?
          </p>
        </div>
      </div>
    </section>
  );
}
