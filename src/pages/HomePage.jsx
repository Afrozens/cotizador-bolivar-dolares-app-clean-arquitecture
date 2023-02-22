import CardContainer from "../components/CardContainer";

const HomePage = () => {
  return (
    <main className="h-[140vh] md:h-screen w-full mt-16 bg-gray-200 ">
      <div className="h-2/6 w-full p-2 absolute text-center bg-fond-main">
        <h1 className="my-2 sm:mt-8 text-xl sm:text-5xl font-bold tracking-[0.3rem] uppercase">
          Calcula tus bolivares
        </h1>
        <h2 className="mb-2 text-md sm:text-xl font-light tracking-[0.3rem] uppercase">
          Con las tazas mas populares
        </h2>
      </div>
      <CardContainer />
    </main>
  );
};

export default HomePage;
