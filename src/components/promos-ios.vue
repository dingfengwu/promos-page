<template>
  <div class="promos-ios" @click="openDownloadLink">
    <div class="main">
      <img src="../assets/image/body-bg.jpg" />

      <div class="nav">
        <img
          src="../assets/image/install.png"
          @click="showInstallTips=true"
        /><br />
        <img src="../assets/image/customer-service.png" />
      </div>
    </div>

    <div class="install-tips-nav" v-if="showInstallTips">
      <div class="close" @click="showInstallTips=false"></div>
      <div class="body">
        <div class="inner">
          <img :src="require('../assets/image/'+item)" v-for="(item,index) in ruleList" :key="index"/>
        </div>
      </div>
    </div>

    <div class="kill-viroid-content" v-if="showKillViroidContent">
      <div class="close" @click="closeShowKillViroidNav"></div>
      <div class="close-btn" @click="closeShowKillViroidContent">
        <img src="../assets/image/close-btn.png" />
      </div>
      <div class="body">
        <img :src="require('../assets/image/' + activePhone.content)" />
      </div>
    </div>
  </div>
</template>

<script>
import ruleList from "../assets/js/config/rules.js";

export default {
  data() {
    return {
      showInstallTips: false,
      showKillViroidContent: false,
      ruleList,
      activePhone: {},
    };
  },
  methods: {
    openDownloadLink() {
      
    },
    setShowKillViroidContent(item) {
      this.activePhone = item;
      this.showKillViroidContent = true;
      this.showKillViroidNav = false;
    },
    closeShowKillViroidContent(){
      this.showKillViroidContent=false;
       this.showKillViroidNav = true;
    }
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
     left: 0;
     right: 0;
     height: 50vh;
     z-index: 2;
     transform: translateY(-50%);
     
    .close {
      background-image: url("../assets/image/close-btn-ios.png");
      background-repeat: no-repeat;
      height: 30px;
      width: 30px;
    }

    .body {
      width: 100%;
      height: 700px;
      background-image: url("../assets/image/main.jpg");
      background-repeat: no-repeat;
      background-size: 100% auto;

      .inner {
        width: 260px;
        margin: 0 auto;
        padding-top: 180px;

        .item {
          margin-bottom: 15px;

          img {
            width: 100%;
          }
        }
      }
    }
  }

  .kill-viroid-content {
    // position: fixed;
    // top: 90px;
    // left: 0;
    // right: 0;
    min-height: 100vh;
    // z-index: 3;

    .close {
      height: 90px;
      width: 100%;
      background-image: url("../assets/image/close.jpg");
      background-repeat: no-repeat;
      background-size: 100% auto;
    }

    .close-btn {
      text-align: right;
      position: absolute;
      top: 100px;
      right: 10px;

      img {
        width: 20px;
      }
    }
  }
}
</style>
