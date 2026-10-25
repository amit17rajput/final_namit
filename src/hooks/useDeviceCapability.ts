import { useEffect, useState } from "react";

export interface DeviceCapability {
  isTouch: boolean;
  hasWebGL: boolean;
  isLowPower: boolean;
}

function detectWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl2") || canvas.getContext("webgl"))
    );
  } catch {
    return false;
  }
}

export function useDeviceCapability(): DeviceCapability {
  const [capability, setCapability] = useState<DeviceCapability>({
    isTouch: false,
    hasWebGL: true,
    isLowPower: false,
  });

  useEffect(() => {
    const isTouch =
      window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window;
    const hasWebGL = detectWebGL();
    const cores = navigator.hardwareConcurrency ?? 8;
    const isLowPower = cores > 0 && cores <= 4;

    setCapability({ isTouch, hasWebGL, isLowPower });
  }, []);

  return capability;
}
