<template>
  <v-container id="top">
    <section style="height: 100vh" class="pl-2 pr-2">
      <div :style="isMobile() ? `margin-top: 90px` : `margin-top: 60px`"></div>
      <div class="title">
        <h1
          :style="
            isMobile() ? `font-size: 2em;color: #ffc964` : `color: #ffc964`
          "
        >
          George Somoso.
        </h1>
        <h3 :style="isMobile() ? `font-size: 2em` : ``">
          I build things for the web.
        </h3>
      </div>

      <div class="subtitle pt-6" :style="isMobile() ? 'max-width: 100%' : ''">
        <p>
          I'm a full stack software developer specialising in building variety
          of software that will satisfy client needs. Most of my projects have
          been full on digital experience, such as Websites and PWA, Mobile,
          API's and more...
        </p>
      </div>
      <div class="pb-6">
        <h3>You can also visit me at</h3>
        <v-icon
          large
          color="secondary"
          class="pa-2"
          @click="openLink('linkedin')"
          >mdi-linkedin</v-icon
        >
        <v-icon large color="secondary" class="pa-2" @click="() => {}"
          >mdi-github</v-icon
        >

        <v-icon large color="secondary" class="pa-2" @click="() => {}"
          >mdi-codepen</v-icon
        >
        <v-icon large color="secondary" class="pa-2" @click="() => {}"
          >mdi-instagram</v-icon
        >
        <v-icon large color="secondary" class="pa-2" @click="() => {}"
          >mdi-twitter</v-icon
        >
      </div>
      <v-btn @click="toProj()" outlined color="secondary" x-large>
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
              @click="openDialog()"
              color="#422c0a"
              width="100%"
              height="350px"
              :class="
                hover ? `elevation-5 transition-swing` : `mt-3 transition-swing`
              "
            >
              <v-card-title
                ><v-icon color="secondary" large>mdi-folder-outline</v-icon>
                <span class="ml-3" :style="hover ? 'color: #ffc964' : ''">{{
                  proj.name
                }}</span></v-card-title
              >
              <v-card-text>{{ proj.text }}</v-card-text>
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
        color="secondary"
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
      <v-card light height="100vh" width="100vw">
        <v-card-title>Project Details Here</v-card-title>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data: () => ({
    open: false,
    projects: [
      {
        name: "Farms Chicken",
        text: "An Ecommerce application built for one of the biggest meat supplier in Christchurch. We also integrated their old SQL based application and also Reckon for Invoicing.",
      },
      {
        name: "Guardex",
        text: "A Web and Mobile system for managing security sites, guards and producing reports and timesheet.",
      },
      {
        name: "CanIT System",
        text: "A full ticketing, tracking and invoicing system full of features to autonomate hardware repair information.",
      },
      {
        name: "Project Name",
        text: "The quick brown fox jumps over the lazy dog.",
      },
      {
        name: "Project Name",
        text: "The quick brown fox jumps over the lazy dog.",
      },
      {
        name: "Project Name",
        text: "The quick brown fox jumps over the lazy dog.",
      },
      {
        name: "Project Name",
        text: "The quick brown fox jumps over the lazy dog.",
      },
      {
        name: "Project Name",
        text: "The quick brown fox jumps over the lazy dog.",
      },
      {
        name: "Project Name",
        text: "The quick brown fox jumps over the lazy dog.",
      },
      {
        name: "Project Name",
        text: "The quick brown fox jumps over the lazy dog.",
      },
      {
        name: "Project Name",
        text: "The quick brown fox jumps over the lazy dog.",
      },
    ],
    launch: false,
  }),
  mounted() {},
  methods: {
    isMobile() {
      return this.$vuetify.breakpoint.width < 600;
    },
    openDialog() {
      this.open = true;
    },
    openLink(socialNet) {
      switch (socialNet) {
        case "linkedin":
          window.open("https://www.linkedin.com/in/george-somoso-886409175/");
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
  components: {},
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
.title h3 {
  font-size: 6vw;
}

.subtitle {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  max-width: 50vw;
}
.subtitle p {
  font-size: 1.2em;
}
</style>