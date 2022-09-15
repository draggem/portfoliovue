<template>
  <v-app>
    <v-slide-y-transition
      ><div
        v-if="isLoading"
        :style="`
          margin: auto;
          height: 100vh;
          top: 0;
          z-index: 99;
          width: 100%;
          background-color: ${$vuetify.theme.themes.dark.primary};
        `"
        class="text-center"
      >
        <v-progress-circular
          style="margin-top: 150px"
          indeterminate
          size="80"
          color="text"
        ></v-progress-circular></div
    ></v-slide-y-transition>

    <NavigationBar />

    <v-main>
      <div
        id="scrolling-techniques-4"
        style="height: 100vh; overflow-x: hidden; background-color: #5cdb95"
        @scroll="updateProgressIndicator()"
      >
        <router-view />
        <div
          id="footer"
          style="
            width: 100vw;
            margin: auto;
            height: 50px;
            background-color: goldenrod;
          "
        >
          Footer
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";
// import SmoothScrollbar from "smooth-scrollbar";
// import ProgressIndicatorComponent from "./components/ProgressIndicatorComponent.vue";

export default {
  name: "App",
  mounted() {
    // SmoothScrollbar.initAll(this.options);
    // SmoothScrollbar.updatePluginOptions("overscroll", {
    //   effect: "glow",
    // });
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  },
  components: {
    NavigationBar,
  },
  data: () => ({
    options: { damping: 0.04 },
    isLoading: true,
  }),
  methods: {
    updateProgressIndicator() {
      let doc = document.getElementById("scrolling-techniques-4");
      let windowScroll = doc.scrollTop;
      let height = doc.scrollHeight - doc.clientHeight;

      this.progressIndicator = (windowScroll / height) * 100;
    },
  },

  computed: {
    progressIndicator: {
      get() {
        return this.$store.getters["progress"];
      },
      set(val) {
        this.$store.commit("setProgress", val);
      },
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #edf5e1;
}
nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #5cdb95;
    }
  }
}

::-webkit-scrollbar {
  display: none;
}

html {
  overflow: hidden;
}

#scrolling-techniques-4 {
  scroll-behavior: smooth;
}

::-moz-selection {
  /* Code for Firefox */
  color: #090000;
  background: #574831;
}

::selection {
  color: #090000;
  background: #574831;
}
</style>
