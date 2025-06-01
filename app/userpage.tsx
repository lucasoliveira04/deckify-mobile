import { CustomAlert } from "@/src/components/CustomAlert";
import { FormInput } from "@/src/components/FormInput";
import { useDeck } from "@/src/hooks/useDeck";
import React, { useState } from "react";
import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function UserPage() {
  const { deck, setDeck, createDeck } = useDeck();
  const [alert, setAlert] = useState({
    visible: false,
    type: "success",
    message: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const nameDeck = deck.nameDeck;

  const handleCreateDeck = () => {
    if (createDeck()) {
      setAlert({
        visible: true,
        type: "success",
        message: "Deck criado com sucesso!",
      });
    } else {
      setAlert({
        visible: true,
        type: "error",
        message: "Algo deu errado. Tente novamente!",
      });
    }
  };

  const dismissEditing = () => {
    setIsEditing(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissEditing}>
      <SafeAreaView style={styles.container}>
        <View style={styles.inner}>
          <View>
            <View style={styles.card}>
              <Text style={styles.title}>Nome do Deck:</Text>

              {isEditing ? (
                <FormInput
                  placeholder="Digite o nome do deck"
                  value={nameDeck}
                  onChangeText={(text) => setDeck({ nameDeck: text })}
                  autoFocus
                  onBlur={() => setIsEditing(false)}
                />
              ) : (
                <TouchableOpacity onPress={() => setIsEditing(true)}>
                  <Text style={styles.deckName}>
                    {nameDeck || "Nenhum nome definido"}
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>

          <TouchableOpacity style={styles.button} onPress={handleCreateDeck}>
            <Text style={styles.buttonText}>Criar Deck</Text>
          </TouchableOpacity>
        </View>

        <CustomAlert
          visible={alert.visible}
          onClose={() => setAlert({ ...alert, visible: false })}
          message={alert.message}
          type={alert.type as "success" | "error"}
        />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#f9f9f9",
  },
  inner: {
    flex: 1,
    justifyContent: "space-between",
  },
  card: {
    marginBottom: 24,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  deckName: {
    fontSize: 18,
    color: "#555",
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
