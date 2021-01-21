import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Section from "../components/Section";
import Footer from "../components/Footer";
import styles from "../styles/rawengineering.module.css";

export default function Raw(props) {
  console.log(props);
  return (
    <div className={styles["raw"]}>
      <Navigation styles={styles} navigationLinks={props.data[0].navigationLinks} />
      <Header header={props.data[0].header} styles={styles} />
      <Section section={props.data[0].section} styles={styles} />
      <Footer />
    </div>
  );
}
export async function getStaticProps() {
  const res = await fetch("https://raw.githubusercontent.com/Rishikesh46/dataraw1/master/data/blog.json");
  const data = await res.json();
  return { props: { ...data } };
}
