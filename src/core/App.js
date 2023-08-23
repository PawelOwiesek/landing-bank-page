import Header from "../common/Header";
import MainSection from "../common/MainSection";
import Section from "../common/Section";
import Main from "../features/Main";
import SubSection from "../features/SubSection";

function App() {
  return (
    <>
      <Header />
      <MainSection />
      <Section title="Why choose Easybank?" body={<Main />} />
      <Section title="Latest Articles" body={<SubSection />} />
    </>
  );
}

export default App;
