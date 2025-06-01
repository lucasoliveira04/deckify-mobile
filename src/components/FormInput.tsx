import { memo } from "react";
import { StyleProp, TextInput, TextInputProps, TextStyle } from "react-native";

interface Props extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  style?: StyleProp<TextStyle>;
}

export const FormInput = memo(
  ({ value, onChangeText, style, ...rest }: Props) => {
    return (
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={style}
        {...rest}
      />
    );
  }
);
