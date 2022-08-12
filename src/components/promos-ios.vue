<template>
  <div class="promos-ios">
    <div class="main" @click="showDownloadDialog = true">
      <img src="../assets/image/body-bg.png" />

      <div class="nav">
        <img
          src="../assets/image/install.png"
          @click.stop="showInstallTips = true"
        /><br />
        <img
          src="../assets/image/customer-service.png"
          @click.stop="openCustomerService"
        /><br/>
         <img
          src="../assets/image/time-chat.png"
          @click.stop="openTimechatUrl"
        />
      </div>
    </div>

    <div class="install-tips-nav" v-if="showInstallTips">
      <div class="close" @click="showInstallTips = false"></div>
      <div class="body">
        <div class="inner">
          <img
            :src="require('../assets/image/' + item)"
            v-for="(item, index) in ruleList"
            :key="index"
          />
        </div>
      </div>
      <div class="operation" @click="showDownloadDialog = true">
        <img src="../assets/image/rule-xr.png" />
      </div>
    </div>

    <div class="download-dialog" v-if="showDownloadDialog">
      <div class="mask"></div>
      <div class="body">
        <div class="close" @click="showDownloadDialog = false"></div>
        <div class="logo">
          <img src="/static/logo.png" />
        </div>
        <div class="download download1" @click="openDownloadLink"></div>
        <div class="download download2" @click="openDownloadLink"></div>
      </div>
    </div>
  </div>
</template>

<script>
import ruleList from "../assets/js/config/rules.js";
import { openUrlInNewWindow } from "../assets/js/util";
import { appConfig } from "../assets/js/config/static";

export default {
  data() {
    return {
      showInstallTips: false,
      showDownloadDialog: false,
      ruleList,
      activePhone: {},
    };
  },
  methods: {
    openTimechatUrl() {
      openUrlInNewWindow(appConfig.timechatDownloadUrl);
    },
    openDownloadLink() {
      openUrlInNewWindow(appConfig.iosAppDownloadUrl);
    },
    openCustomerService() {
      openUrlInNewWindow(appConfig.customerServiceUrl);
    },
  },
};
</script>

<style lang="scss" scoped>
.promos-ios {
  height: 100%;
  overflow-y: auto;
  max-width: 720px;
  background-color: #000;
  margin: 0 auto;

  img {
    width: 100%;
  }

  .nav {
    position: fixed;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;

    img {
      width: 50px;
      margin-top: 20px;
    }
  }

  .install-tips-nav {
    position: fixed;
    top: 50%;
    left: 15px;
    right: 15px;
    height: 400px;
    z-index: 2;
    transform: translateY(-50%);

    .close {
      background-image: url("../assets/image/close-btn-ios.png");
      background-repeat: no-repeat;
      height: 40px;
      width: 40px;
      position: absolute;
      right: 2px;
      top: 2px;
      background-size: cover;
      z-index: 100;
    }

    .body {
      height: 400px;
      background-image: url("../assets/image/rule-bg.png");
      background-repeat: no-repeat;
      background-size: 100% auto;
      background-color: #fff;
      padding: 60px 10px 35px 10px;
      box-sizing: border-box;

      .inner {
        overflow-y: auto;
        height: 100%;
        line-height: 0;

        img {
          width: 100%;
        }
      }
    }
    .operation {
      position: absolute;
      bottom: 5px;
      right: 10px;
      line-height: 0;

      img {
        width: 80px;
      }
    }
  }

  .download-dialog {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    min-height: 100vh;
    z-index: 999;

    .mask {
      position: absolute;
      background-color: rgba($color: #000000, $alpha: 0.6);
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }

    .body {
      background-color: #fff;
      padding: 20px;
      margin: 0 auto;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 10px;

      .close {
        height: 25px;
        width: 25px;
        background-image: url("../assets/image/close.png");
        background-repeat: no-repeat;
        background-size: 100% auto;
        position: absolute;
        right: 5px;
        top: 5px;
      }

      .logo {
        padding: 20px 60px 30px 60px;

        img {
          width: 100px;
        }
      }

      .download {
        height: 60px;
        background-size: cover;

        &.download1 {
          background-image: url("../assets/image/button_03.png");
          margin-bottom: 10px;
        }
        &.download2 {
          background-image: url("../assets/image/button_04.png");
        }
      }
    }
  }
}
</style>
