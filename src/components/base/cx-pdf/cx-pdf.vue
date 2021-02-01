<template>
  <div class="cx-pdf">
    <div class="pop-close-bg" v-show="pdfShow" @click="closePop">
      <van-icon name="close" class="pop-close" />
    </div>
    <van-popup
      v-model="pdfShow"
      :closeable="false"
      close-icon="close"
      class="pdf-bg"
    >
      <div class="content">
        <iframe
          frameBorder="0"
          scrolling="no"
          :src="frameUrl"
          style="width: 100%; height: 100%"
          id="pdf-frame"
        ></iframe>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { Popup, Icon } from "vant";
export default {
  name: "cx-pdf",
  props: {
    pdfUrl: String,
    show: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    "van-popup": Popup,
    "van-icon": Icon,
  },
  computed: {
    frameUrl() {
      return "./pdf/generic/web/viewer.html?file=" + this.pdfUrl;
    },
  },
  data() {
    return {
      pdfShow: this.show,
    };
  },
  watch: {
    show(val) {
      this.pdfShow = val;
    },
    pdfShow(val) {
      this.$emit("update:show", val);
    },
  },
  mounted() {
  },
  methods: {
    closePop() {
      this.pdfShow = false;
    },
  },
};
</script>

<style scoped lang="less">
.cx-pdf {
  .pdf-bg {
    width: 100vw;
    height: 100vh;
    .content {
      height: 100vh;
    }
  }
  .pop-close-bg {
    position: fixed;
    right: 8px;
    top: 0;
    z-index: 9999;
    color: #fff;
    font-size: 22px;
    padding: 6px 5px 0 5px;
  }
}
</style>
