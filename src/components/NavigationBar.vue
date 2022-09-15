<template>
  <div>
    <div></div>
    <div class="progress-indicator-wrapper" style="left: 0px">
      <div class="progress-indicator" :style="`width: ${progress}%`"></div>
    </div>
    <v-app-bar
      dark
      absolute
      color="rgb(92, 219, 149, 0.7)"
      elevate-on-scroll
      hide-on-scroll
      scroll-target="#scrolling-techniques-4"
      height="70"
    >
      <v-toolbar-items>
        <v-img
          src="@/assets/logo.svg"
          height="50"
          width="50"
          :class="isMobile() ? `mt-2` : `mt-2 ml-5`"
        ></v-img>
      </v-toolbar-items>
      <v-spacer></v-spacer>

      <!-- <v-toolbar-title>George Somoso</v-toolbar-title> -->
      <div v-if="!isMobile()" class="d-flex" style="width: 100%">
        <v-spacer></v-spacer>
        <div v-for="(item, i) in navList" v-bind:key="i">
          <v-card-text style="font-size: 12px" @click="goTo(item.link)">
            <span style="color: #05386b">{{ item.num + ". " }}</span>
            <v-hover v-slot="{ hover }"
              ><span
                :style="hover ? 'color: #05386B' : ''"
                class="hover-underline-animation"
                >{{ item.text }}</span
              ></v-hover
            >
          </v-card-text>
        </div>
        <v-btn
          class="mt-1"
          width="38"
          large
          outlined
          @click="openResume()"
          color="secondary"
          style="font-size: 12px"
        >
          Resume
        </v-btn>
      </div>
      <div v-else @click="drawer = !drawer" style="z-index: 20">
        <svg
          class="ham ham3"
          viewBox="0 0 100 100"
          width="60"
          onclick="this.classList.toggle('active')"
        >
          <path
            class="line top"
            d="m 70,33 h -40 c -11.092231,0 11.883874,13.496726 -3.420361,12.956839 -0.962502,-2.089471 -2.222071,-3.282996 -4.545687,-3.282996 -2.323616,0 -5.113897,2.622752 -5.113897,7.071068 0,4.448316 2.080609,7.007933 5.555839,7.007933 2.401943,0 2.96769,-1.283974 4.166879,-3.282995 2.209342,0.273823 4.031294,1.642466 5.857227,-0.252538 v -13.005715 16.288404 h 7.653568"
          />
          <path
            class="line middle"
            d="m 70,50 h -40 c -5.6862,0 -8.534259,5.373483 -8.534259,11.551069 0,7.187738 3.499166,10.922274 13.131984,10.922274 11.021777,0 7.022787,-15.773343 15.531095,-15.773343 3.268142,0 5.177031,-2.159429 5.177031,-6.7 0,-4.540571 -1.766442,-7.33533 -5.087851,-7.326157 -3.321409,0.0092 -5.771288,2.789632 -5.771288,7.326157 0,4.536525 2.478983,6.805271 5.771288,6.7"
          />
          <path
            class="line bottom"
            d="m 70,67 h -40 c 0,0 -3.680675,0.737051 -3.660714,-3.517857 0.02541,-5.415597 3.391687,-10.357143 10.982142,-10.357143 4.048418,0 17.88928,0.178572 23.482143,0.178572 0,2.563604 2.451177,3.403635 4.642857,3.392857 2.19168,-0.01078 4.373905,-1.369814 4.375,-3.392857 0.0011,-2.023043 -1.924401,-2.589191 -4.553571,-4.107143 -2.62917,-1.517952 -4.196429,-1.799562 -4.196429,-3.660714 0,-1.861153 2.442181,-3.118811 4.196429,-3.035715 1.754248,0.0831 4.375,0.890841 4.375,3.125 2.628634,0 6.160714,0.267857 6.160714,0.267857 l -0.178571,-2.946428 10.178571,0 -10.178571,0 v 6.696428 l 8.928571,0 -8.928571,0 v 7.142858 l 10.178571,0 -10.178571,0"
          />
        </svg>
      </div>
      <v-scroll-x-reverse-transition>
        <div
          v-if="drawer"
          style="
            position: absolute;
            width: 100vw;

            top: 0;
            right: 0;
            z-index: 2;
          "
        >
          <v-row style="height: 105vh">
            <v-col cols="3" style="backdrop-filter: blur(8px)"> </v-col>
            <v-col cols="9" style="background-color: #422c0a">
              <div style="width: 100%; margin-top: 200px" class="text-right">
                <div v-for="(item, i) in navList" v-bind:key="i">
                  <v-card-text
                    style="font-size: 20px"
                    @click="
                      goTo(item.link);
                      drawer = false;
                    "
                  >
                    <span
                      style="color: #ffc964"
                      class="hover-underline-animation"
                      >{{ item.text }}</span
                    >
                  </v-card-text>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-scroll-x-reverse-transition>
    </v-app-bar>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  components: {},
  methods: {
    goTo(link) {
      location.href = link;
    },
    isMobile() {
      return this.$vuetify.breakpoint.width < 600;
    },
    openResume() {
      window.open(
        "https://drive.google.com/file/d/1Q_ReG9MnDW8u6JISvLiOfOK8Xst5Vkbh/view?usp=sharing"
      );
    },
  },
  data: () => ({
    group: false,
    drawer: false,
    navList: [
      {
        num: "01",
        text: "About",
        link: "#top",
      },
      {
        num: "02",
        text: "Projects",
        link: "#proj",
      },
      {
        num: "03",
        text: "Work",
        link: "#work",
      },
      {
        num: "04",
        text: "Contact",
        link: "#contact",
      },
    ],
  }),
  watch: {
    // group() {
    //   this.drawer = false;
    // },
  },
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

  z-index: 20;
}

.ham {
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: transform 400ms;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.line {
  fill: none;
  transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
  stroke: #ffc964;
  stroke-width: 5.5;
  stroke-linecap: round;
}

.ham3 .top {
  stroke-dasharray: 40 130;
}

.ham3 .middle {
  stroke-dasharray: 40 140;
}

.ham3 .bottom {
  stroke-dasharray: 40 205;
}

.ham3.active .top {
  stroke-dasharray: 75 130;
  stroke-dashoffset: -63px;
}

.ham3.active .middle {
  stroke-dashoffset: -102px;
}

.ham3.active .bottom {
  stroke-dasharray: 110 205;
  stroke-dashoffset: -86px;
}
</style>