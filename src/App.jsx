import Accueil from "./views/accueil/accueil";
import Header from "./components/Header/header";
import NotreApplication from "./views/notre-appli/notre-application";
import { Route, Routes } from "react-router-dom";
import APropos from "./views/a-propos/APropos";
import Faq from "./views/faq/faq";
import Contact from "./views/contact/contact";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/notre-application" element={<NotreApplication />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
