import { useQuery } from "react-query";
import { getData } from "../data/dolarTodayGets";

const Preloader = () => {
  const { isLoading, isError, error } = useQuery({
    queryKey: ["data"],
    queryFn: getData,
  });
  return (
    <div className={`preloader-font ${!isLoading && "opacity-0 hidden"}`}>
      <div className={isError ? "preloader-error" : "preloader"}>{isError && error}</div>
    </div>
  );
};

export default Preloader;
