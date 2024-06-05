import { CharacterList } from "../CharacterList/CharacterList";
import { Pagination } from "../Pagination/Pagination";
import { LoadingGrid } from "../LoadingGrid/LoadingGrid";
import { useState } from "react";
import { useAllCharacters } from "../../context/CharacterContext/CharacterContext";
import { Header } from "../Header/Header";
import { Switch } from "../common/Switch/Switch";
import { CharacterTable } from "../CharactersTable/CharacterTable";

function App() {
  const [viewMode, setViewMode] = useState(true);
  const { characters, isLoading, sumarizedCharacters } = useAllCharacters();

  const toggleViewMode = () => {
    setViewMode((prevMode) => !prevMode);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-500 to-black text-white">
      <div className="container mx-auto px-4 py-8">
        <Header />

        <Switch
          isChecked={viewMode}
          onChange={toggleViewMode}
          labels={["Grid", "List"]}
        />

        {isLoading ? (
          <LoadingGrid />
        ) : (
          <>
            {viewMode ? (
              <>
                <CharacterList characters={characters} />
                <Pagination />
              </>
            ) : (
              <CharacterTable characters={sumarizedCharacters} />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
