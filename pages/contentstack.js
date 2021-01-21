import Navigation from "../components/Navigation";
import Header from "../components/Header";
import ContSection from "../components/ContSection";
import Footer from "../components/Footer";
import styles from "../styles/contenstack.module.css";

export default function CS({ data }) {
  return (
    <div>
      <Navigation styles={styles} navigationLinks={data[0].navigationLinks} />
      <Header header={data[0].header} styles={styles} />
      <ContSection section={data[0].section} styles={styles} />
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://raw.githubusercontent.com/Rishikesh46/dataraw1/master/data/contenstack.json");
  const data = await res.json();
  return { props: { ...data } };
}
