<template>
  <v-container id="top">
    <section style="height: 100vh" class="pl-2 pr-2">
      <div :style="isMobile() ? `margin-top: 90px` : `margin-top: 60px`"></div>
      <div class="title" data-aos="fade-right">
        <h1
          :style="
            isMobile()
              ? `font-size: 2em;color: ${$vuetify.theme.themes.dark.accent2}`
              : `color: ${$vuetify.theme.themes.dark.accent2}`
          "
        >
          George Somoso,
        </h1>
        <h3 :style="`color: ${$vuetify.theme.themes.dark.accent}`">
          Software Developer
        </h3>
        <div style="position: fixed; top: 20vh; right: 0px" v-if="!isMobile()">
          <!-- <v-img width="300" height="auto" src="@/assets/logo.svg"></v-img> -->
        </div>
      </div>

      <div
        class="subtitle pt-6"
        :style="
          isMobile()
            ? `max-width: 100%; color: ${$vuetify.theme.themes.dark.accent}`
            : `color: ${$vuetify.theme.themes.dark.accent}`
        "
        data-aos="fade-left"
      >
        <p>
          I'm a full stack software developer specialising in building variety
          of software that will satisfy client needs. Most of my projects have
          been full on digital experience, such as Websites and PWA, Mobile,
          API's and more...
        </p>
      </div>
      <div
        class="pb-6 pt-12"
        :style="`color:${$vuetify.theme.themes.dark.accent2}`"
        data-aos="fade-up"
        data-aos-delay="700"
      >
        <h3>You can also visit me at</h3>
        <v-icon large color="accent2" class="pa-2" @click="openLink('linkedin')"
          >mdi-linkedin</v-icon
        >
        <v-icon large color="accent2" class="pa-2" @click="openLink('github')"
          >mdi-github</v-icon
        >

        <!-- <v-icon large color="accent2" class="pa-2" @click="() => {}"
          >mdi-codepen</v-icon
        > -->
        <v-icon large color="accent2" class="pa-2" @click="openLink('insta')"
          >mdi-instagram</v-icon
        >
        <!-- <v-icon large color="accent2" class="pa-2" @click="() => {}"
          >mdi-twitter</v-icon
        > -->
      </div>
      <v-btn
        @click="toProj()"
        outlined
        color="accent2"
        x-large
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        View My Work</v-btn
      >
    </section>

    <section id="proj" class="projects">
      <div class="pt-16"></div>
      <h1>Projects</h1>

      <v-row>
        <v-col
          v-for="(proj, i) in projects"
          v-bind:key="i"
          lg="3"
          md="4"
          sm="6"
          xs="12"
          cols="12"
        >
          <v-hover v-slot="{ hover }"
            ><v-card
              @click="openDialog(proj)"
              color="rgb(31, 40, 51, 0.5)"
              width="100%"
              height="350px"
              :class="
                hover ? `elevation-5 transition-swing` : `mt-3 transition-swing`
              "
            >
              <v-card-text style="overflow-wrap: anywhere" class="d-flex"
                ><v-icon v-if="proj.link" :color="hover ? `text` : ``" large
                  >mdi-open-in-new</v-icon
                >
                <v-icon v-else :color="hover ? `text` : ``" large
                  >mdi-book-outline</v-icon
                >
                <h2
                  class="ml-3 mt-2"
                  :style="
                    hover ? `color: ${$vuetify.theme.themes.dark.text};` : ''
                  "
                >
                  {{ proj.name }}
                </h2></v-card-text
              >
              <v-card-text
                class="mt-6"
                :style="
                  hover ? `color: ${$vuetify.theme.themes.dark.text}` : ''
                "
                >{{ proj.text }}</v-card-text
              >
            </v-card></v-hover
          >
        </v-col>
      </v-row>
    </section>

    <v-fab-transition>
      <v-btn
        v-if="progress > 0.5"
        fab
        absolute
        color="accent2"
        text
        large
        style="bottom: 0px; right: 0px; z-index: 0"
        @click="backToTop()"
        ><v-icon :style="launch ? `transform:  rotate(320deg); ` : ``">{{
          launch ? `mdi-rocket-launch` : `mdi-rocket`
        }}</v-icon>
      </v-btn>
    </v-fab-transition>
    <v-dialog v-model="open">
      <v-card
        dark
        height="100vh"
        width="100vw"
        color="secondary"
        v-if="selectedProject"
      >
        <v-card-title
          >{{ selectedProject.name }} <v-spacer></v-spacer>
          <v-btn @click="open = false" text
            ><v-icon>mdi-close</v-icon></v-btn
          ></v-card-title
        >
        <v-card-text>{{ selectedProject.text }}</v-card-text>
        <v-card-text
          >Tools <br />
          <span v-for="(item, i) in selectedProject.tools" v-bind:key="i">
            {{ item
            }}<span v-if="i < selectedProject.tools.length - 1"> -</span></span
          ></v-card-text
        >
        <a class="link" :href="`${selectedProject.link}`" target="_blank">
          <v-card-text
            v-if="selectedProject.link"
            :style="`color: ${$vuetify.theme.themes.dark.accent2}`"
            ><v-icon size="20" color="accent2">mdi-open-in-new </v-icon>
            {{ selectedProject.link }}</v-card-text
          >
        </a>

        <div class="ma-16">
          {{ selectedProject.assets[0] }}
          <video width="70%" height="300" autoplay muted>
            <source
              src="@/assets/guardex/guardex_desktop.webm"
              type="video/webm"
            />
          </video>
          <!-- <video-background
            src="@/assets/guardex/guardex_mobile.MP4"
            style="max-height: 400px; height: 100vh"
          >
            <h1 style="color: white">Hello welcome!</h1>
          </video-background> -->
        </div>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import AOS from "aos";
