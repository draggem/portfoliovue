<template>
  <div
    id="top"
    :style="
      isMobile()
        ? `padding-left: 5vw; padding-right: 5vw`
        : `padding-left: 15vw; padding-right: 15vw`
    "
  >
    <section style="height: 100vh" class="pl-2 pr-2">
      <div :style="isMobile() ? `margin-top: 10vh` : `margin-top: 20vh`"></div>
      <div class="title" data-aos="fade-right">
        <h1
          :style="
            isMobile()
              ? `font-size: 2em;color: ${$vuetify.theme.themes.dark.accent2}`
              : `color: ${$vuetify.theme.themes.dark.accent2}`
          "
        >
          George Somoso
        </h1>
        <h3 :style="`color: ${$vuetify.theme.themes.dark.accent}`">
          Software Developer
        </h3>
        <div style="position: fixed; top: 0vh; right: 0px" v-if="!isMobile()">
          <!-- <v-img width="300" height="auto" src="@/assets/self.png"></v-img> -->
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
          Accomplished software developer with nearly
          {{ new Date().getFullYear() - 2019 }} years of experience in
          development of applications. Excels in software development, including
          design creation, coding, debugging, testing, and maintenance.
          Experience in devising innovative and tailored solutions to assist
          businesses achieve their goals in a variety of industries. Developed
          skills and knowledge of leading programming tools.
        </p>
      </div>
      <div
        :style="`color:${$vuetify.theme.themes.dark.accent2}`"
        data-aos="fade-up"
        data-aos-delay="700"
        class="mt-3"
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
        class="mt-3"
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
      <h1>Featured Projects</h1>

      <v-row>
        <v-col
          v-for="(proj, i) in featured_projects"
          v-bind:key="i"
          lg="4"
          md="6"
          sm="6"
          xs="12"
          cols="12"
        >
          <v-hover v-slot="{ hover }">
            <v-card
              @click="openDialog(proj)"
              color="rgb(31, 40, 51, 0.5)"
              width="100%"
              height="350px"
              :class="
                hover ? `elevation-5 transition-swing` : `mt-3 transition-swing`
              "
            >
              <v-card-text style="overflow-wrap: anywhere" class="d-flex">
                <v-icon v-if="proj.link" :color="hover ? `text` : ``" large
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
                </h2>
              </v-card-text>
              <v-card-text
                class="mt-6"
                :style="
                  hover ? `color: ${$vuetify.theme.themes.dark.text}` : ''
                "
                >{{ proj.text }}</v-card-text
              >
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </section>

    <section id="proj" class="projects">
      <div class="pt-16"></div>
      <h1>Noteworthy and Archived Projects</h1>

      <v-row>
        <v-col
          v-for="(proj, i) in noteworthy_projects"
          v-bind:key="i"
          lg="4"
          md="6"
          sm="6"
          xs="12"
          cols="12"
        >
          <v-hover v-slot="{ hover }">
            <v-card
              @click="openDialog(proj)"
              color="rgb(31, 40, 51, 0.5)"
              width="100%"
              height="350px"
              :class="
                hover ? `elevation-5 transition-swing` : `mt-3 transition-swing`
              "
            >
              <v-card-text style="overflow-wrap: anywhere" class="d-flex">
                <v-icon v-if="proj.link" :color="hover ? `text` : ``" large
                  >mdi-open-in-new</v-icon
                >
                <div v-else>
                  <v-icon :color="hover ? `text` : ``" large
                    >mdi-book-outline</v-icon
                  >

                  <v-icon v-if="proj.github" :color="hover ? `text` : ``" large
                    >mdi-github</v-icon
                  >
                </div>

                <h2
                  class="ml-3 mt-2"
                  :style="
                    hover ? `color: ${$vuetify.theme.themes.dark.text};` : ''
                  "
                >
                  {{ proj.name }}
                </h2>
              </v-card-text>
              <v-card-text
                class="mt-6"
                :style="
                  hover ? `color: ${$vuetify.theme.themes.dark.text}` : ''
                "
                >{{ proj.text }}</v-card-text
              >
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </section>

    <section id="contact" class="pt-16 text-center pb-16">
      <h1 style="font-size: 3em">Keep In Touch</h1>
      <v-btn
        width="300"
        height="100"
        outlined
        solo
        class="mt-4"
        color="text"
        @click="emailMe()"
        >Email Me<br />gem.somoso@icloud.com</v-btn
      >
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
      >
        <v-icon :style="launch ? `transform:  rotate(320deg); ` : ``">{{
          launch ? `mdi-rocket-launch` : `mdi-rocket`
        }}</v-icon>
      </v-btn>
    </v-fab-transition>
    <v-dialog
      v-model="open"
      :fullscreen="isMobile()"
      style="overflow-y: hidden"
    >
      <v-card
        dark
        height="90vh"
        width="100vw"
        color="secondary"
        v-if="selectedProject"
        style="overflow-y: hidden"
      >
        <v-card-title
          :style="`position: absolute; top:0;width: 100%; background-color: ${$vuetify.theme.themes.dark.secondary}`"
          class="elevation-2"
          >{{ selectedProject.name }} <v-spacer></v-spacer>
          <v-btn @click="open = false" text>
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-container class="pt-16" style="height: 100%; overflow-y: scroll">
          <v-card-text
            >Tools Used<br />
            <span v-for="(item, i) in selectedProject.tools" v-bind:key="i">
              {{ item
              }}<span v-if="i < selectedProject.tools.length - 1">
                -</span
              ></span
            >
          </v-card-text>
          <div
            v-if="selectedProject.github"
            class="ml-6 mr-6"
            @click="openGithub()"
            style="cursor: pointer"
          >
            <v-icon>mdi-github</v-icon>
            <b style="font-size: 12px; color: white" class="ml-2">{{
              selectedProject.github
            }}</b>
            ←
            <span style="font-size: 9px"> (click here)</span>
          </div>
          <v-card-text>{{ selectedProject.paragraph1 }}</v-card-text>
          <v-row v-if="selectedProject.mobile_asset1">
            <v-col lg="2" md="2" sm="2" cols="12" class="text-center"
              ><video
                id="mobile_asset1"
                :width="isMobile() ? `60%` : `auto`"
                :height="isMobile() ? `auto` : `400px`"
                autoplay
                muted
                loop
                :class="!isMobile() ? `ml-4` : ``"
              >
                <source
                  :src="selectedProject.mobile_asset1.src"
                  :type="`video/${selectedProject.mobile_asset1.type}`"
                /></video
            ></v-col>

            <v-col lg="10" md="10" sm="10" cols="12">
              <v-card-text style="max-width: 600px" class="ml-4">{{
                selectedProject.paragraph_mobile
              }}</v-card-text>
            </v-col>
          </v-row>

          <video
            id="asset1"
            :width="isMobile() ? `100%` : `90%`"
            height="auto"
            autoplay
            muted
            loop
            v-if="selectedProject.asset1"
            :class="!isMobile() ? `ml-6` : ``"
          >
            <source
              :src="selectedProject.asset1.src"
              :type="`video/${selectedProject.asset1.type}`"
            />
          </video>

          <v-card-text>{{ selectedProject.paragraph2 }}</v-card-text>

          <v-img
            v-if="selectedProject.asset2"
            :src="selectedProject.asset2.src"
            :width="isMobile() ? `100%` : `90%`"
            :class="!isMobile() ? `ml-6` : ``"
          ></v-img>

          <div v-if="selectedProject.image1">
            <v-row>
              <v-col cols="12" lg="6" md="6" sm="12">
                <v-img
                  v-if="selectedProject.image1"
                  :src="selectedProject.image1.src"
                  :width="isMobile() ? `100%` : `100%`"
                  :class="!isMobile() ? `ml-6` : ``"
                ></v-img>
              </v-col>
              <v-col cols="12" lg="6" md="6" sm="12">
                <v-img
                  v-if="selectedProject.image2"
                  :src="selectedProject.image2.src"
                  :width="isMobile() ? `100%` : `100%`"
                  :class="!isMobile() ? `ml-6` : ``"
                ></v-img>
              </v-col>
            </v-row>
          </div>

          <v-card-text>{{ selectedProject.paragraph3 }}</v-card-text>
          <video
            id="asset3"
            :width="isMobile() ? `100%` : `90%`"
            height="auto"
            autoplay
            muted
            loop
            v-if="selectedProject.asset3"
            :class="!isMobile() ? `ml-6` : ``"
          >
            <source
              :src="selectedProject.asset3.src"
              :type="`video/${selectedProject.asset3.type}`"
            />
          </video>

          <a class="link" :href="`${selectedProject.link}`" target="_blank">
            <v-card-text
              v-if="selectedProject.link"
              :style="`color: ${$vuetify.theme.themes.dark.accent2}`"
            >
              <v-icon size="20" color="accent2">mdi-open-in-new </v-icon>
              {{ selectedProject.link }}
            </v-card-text>
          </a>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
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
    featured_projects: [
      {
        name: "Farms Chicken",
        text: "An Ecommerce application built for one of the biggest meat supplier in Christchurch. We also integrated their old SQL based application and also Reckon for Invoicing.",
        paragraph1:
          "This project is an e-commerce website that was made to place orders in a more efficient and effortless way for registered costumers, instead of ordering via phone or email.",
        paragraph2:
          "An internal software is used to process orders to the production site and also utilises Reckon system for its invoicing.",
        paragraph3:
          "The main API for integration is a docker-containerised node server,  which is run in the same server machine with reckon system and production software.",
        asset1: {
          src: "https://georgesomoso-portfolio-assets.s3.ap-southeast-2.amazonaws.com/farms_chicken/ecommerce.mp4",
          type: "mp4",
        },
        asset2: {
          src: "https://georgesomoso-portfolio-assets.s3.ap-southeast-2.amazonaws.com/farms_chicken/farmschicken_integration.svg",
        },
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
        paragraph1:
          "Guardex is a full security guard management system where employers can manage, schedule & dispatch guards through the app. Features include a tracker that  helps supervisors/ managers locate guards who are deployed throughout the area. It creates alarm and incident reports which send it automatically to clients.",
        paragraph_mobile:
          "The guards are able to clock in and out, create reports, view schedule and get automatic notifications about their security identification expiry dates. The guards uses PWA or native android application. The main difference between the two application is that native app could send live location even when the app is on the background or the phone screen is off. ",
        paragraph2:
          "The backend node server for our main API runs in a docker container in a linux machine. The front-end uses Vue for web and capacitor to convert into a native app.",
        paragraph3: "",
        mobile_asset1: {
          src: "https://georgesomoso-portfolio-assets.s3.ap-southeast-2.amazonaws.com/guardex/guardex_mobile.webm",
          type: "webm",
        },
        asset3: {
          src: "https://georgesomoso-portfolio-assets.s3.ap-southeast-2.amazonaws.com/guardex/guardex_desktop.webm",
          type: "webm",
        },

        tools: [
          "Vue",
          "Service Workers",
          "MongoDB",
          "Capacitor (Mobile)",
          "Node",
          "Docker",
          "Auth0",
        ],
      },
      {
        name: "CanIT System",
        text: "A full ticketing, tracking and invoicing system full of features to autonomate hardware repair information.",
        paragraph1:
          "CanIT System was first developed to acquire costumer information when fixing their devices. This was to increase efficiency and prevent errors as paper documents are replaced.",
        paragraph2:
          "The first version was a simple ticketing system to get all customer and device details made with PHP, HTML, CSS, JS and ajax. ",
        paragraph3:
          "It was then further developed by adding more features such as stock management, reporting and invoicing. It can also be installed as a seamless PWA mobile application. Vue was used for the front end, and Amazon Web Services for the backend.",
        asset1: {
          src: "https://georgesomoso-portfolio-assets.s3.ap-southeast-2.amazonaws.com/canit/canit_system.webm",
          type: "webm",
        },
        tools: [
          "Vue",
          "Amazon Web Services",
          "Raspberry-pie (Running a Python SMS Server)",
          "Windcave API",
        ],
      },
      {
        name: "Selfserv",
        text: "A full platform for restaurants and cafes. Includes self-ordering kiosk, staff POS system and super admin management.",
        paragraph1:
          "Selfserv is one of my favourite projects. It is a full platform for restaurants and cafes. Includes self-ordering kiosk, staff POS system and super admin management.",
        asset1: {
          src: "https://georgesomoso-portfolio-assets.s3.ap-southeast-2.amazonaws.com/selfserv/selfserv_demo.mp4",
          type: "mp4",
        },
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
    ],
    noteworthy_projects: [
      {
        name: "Portfolio",
        text: "An online portforlio made using Vuejs. You are currently viewing my portfolio right now.",
        paragraph1:
          "An online portforlio made using Vuejs. It is free to use for everyone. Click the github button to view the github repository.",
        tools: ["Vuejs", "S3 Bucket (Hosting)"],
        github: "https://github.com/draggem/portfoliovue",
      },
      {
        name: "OCA Payroll",
        text: "This project was one of many projects in the tertiary education that I went to. I included these type of projects because I learned many things from it.",
        paragraph1:
          "The project a windows form that can be run in a java environment or compiled as an executable file. The project is heavily Object-oriented therefore the use of classes, inheritance, encapsulation etc. ",
        image1: {
          src: "https://georgesomoso-portfolio-assets.s3.ap-southeast-2.amazonaws.com/oca/OCA_Payroll.png",
        },
        image2: {
          src: "https://georgesomoso-portfolio-assets.s3.ap-southeast-2.amazonaws.com/oca/Reports_Payroll.png",
        },
        tools: ["Java", "SQL"],
        github: "https://github.com/draggem/OCA-IT-Payroll",
      },
      {
        name: "Ufly",
        text: "Another project using Java.",
        paragraph1:
          "Another project using Java. This project focuses more on streams, wrappers and file data source.",
        tools: ["Java", "SQL"],
        image1: {
          src: "https://georgesomoso-portfolio-assets.s3.ap-southeast-2.amazonaws.com/ufly/home_screen_ufly.png",
        },
        image2: {
          src: "https://georgesomoso-portfolio-assets.s3.ap-southeast-2.amazonaws.com/ufly/importing_data_ufly.png",
        },
        github: "https://github.com/draggem/uFly-Booking-System",
      },
      {
        name: "Calculator",
        text: "Everyone in the industry have coded a calculator.",
        paragraph1:
          "An easy to use calculator that is made with Java which includes a standard and scientific modes.",
        tools: ["Java", "SQL"],
        image1: {
          src: "https://georgesomoso-portfolio-assets.s3.ap-southeast-2.amazonaws.com/calc/java_calculator.png",
        },
        github: "https://github.com/draggem/Calculator-Extended-",
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
    emailMe() {
      window.open("mailto:gem.somoso@icloud.com");
    },
    video(url) {
      console.log(url);
      return require(url);
    },
    isMobile() {
      return this.$vuetify.breakpoint.width < 600;
    },
    openDialog(param) {
      if (param.link) {
        window.open(param.link);
        return;
      }
      this.selectedProject = param;
      this.open = true;

      setTimeout(() => {
        if (param.asset1) {
          var asset1 = document.getElementById("asset1");
          asset1.src = param.asset1.src;
          asset1.play();
        }
        if (param.asset3) {
          var asset3 = document.getElementById("asset3");
          asset3.src = param.asset3.src;
          asset3.play();
        }
        if (param.mobile_asset1) {
          var mobile_asset = document.getElementById("mobile_asset1");
          mobile_asset.src = param.mobile_asset1.src;
          mobile_asset.play();
        }
      }, 10);
    },
    openGithub() {
      window.open(this.selectedProject.github);
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
  font-size: 20px;
}

.link {
  text-decoration: none;
}
</style>