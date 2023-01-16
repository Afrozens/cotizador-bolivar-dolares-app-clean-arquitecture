import CardBCV from "./CardBCV";
import CardDT  from "./CardDT"

const CardContainer = () => {
  return (
    <div className="h-5/6 lg:h-4/6 w-5/6 mx-auto mt-0 mb-8 p-2 lg:pt-16 absolute top-2/4 left-2/4 translate-y-[-30%] md:translate-y-[-25%] lg:translate-y-[-20%] translate-x-[-50%] flex flex-col justify-between items-center lg:flex-row bg-white rounded-md shadow-lg overflow-y-auto lg:overflow-y-hidden">
      <CardBCV />
      <CardDT />
    </div>
  );
};

export default CardContainer;
