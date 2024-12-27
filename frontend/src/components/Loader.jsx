// This is a React functional component called "Loader" that displays a spinning loader animation.
// It uses Tailwind CSS for styling to create a rounded, spinning circle with a pink border on the top.

const Loader = () => {
  return (
    <div className=" animate-spin rounded-full h-[100px] w-16 border-t-4 border-pink-500 border-opacity-50"></div>
  );
};
export default Loader;
