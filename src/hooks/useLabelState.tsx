import { useState, useDebugValue } from "react";
type UseLabelReturnType<T> = [T, React.Dispatch<React.SetStateAction<T>>];

const useLabelState = <T,>(
  initialValue: T,
  label: string
): UseLabelReturnType<T> => {
  const [value, setValue] = useState(initialValue);
  useDebugValue(`${label}: ${value}`);
  return [value, setValue];
};
export default useLabelState;
