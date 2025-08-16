import { DEVICE_TYPES } from "@/Constants";
import { makeAutoObservable } from "mobx";

class DeviceStore {
  deviceType: string = DEVICE_TYPES.DESKTOP;

  constructor() {
    makeAutoObservable(this);
    this.update(); // initialize
    window.addEventListener("resize", this.update);
    window.addEventListener("orientationchange", this.update);
  }

  private update = () => {
    const width = window.innerWidth;
    const isPortrait = window.matchMedia("(orientation: portrait)").matches;

    if (width < 768) {
      this.deviceType = DEVICE_TYPES.MOBILE;
    } else if (width <= 1024) {
      this.deviceType = isPortrait
        ? DEVICE_TYPES.TABLET_PORTRAIT
        : DEVICE_TYPES.TABLET_LANDSCAPE;
    } else {
      this.deviceType = DEVICE_TYPES.DESKTOP;
    }
  };

  get isMobile() {
    return this.deviceType === DEVICE_TYPES.MOBILE;
  }

  get isTabletPortrait() {
    return this.deviceType === DEVICE_TYPES.TABLET_PORTRAIT;
  }

  get isTabletLandscape() {
    return this.deviceType === DEVICE_TYPES.TABLET_LANDSCAPE;
  }

  get isDesktop() {
    return this.deviceType === DEVICE_TYPES.DESKTOP;
  }

  dispose() {
    window.removeEventListener("resize", this.update);
    window.removeEventListener("orientationchange", this.update);
  }
}

export const deviceStore = new DeviceStore();
