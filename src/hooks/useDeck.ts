import { useState } from "react";
import { DeckContextValidation } from "../validations/deckValidation/deckContextValidation";
import { DeckNameValidation } from "../validations/deckValidation/deckNameValidation";

export const useDeck = () => {
  const [deck, setDeck] = useState({
    nameDeck: "",
    contexto: "",
  });

  const createDeck = () => {
    const deckNameValidator = new DeckNameValidation();
    const deckContatextValidator = new DeckContextValidation();

    const validationNameResult = deckNameValidator.validate(
      "Nome do Deck",
      deck.nameDeck
    );

    const validationContextResult = deckContatextValidator.validate(
      "Contexto do Deck",
      deck.contexto
    );

    if (validationNameResult !== true || validationContextResult !== true) {
      return false;
    }

    setDeck({
      nameDeck: "",
      contexto: "",
    });

    return true;
  };

  return {
    deck,
    setDeck,
    createDeck,
  };
};
