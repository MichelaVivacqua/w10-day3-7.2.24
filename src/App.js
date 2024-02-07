import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import TVShows from "./components/TvShows";
import Content from "./components/Content";
import EditProfile from "./EditProfile";
import Setting from "./components/Setting";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";

// Invece di creare una Route per un componente TVShows e montare in questa pagina un componente a  scelta, aggiungere un Link alla pagina TVShows nella Navbar dell'applicazione, per navigarci comodamente;
// ho settato in tal modo i miei componenti extra : la pagina edit-profile, e la pagina settings

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <>
          <Route
            element={
              <>
                {" "}
                <header>
                  <MyNavbar />
                </header>
                <main style={{ backgroundColor: "#221f1f" }}>
                  <TVShows />
                  <h4 className="text-white ms-4">Trending Now</h4>
                  <Content otherFilm="Spongebob" />
                  <h4 className="text-white ms-4 mt-4">Watch it Again</h4>
                  <Content otherFilm="Winnie" />
                  <h4 className="text-white ms-4 mt-4">New Releases</h4>
                  <Content otherFilm="Winx" />
                </main>
                <MyFooter />
              </>
            }
            path="/"
          />
          <Route
            element={
              <main style={{ backgroundColor: "#221f1f" }}>
                <EditProfile />{" "}
              </main>
            }
            path="/EditProfile"
          />
          <Route
            element={
              <>
                <header>
                  <MyNavbar />
                </header>
                <main>
                  <Setting />
                </main>
              </>
            }
            path="/Setting"
          />
          <Route element={<MovieDetails />} path="/MovieDetails/:filmId" />
        </>
      </Routes>
    </BrowserRouter>
  );
}
