<template>
  <div>
    <div class="progress-indicator-wrapper" style="left: 0px">
      <div class="progress-indicator" :style="`width: ${progress}%`"></div>
    </div>
    <v-app-bar
      dark
      absolute
      color="rgb(45, 33, 9, 0.9)"
      elevate-on-scroll
      hide-on-scroll
      scroll-target="#scrolling-techniques-4"
      height="70"
    >
      <v-toolbar-items
        ><v-img
          src="@/assets/logo.svg"
          height="50"
          width="50"
          class="mt-2 ml-5"
        ></v-img
      ></v-toolbar-items>
      <v-toolbar-title></v-toolbar-title>

      <v-spacer></v-spacer>

      <div v-for="(item, i) in navList" v-bind:key="i">
        <v-card-text style="font-size: 12px">
          <span style="color: #ffc964">{{ item.num + ". " }}</span
          ><v-hover v-slot="{ hover }"
            ><span
              :style="hover ? 'color: #ffc964' : ''"
              class="hover-underline-animation"
              >{{ item.text }}</span
            ></v-hover
          ></v-card-text
        >
      </div>
      <v-btn
        width="38"
        large
        outlined
        @click="() => {}"
        color="secondary"
        style="font-size: 12px"
      >
        Resume
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  components: {},
  data: () => ({
    navList: [
      {
        num: "01",
        text: "About",
      },
      {
        num: "02",
        text: "Experience",
      },
      {
        num: "03",
        text: "Work",
      },
      {
        num: "04",
        text: "Contact",
      },
    ],
  }),
  watch: {},
  computed: {
    progress: {
      get() {
        return this.$store.getters["progress"];
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.hover-underline-animation {
  display: inline-block;
  position: relative;
  cursor: pointer;
  color: #6f5532;
}

.hover-underline-animation:after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #ffc964;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.hover-underline-animation:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.progress-indicator-wrapper {
  position: fixed;
  height: 2px;
  background-color: rgba(255, 255, 255, 0);
  width: 100%;
  top: 0px;
  .progress-indicator {
    height: 2px;
    background: #ffc964;
  }
  z-index: 9999999999999;
}
</style>