<template>
  <div class="progress-indicator-wrapper">
    <div class="progress-indicator"></div>
  </div>
</template>


<script>
export default {
  name: "ProgressIndicator",
  data() {
    return {
      progress: "0%",
    };
  },
  watch: {
    $route(/* to, from */) {
      this.updateProgressIndicator();
    },
    scrollTest: function (val) {
      console.log(val);
    },
  },

  computed: {},
  methods: {
    updateProgressIndicator() {
      const { documentElement, body } = document;
      let windowScroll = body.scrollTop || documentElement.scrollTop;
      let height = documentElement.scrollHeight - documentElement.clientHeight;
      console.log(windowScroll);
      console.log(height);
      this.progress = (windowScroll / height) * 100 + "%";
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateProgressIndicator());
  },
};
</script>

<style lang="scss" scoped>
.progress-indicator-wrapper {
  position: fixed;
  height: 5px;
  background-color: #eee;
  width: 100%;
  top: 60px;
  .progress-indicator {
    height: 5px;
    background: blue;
  }
  z-index: 9999999999999;
}
</style>