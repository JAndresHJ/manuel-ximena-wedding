import Bridegroom from './components/Bridegroom';
import Countdown from './components/Countdown';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Gifts from './components/Gifts';
import Header from './components/Header';
import RSVP from './components/RSVP';
import Seeyou from './components/Seeyou';
import Sidebar from './components/Sidebar';
import Organization from './components/Organization';

function App() {
  return (
    <>
      <Sidebar />
      <div id='oliven-main'>
        <Header />
        <Bridegroom />
        <Countdown />
        <Gallery />
        <Organization />
        <Seeyou />
        <Gifts />
        <RSVP />
        <Footer />
      </div>
    </>
  );
}

export default App;
