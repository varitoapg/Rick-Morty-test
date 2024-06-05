export const PlaceholderCard = () => {
  return (
    <div className={`border border-gray-800 rounded-lg p-4 shadow-md flex-col`}>
      <div
        className={`bg-gray-300 rounded h-6 w-2/3 mb-3`}
        data-testid="placeholder-block"
      />
      <div
        className={`bg-gray-300 rounded h-6 w-1/3 mb-3`}
        data-testid="placeholder-block"
      />
      <div
        className={`bg-gray-300 rounded h-6 w-2/3 mb-3`}
        data-testid="placeholder-block"
      />
    </div>
  );
};
