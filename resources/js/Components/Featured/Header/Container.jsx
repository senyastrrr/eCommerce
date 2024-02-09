const Container = ({ children }) => {
    return (
      <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full mx-auto w-full max-w-7xl">
        {children}
      </div>
    );
  };
  
export default Container;