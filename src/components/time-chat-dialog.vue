<template>
  <div class="time-chat-dialog" v-show="visible">
    <div class="mask"></div>
    <div class="body">
      <div class="close" @click="close">
        <img src="../assets/image/close.png" />
      </div>
      <img src="../assets/image/time-chat-detail.jpg" />
      <div class="operation">
        <img
          src="../assets/image/ios-download-btn.png"
          @click="openTimechatUrl"
        />
        <img
          src="../assets/image/android-download-btn.png"
          @click="openTimechatUrl"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { openUrlInNewWindow } from "../assets/js/util";
import { appConfig } from "../assets/js/config/static";

export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    close() {
      this.$emit("update:visible", false);
    },
    openTimechatUrl() {
      openUrlInNewWindow(appConfig.timechatDownloadUrl);
    },
  },
};
</script>

<style lang="scss" scoped>
.time-chat-dialog {
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 2;

  .mask{
    background-color: rgba($color: #000000, $alpha: 0.9);
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 3;
  }

  .body {
    position: absolute;
    width: 90%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-height: 50vh;
    margin: 0 auto;
    z-index: 4;

    > img {
      width: 100%;
      border-radius: 5px;
    }

    .close {
      position: absolute;
      top: -10px;
      right: -10px;
      z-index: 9999;

      img {
        height: 20px;
      }
    }

    .operation {
      position: absolute;
      bottom: 15px;
      left: 0;
      right: 0;
      height: 50px;
      text-align: center;

      img {
        width: 140px;

        &:last-child {
          margin-left: 20px;
        }
      }
    }
  }
}
</style>