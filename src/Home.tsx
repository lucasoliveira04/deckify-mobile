import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Button, Text, TextInput, View } from "react-native";

export default function Home() {
  const router = useRouter();

  const [deckData, setDeckName] = useState({
    nameDeck: "",
  });

  const handleCreateDeck = () => {
    const name = deckData.nameDeck.trim();

    if (name.length < 3) {
      Alert.alert("Erro", "O nome deve ter pelo menos 3 caracteres.");
      return;
    }

    if (name.length > 20) {
      Alert.alert("Erro", "O nome deve ter no máximo 20 caracteres.");
      return;
    }

    Alert.alert("Sucesso", `Deck "${name}" criado com sucesso!`);
    setDeckName({ nameDeck: "" });

    router.push("/userpage");
  };

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
          placeholder="Digite o nome do deck"
          placeholderTextColor="#999"
          value={deckData.nameDeck}
          onChangeText={(text) => setDeckName({ ...deckData, nameDeck: text })}
        />
      </View>

      <View style={{ paddingHorizontal: 16, marginTop: 16 }}>
        <Button title="Criar Deck" onPress={handleCreateDeck} />
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
    backgroundColor: "#90ee90",
    justifyContent: "center" as "center",
    alignItems: "center" as "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold" as "bold",
    color: "#fff",
  },
  deckNameContainer: {
    alignItems: "center" as "center",
    justifyContent: "center" as "center",
  },
  deckName: {
    fontSize: 16,
    fontWeight: "bold" as "bold",
    color: "#000",
    paddingVertical: 12,
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
};
