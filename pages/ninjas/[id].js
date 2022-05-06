export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const ninjas = await response.json();

  const paths = ninjas.map((ninja) => ({ params: { id: ninja.id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const id = params.id;
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const ninja = await response.json();

  return {
    props: {
      ninja,
    },
  };
};

const NinjaDetails = ({ ninja }) => {
  return (
    <div>
      <h1>{ninja.name}</h1>
      <p>{ninja.email}</p>
      <p>{ninja.website}</p>
      <p>{ninja.address.city}</p>
    </div>
  );
};

export default NinjaDetails;
