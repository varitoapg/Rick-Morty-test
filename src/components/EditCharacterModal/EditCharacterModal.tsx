import React, { useState } from "react";
import { BasicCharacter } from "../../types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useAllCharacters } from "../../context/CharacterContext/CharacterContext";
import { Button } from "../common/Button/Button";

type EditCharacterModalProps = {
  character: BasicCharacter;
  onClose: () => void;
};

export const EditCharacterModal = ({
  character,
  onClose,
}: EditCharacterModalProps) => {
  const { editCharacter } = useAllCharacters();

  const [editedCharacter, setEditedCharacter] =
    useState<BasicCharacter>(character);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setEditedCharacter((prevCharacter) => ({
      ...prevCharacter,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editCharacter(character.id, editedCharacter);
    onClose();
  };

  const isDataChanged = editedCharacter !== character;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-md relative">
        <FontAwesomeIcon
          icon={faTimes}
          className="text-gray-700 absolute top-2 right-2 cursor-pointer transition-transform hover:scale-150"
          onClick={onClose}
        />
        <h3 className="text-gray-700">{`Edit ${character.name}`}</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={editedCharacter.name}
              onChange={handleChange}
              className="text-gray-700 border border-gray-300 rounded-md px-3 py-2 mt-1 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="status" className="block text-gray-700">
              Status
            </label>
            <input
              type="text"
              id="status"
              name="status"
              value={editedCharacter.status}
              onChange={handleChange}
              className="text-gray-700 border border-gray-300 rounded-md px-3 py-2 mt-1 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="location" className="block text-gray-700">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={editedCharacter.location}
              onChange={handleChange}
              className="text-gray-700 border border-gray-300 rounded-md px-3 py-2 mt-1 w-full"
            />
          </div>
          <div className="flex justify-center items-center gap-3">
            <Button
              type="submit"
              isDisabled={!isDataChanged}
              className={`${
                isDataChanged
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-grey-600 hover:bg-grey-700"
              }`}
            >
              Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
