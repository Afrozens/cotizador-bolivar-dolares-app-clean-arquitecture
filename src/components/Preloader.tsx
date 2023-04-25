type PropTypes = {
    isLoading: boolean,
    isError: boolean,
    error: any
}

const Preloader = ({isLoading, isError, error}: PropTypes) => {
    return (
      <div className={`preloader-font ${!isLoading && "opacity-0 hidden"}`}>
        <div className={isError ? "preloader-error" : "preloader"}>{isError && error}</div>
      </div>
    );
  };
  
  export default Preloader;