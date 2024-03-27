import { Link } from "react-router-dom";


import { Button, Header } from "@/components";

const HomePageTemplate = () => {
  return (
    <main className="home">
      <Header />

      <section className="home-section">
        <div className="home-content">
          <p className="home-trend">Write your  planning and budgeting for your future</p>
          <Link to={'/register'}>
            <Button className="home-button">Get Started</Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HomePageTemplate;
