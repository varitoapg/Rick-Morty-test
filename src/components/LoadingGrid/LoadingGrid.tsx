import { PlaceholderList } from "../PlaceholderList/PlaceholderList";
import { Spinner } from "../Spinner/Spinner";

export const LoadingGrid = () => {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="text-white text-2xl font-bold flex items-center">
          <Spinner />
          <span className="ml-2">Loading...</span>
        </div>
      </div>
      <PlaceholderList />
    </>
  );
};
