import { PlaceholderCard } from "../PlaceholderCard/PlaceholderCard";

export const CARDS_TO_SHOW = 20;

export const PlaceholderList = () => {
  const placeholderCards = Array.from({ length: CARDS_TO_SHOW }, (_, index) => (
    <PlaceholderCard key={index} />
  ));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {placeholderCards}
    </div>
  );
};
