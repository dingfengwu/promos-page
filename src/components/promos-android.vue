<template>
  <div class="promos-android" @click="openDownloadLink">
    <div class="main" v-if="showMain">
      <img src="../assets/image/body-bg.jpg" />

      <div class="nav">
        <img
          src="../assets/image/kill-viroid.png"
          @click="setShowKillViroidNav"
        /><br />
        <img src="../assets/image/customer-service.png" />
      </div>
    </div>

    <div class="kill-viroid-nav" v-if="showKillViroidNav">
      <div class="close" @click="closeShowKillViroidNav"></div>
      <div class="body">
        <div class="inner">
          <div
            class="item"
            v-for="(item, index) in phoneList"
            :key="index"
            @click="setShowKillViroidContent(item)"
          >
            <img :src="require('../assets/image/' + item.nav)" />
          </div>
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
import phoneList from "../assets/js/config/phone-list.js";

export default {
  data() {
    return {
      showMain: true,
      showKillViroidNav: false,
      showKillViroidContent: false,
      phoneList,
      activePhone: {},
    };
  },
  methods: {
    openDownloadLink() {
      
    },
    setShowKillViroidNav() {
      this.showKillViroidNav = true;
      this.showMain = false;
    },
    closeShowKillViroidNav() {
      this.showKillViroidNav = false;
      this.showKillViroidContent = false;
      this.showMain = true;
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
.promos-android {
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

  .kill-viroid-nav {
    // position: fixed;
    // top: 0;
    // left: 0;
    // right: 0;
    height: 100vh;
    //z-index: 2;

    .close {
      height: 90px;
      width: 100%;
      background-image: url("../assets/image/close.jpg");
      background-repeat: no-repeat;
      background-size: 100% auto;
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
