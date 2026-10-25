import { createContext, useContext } from "react";

export interface MotionPrefs {
  reduced: boolean;
  interactive: boolean;
  showScene: boolean;
  lowPower: boolean;
}

export const MotionPrefsContext = createContext<MotionPrefs>({
  reduced: false,
  interactive: true,
  showScene: true,
  lowPower: false,
});

export function useMotionPrefs(): MotionPrefs {
  return useContext(MotionPrefsContext);
}
