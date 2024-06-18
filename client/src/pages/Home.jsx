import { About, BestSelling, Header, Navbar, Services } from '../components';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Services />
      <About />
      <BestSelling />
    </div>
  );
};

export default Home;
