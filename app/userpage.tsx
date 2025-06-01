import { CustomAlert } from "@/src/components/CustomAlert";
import { FormInput } from "@/src/components/FormInput";
import { useDeck } from "@/src/hooks/useDeck";
import { styles } from "@/src/screens/UserPage.styles";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import React, { useRef, useState } from "react";
import {
  Animated,
  Easing,
  Keyboard,
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
  const [isShowButtonAI, setIsShowButtonAI] = useState(true);

  const nameDeck = deck.nameDeck;
  const contextoDeck = deck.contexto;


  const contextAnim = useRef(new Animated.Value(0)).current;

  const toggleButtonAI = () => {
    const toValue = isShowButtonAI ? 1 : 0;

    Animated.timing(contextAnim, {
      toValue,
      duration: 300,
      useNativeDriver: false,
      easing: Easing.out(Easing.ease),
    }).start();

    setIsShowButtonAI((prev) => !prev);
  };

  const contextHeight = contextAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 300],
  });

  const handleCreateDeck = () => {
    if (createDeck()) {
      setAlert({
        visible: true,
        type: "success",
        message: "Deck criado com sucesso!",
      });
      return;
    }

    setAlert({
      visible: true,
      type: "error",
      message: "Algo deu errado. Tente novamente!",
    });
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
                  onChangeText={(text) =>
                    setDeck((prev) => ({ ...prev, nameDeck: text }))
                  }
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

            {isShowButtonAI && (
              <TouchableOpacity
                style={styles.buttonIconContainer}
                onPress={toggleButtonAI}
              >
                <Text style={styles.buttonIconText}>Usar IA</Text>
                <Icon name="brain" size={24} color="#333" style={styles.icon} />
              </TouchableOpacity>
            )}

            <Animated.View
              style={{
                height: contextHeight,
                overflow: "hidden",
              }}
            >
              {!isShowButtonAI && (
                <View>
                  <View style={styles.buttonAIContainer}>
                    <Text style={styles.title}>Contexto</Text>
                    <TouchableOpacity onPress={toggleButtonAI}>
                      <Icon name="chevron-up" size={24} color="#000" />
                    </TouchableOpacity>
                  </View>

                  <FormInput
                    placeholder="Digite o contexto do deck"
                    value={contextoDeck}
                    onChangeText={(text) =>
                      setDeck((prev) => ({ ...prev, contexto: text }))
                    }
                    multiline
                    style={styles.textArea}
                  />
                </View>
              )}
            </Animated.View>
          </View>

          <View>
            <TouchableOpacity style={styles.button} onPress={handleCreateDeck}>
              <Text style={styles.buttonText}>Criar Deck</Text>
            </TouchableOpacity>
          </View>
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
