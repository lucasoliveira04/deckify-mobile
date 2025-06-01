import { router } from "expo-router";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Page() {
  let dateNow = new Date().getFullYear();
  const version = "v1.0";

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}>Deckify</Text>

      <View style={styles.content}>
        <Text style={styles.title}>
          Agora a IA pode automatizar seus estudos
        </Text>
        <Text style={styles.subtitle}>
          Crie seus Flashcards com auxílio da IA
        </Text>

        <TouchableOpacity
          style={styles.greenButton}
          onPress={(e) => router.push("/userpage")}
        >
          <Text style={styles.greenButtonText}>CRIAR FLASHCARDS</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          {version} • © {dateNow} Deckify
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    padding: 20,
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#27c93f",
    marginBottom: 30,
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "900",
    color: "#0c0c0c",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#5a5a5a",
    marginBottom: 20,
  },
  greenButton: {
    backgroundColor: "#27c93f",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  greenButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  testBox: {
    backgroundColor: "#f1fdfb",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginTop: 40,
  },
  testText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  testButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  blueButton: {
    backgroundColor: "#2563eb",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  grayButton: {
    backgroundColor: "#d1d5db",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  footer: {
    alignItems: "center",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "#e0e0e0",
  },

  footerText: {
    fontSize: 12,
    color: "#9e9e9e",
  },
});
