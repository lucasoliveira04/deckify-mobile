import axios from "axios";

type GenerateFlashCardProps = {
  context?: string;
  quantityTasks?: number;
};

const generateFlashcards = async ({
  context,
  quantityTasks,
}: GenerateFlashCardProps) => {
  try {
    const response = await axios.post(
      "https://api-dackify-ia-1.onrender.com/api/generate_quests",
      {
        context: context || "Nenhum contexto fornecido",
        quantidade_tasks: quantityTasks || 1,
      }
    );

    console.log("Flashcards generated successfully:", response.data);
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.error("Erro na resposta da API:", error.response.data);
    } else if (error instanceof Error) {
      console.error("Erro na requisição:", error.message);
    } else {
      console.error("Erro desconhecido:", error);
    }
  }
};

export default generateFlashcards;
