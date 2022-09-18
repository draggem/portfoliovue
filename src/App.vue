<template>
  <v-app>
    <div
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
      <!---ANIMATED LOGO-->
      <!-- <v-progress-circular
        style="top: 40%"
        indeterminate
        size="80"
        color="text"
      ></v-progress-circular> -->
      <v-fade-transition>
        <v-img
          src="@/assets/logo.svg"
          :width="isMobile() ? `80px` : `80px`"
          :style="
            isMobile()
              ? `
          margin: auto;
          top: 36%;
          z-index: 99;
        `
              : `
          margin: auto;
          top: 40%;
          z-index: 99;
        `
          "
          v-if="imageOn"
        ></v-img>
      </v-fade-transition>
    </div>

    <NavigationBar />

    <v-main>
      <div
        id="scrolling-techniques-4"
        :style="`height: 100vh; overflow-x: hidden; background-color: ${$vuetify.theme.themes.dark.primary}`"
        @scroll="updateProgressIndicator()"
      >
        <router-view />
        <div
          id="footer"
          style="
            width: 100vw;
            margin: auto;
            height: 50px;
            background-color: ${$vuetify.theme.themes.dark.primary};
            
          "
        >
          <v-card-text :style="`color:${$vuetify.theme.themes.dark.accent2}`"
            >That's All Folks. (for now.. Thanks for visiting!) </v-card-text
          ><span
            :style="`color:${$vuetify.theme.themes.dark.accent2}; font-size: 9px`"
            >Last Updated: September 2022</span
          >
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
      this.imageOn = true;
      setTimeout(() => {
        this.imageOn = false;
      }, 1200);
    }, 300);
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  },
  components: {
    NavigationBar,
  },
  data: () => ({
    imageOn: false,
    options: { damping: 0.04 },
    isLoading: true,
  }),
  methods: {
    isMobile() {
      return this.$vuetify.breakpoint.width < 600;
    },
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
