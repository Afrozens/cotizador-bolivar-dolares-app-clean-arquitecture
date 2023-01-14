import CardContainer from "./CardContainer";

const Main = () => {
  return (
    <main className="h-screen w-full mt-16 bg-gray-200 ">
      <div className="h-2/6 w-full absolute text-center bg-fond-main">
      <h1 className="my-4 sm:mt-8 text-xl sm:text-3xl font-bold tracking-[0.3rem] uppercase">
          Calcula tus bolivares
        </h1>
        <h2 className="mb-2 text-md sm:text-lg font-light tracking-[0.3rem] uppercase">Con las tazas mas populares</h2>
      </div>
      <CardContainer />
    </main>
  );
};

export default Main;
