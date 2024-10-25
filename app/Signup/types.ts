export interface FormData {
  name: string;
  phoneNumber: string;
  password: string;
  verifyPassword: string;
}

export interface InputFieldProps {
  placeholder: string;
  value: string;
  onChangeText: (value: string) => void;
  keyboardType?:
    | "default"
    | "number-pad"
    | "decimal-pad"
    | "numeric"
    | "email-address"
    | "phone-pad";
  maxLength?: number;
}

export interface PasswordFieldProps extends InputFieldProps {
  showPassword: boolean;
  togglePasswordVisibility: () => void;
}

export interface ButtonProps {
  title: string;
  onPress: () => void;
}

export interface LoginPromptProps {
  onPress: () => void;
}
