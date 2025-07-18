import Banner from "./components/Banner";
import BirthdayPals from "./components/birthdayPals/BirthdayPals";
import Pokedex from "./components/pokedex/Pokedex";
import Review from "./Review";



function App() {
  return (
    <>
      <div className="bg-slate-950 mx-auto text-center py-4">
        <h1 className="text-slate-300 text-6xl">
          Journey to Fullstack Projects
        </h1>
        <BirthdayPals />
        <Pokedex />
        <Banner />
      </div>
    </>
  );
}

export default App;
