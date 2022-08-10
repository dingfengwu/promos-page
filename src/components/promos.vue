<template>
  <div class="promos">
    <ios-download v-if="deviceType === 'iphone'"></ios-download>
    <android-download v-else></android-download>
  </div>
</template>

<script lang="ts">
import androidDownload from "./promos-android.vue";
import iosDownload from "./promos-ios.vue";
//import { getDeviceType } from "../common/js/device.js";
import {onMounted} from "vue";

export default {
  data() {
    return {
      deviceType: "",
    };
  },
  components: { androidDownload, iosDownload },
  mounted(){
    console.log("========================");
  },
  setup(){
    console.log("sssss5555555555");
    onMounted(()=>{
      console.log("sss");
      //this.deviceType = getDeviceType();
      //console.log(this.deviceType);
    })
  }
};
</script>
