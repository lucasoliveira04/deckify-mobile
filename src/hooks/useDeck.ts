import { useState } from "react";
import { DeckNameValidation } from "../validations/deckValidation/deckNameValidation";

export const useDeck = () => {
  const [deck, setDeck] = useState({
    nameDeck: "",
  });

  const createDeck = () => {
    const deckValidator = new DeckNameValidation();

    const validationResult = deckValidator.validate(
      "Nome do Deck",
      deck.nameDeck
    );

    if (validationResult !== true) {
      return false;
    }

    return true;
  };

  return {
    deck,
    setDeck,
    createDeck,
  };
};
