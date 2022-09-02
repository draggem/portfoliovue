<template>
  <v-app>
    <v-slide-y-transition
      ><div
        v-if="isLoading"
        style="
          position: absolute;
          height: 50vh;
          top: 0;
          z-index: 99999;
          width: 100%;
          background-color: black;
        "
      ></div
    ></v-slide-y-transition>

    <NavigationBar />
    <ProgressIndicator />

    <v-main>
      <div
        data-scrollbar
        id="scrolling-techniques-4"
        style="height: 100vh; overflow-x: hidden; background-color: #2d2109"
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
import SmoothScrollbar from "smooth-scrollbar";
import ProgressIndicator from "./components/ProgressIndicator.vue";

export default {
  name: "App",
  mounted() {
    SmoothScrollbar.initAll(this.options);
    SmoothScrollbar.updatePluginOptions("overscroll", {
      effect: "glow",
    });
    // setTimeout(() => {
    //   this.isLoading = false;
    // }, 3000);
  },
  components: {
    ProgressIndicator,

    NavigationBar,
  },
  data: () => ({
    options: { damping: 0.04 },
    isLoading: false,
  }),
};
</script>

<style lang="scss">
#app {
  font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #665226;
}
nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

::-webkit-scrollbar-track {
  background: #2d2109;
  border: 3px;
}

html {
  overflow: hidden;
}
</style>
