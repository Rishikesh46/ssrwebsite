import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Section from "../components/Section";
import SurfFooter from "../components/SurfFooter";
import styles from "../styles/Home.module.css";

export default function Surfboard(props) {
  return (
    <div>
      <Navigation styles={styles} navigationLinks={props[0].navigationLinks} />
      <Header header={props[0].header} styles={styles} />
      <Section section={props[0].section} styles={styles} />
      <SurfFooter />
    </div>
  );
}
export async function getStaticProps() {
  const res = await fetch("https://raw.githubusercontent.com/Rishikesh46/surfboard/master/data/blog.json");
  const data = await res.json();
  return { props: { ...data } };
}
