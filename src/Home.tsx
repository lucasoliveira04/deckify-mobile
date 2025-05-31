import { useState } from "react";
import { Text, TextInput, View } from "react-native";

export function Home() {
  const [deckData, setDeclName] = useState({
    nameDeck: "",
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>DeckIfy</Text>
      </View>

      <View style={styles.deckNameContainer}>
        <Text style={styles.deckName}>{deckData.nameDeck}</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          placeholderTextColor="#999"
          onChangeText={(text) => setDeclName({ ...deckData, nameDeck: text })}
        />
      </View>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: 60,
    width: "100%",
    backgroundColor: "#90ee90",
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  form: {
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: "#333",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    fontSize: 16,
    color: "#000",
  },
  deckName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    paddingVertical: 12,
  },
  deckNameContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
};
