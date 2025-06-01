import React from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function CustomAlert({
  visible,
  onClose,
  message,
  type = "success",
}: {
  visible: boolean;
  onClose: () => void;
  message: string;
  type?: "success" | "error";
}) {
  const isSuccess = type === "success";

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.alertBox}>
          <View
            style={[
              styles.iconContainer,
              isSuccess ? styles.successIcon : styles.errorIcon,
            ]}
          >
            <Text style={styles.iconText}>{isSuccess ? "✓" : "✕"}</Text>
          </View>

          <Text style={styles.alertText}>{message}</Text>

          <TouchableOpacity onPress={onClose} style={styles.alertButton}>
            <Text style={styles.buttonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "#000000aa",
    justifyContent: "center",
    alignItems: "center",
  },
  alertBox: {
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 12,
    alignItems: "center",
    width: 300,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  successIcon: {
    backgroundColor: "#34c759",
  },
  errorIcon: {
    backgroundColor: "#ff3b30",
  },
  iconText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  alertText: {
    fontSize: 16,
    marginBottom: 16,
    textAlign: "center",
    color: "#333",
  },
  alertButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
