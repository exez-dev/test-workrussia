import Filters from "../components/Filters/Filters";
import Header from "../components/Header/Header";
import Layout from "../components/Layout/Layout";
import VacanciesList from "../components/VacanciesList/VacanciesList";

function App() {
  return (
    <Layout>
      <Header />
      <main>
        <Filters />
        <VacanciesList />
      </main>
    </Layout>
  );
}

export default App;
