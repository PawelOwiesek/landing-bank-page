import Header from "../common/Header";
import MainSection from "../common/MainSection";
import Section from "../common/Section";
import Main from "../features/Main";

function App() {
  return (
    <>
      <Header />
      <MainSection />
      <Section title="Why choose Easybank?" body={<Main />} />
    </>
  );
}

export default App;
