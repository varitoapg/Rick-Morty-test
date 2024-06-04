import { useState } from "react";
import { BasicCharacter } from "../../types/types";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { changeColourTextByLocation } from "../../utils/uiUtils/changeColourTextByLocation/changeColourTextByLocation";
import { changeBackgroundByStatus } from "../../utils/uiUtils/changeBackgroundByStatus.test/changeBackgroundByStatus";
import { Button } from "../common/Button/Button";
import { EditCharacterModal } from "../EditCharacterModal/EditCharacterModal";

export const CharacterCard = ({ character }: { character: BasicCharacter }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const textColor = changeColourTextByLocation(
    character.status,
    character.location
  );

  const backgroundColor = changeBackgroundByStatus(
    character.status,
    character.location
  );

  const handleButtonClick = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div
      className={`border  border-gray-800  rounded-lg p-4 shadow-md ${backgroundColor}`}
    >
      <div className="flex items-center justify-between mb-2">
        <h2 className={`text-xl ${textColor} font-semibold`}>
          {character.name}
        </h2>
        <Button
          onClick={handleButtonClick}
          aria-label="edit character"
          className={`p-2 text-sm ${textColor} bg-transparent hover:bg-gray-800 hover:text-white rounded-full transition-colors duration-300 ease-in-out`}
        >
          <FontAwesomeIcon
            icon={faEdit}
            className="text-sm"
            aria-label="edit character"
          />
        </Button>
      </div>
      <p className={`${textColor}`}>
        <strong>Status:</strong> {character.status}
      </p>
      <p className={`${textColor}`}>
        <strong>Location:</strong> {character.location}
      </p>

      {isPopupOpen && (
        <EditCharacterModal character={character} onClose={handleButtonClick} />
      )}
    </div>
  );
};
