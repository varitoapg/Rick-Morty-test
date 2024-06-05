import { useAllCharacters } from "../../context/CharacterContext/CharacterContext";
import { Button } from "../common/Button/Button";

export const Pagination = () => {
  const { currentPage, goToPage, nextPage, previousPage } = useAllCharacters();

  const goToNextPage = () => {
    if (nextPage) {
      const nextPageNumber = (currentPage ?? 1) + 1;
      goToPage(nextPageNumber);
    }
  };

  const goToPreviousPage = () => {
    if (previousPage) {
      const prevPageNumber = (currentPage ?? 1) - 1;
      goToPage(prevPageNumber);
    }
  };

  return (
    <div className="mt-8 mr-7 flex justify-center items-center">
      <Button
        onClick={goToPreviousPage}
        isDisabled={!previousPage}
        className={`bg-green-700 hover:bg-green-800 hover:text-white rounded-full transition-colors duration-300 ease-in-out`}
      >
        Previous page
      </Button>
      <span className="text-lg mx-2">{`${currentPage ?? 1}`}</span>
      <Button
        onClick={goToNextPage}
        isDisabled={!nextPage}
        className={`bg-green-700 hover:bg-green-800 hover:text-white rounded-full transition-colors duration-300 ease-in-out`}
      >
        Next page
      </Button>
    </div>
  );
};
