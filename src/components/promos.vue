<template>
  <div class="promos">
    <ios-download v-if="deviceType === 'iphone'"></ios-download>
    <android-download v-else></android-download>
  </div>
</template>

<script>
import androidDownload from "./promos-android.vue";
import iosDownload from "./promos-ios.vue";
import { getDeviceType } from "../assets/js/device.js";

export default {
  data() {
    return {
      deviceType: "",
    };
  },
  components: { androidDownload, iosDownload },
  created(){
    this.deviceType = getDeviceType();
  }
};
</script>
