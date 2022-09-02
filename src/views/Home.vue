<template>
  <v-container style="margin-top: 100px">
    <h1>Hi</h1>
    <v-row>
      <v-col v-for="i in 400" v-bind:key="i">
        <v-card width="300" height="auto">
          <v-card-text
            >The quick brown fox jumps over the lazy dog.</v-card-text
          >
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>