// import VideoBackground from "vue-responsive-video-background-player";
// @ is an alias to /src

export default {
  name: "Home",
  data: () => ({
    selectedProject: null,
    open: false,
    projects: [
      {
        name: "Farms Chicken",
        subText: "Ecommerce site integrated with other platforms.",
        text: "An Ecommerce application built for one of the biggest meat supplier in Christchurch. We also integrated their old SQL based application and also Reckon for Invoicing.",
        tools: [
          "Vue",
          "Node",
          "SQL",
          "DynamoDB (NoSQL)",
          "XML",
          "Amazon Web Services",
        ],
      },
      {
        name: "Guardex",
        text: "A Web and Mobile system for managing security sites, guards and producing reports and timesheet.",
        tools: [
          "Vue",
          "Service Workers",
          "MongoDB",
          "Capacitor (Mobile)",
          "Node",
          "Docker",
        ],
        assets: [
          "@/assets/guardex/guardex_desktop.webm",
          "@/assets/guardex/guardex_mobile.mp4",
        ],
      },
      {
        name: "CanIT System",
        text: "A full ticketing, tracking and invoicing system full of features to autonomate hardware repair information.",
        tools: ["Vue", "Amazon Web Services", "Windcave API"],
      },
      {
        name: "Selfserv",
        text: "A full platform for restaurants and cafes. Includes self-ordering kiosk, staff POS system and super admin management.",
        tools: ["Vue", "Amazon Web Services"],
      },
      {
        name: "Wigram Clouds",
        text: "A vape shop ecommerce site.",
        tools: ["Vue", "Amazon Web Services", "Stripe"],
        link: "https://www.wigramclouds.co.nz",
      },
      {
        name: "RMM",
        text: "A static site for motel business with a basic CMS.",
        tools: ["Vue", "Amazon Web Services"],
        link: "https://www.rmm.co.nz",
      },
      {
        name: "Java Payroll",
        text: "The quick brown fox jumps over the lazy dog.",
        tools: ["Java", "SQL"],
      },
      {
        name: "Java Ufly",
        text: "The quick brown fox jumps over the lazy dog.",
        tools: ["Java", "SQL"],
      },
      {
        name: "Java Calculator",
        text: "The quick brown fox jumps over the lazy dog.",
        tools: ["Java", "SQL"],
      },
    ],
    launch: false,
  }),
  mounted() {
    setTimeout(() => {
      AOS.init({ duration: 1200 });
    }, 2100);
  },
  methods: {
    isMobile() {
      return this.$vuetify.breakpoint.width < 600;
    },
    openDialog(param) {
      if (param.link) {
        window.open(param.link);
      } else {
        this.selectedProject = param;
        this.open = true;
      }
    },
    openLink(socialNet) {
      switch (socialNet) {
        case "linkedin":
          window.open("https://www.linkedin.com/in/george-somoso-886409175/");
          break;

        case "insta":
          window.open("https://instagram.com/draggem_");
          break;

        case "github":
          window.open("https://www.github.com/draggem");
          break;

        default:
          break;
      }
    },
    toProj() {
      location.href = "#proj";
    },
    backToTop() {
      this.launch = true;
      let doc = document.getElementById("scrolling-techniques-4");
      doc.scrollTo = (0, 0);

      location.href = "#top";

      setTimeout(() => {
        this.launch = false;
      }, 1000);
    },
  },
  components: {
    // VideoBackground,
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
.title {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  line-height: normal;
}
.title h1 {
  font-size: 6vw;
}
// .title h3 {
//   font-size: 6vw;
// }

.subtitle {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  max-width: 50vw;
}
.subtitle p {
  font-size: 1.2em;
}

.link {
  text-decoration: none;
}
</style>