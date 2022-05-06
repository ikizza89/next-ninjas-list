import Link from "next/link";
import styles from "../../styles/Ninjas.module.css";

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const ninjas = await response.json();

  return {
    props: {
      ninjas,
    },
  };
};

const Ninjas = ({ ninjas }) => {
  return (
    <div>
      <h1>Ninjas</h1>
      {ninjas.map((ninja) => {
        return (
          <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
            <a className={styles.single}>
              <h2>{ninja.name}</h2>
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default Ninjas;
