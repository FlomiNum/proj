<template>
  <nav>
    <v-toolbar flat app>
      <v-toolbar-title class="text-uppercase grey--text">
        <router-link to="/">홈페이지 로고</router-link>
      </v-toolbar-title>
    <v-card>
      <v-toolbar
          dense
        >
        <v-text-field
          hide-details
          prepend-icon="mdi-magnify"
          single-line
        ></v-text-field>
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>
    </v-card>

      <v-spacer></v-spacer>
      <v-btn flat color="white">
        <router-link to="/travel">여행지</router-link>
      </v-btn>
      <v-btn flat color="white">
        <router-link to="/festival">축제</router-link>
      </v-btn>
      <v-btn flat color="white">
        <router-link to="/event">이벤트</router-link>
      </v-btn>
      <v-img
        max-height="60"
        max-width="60"
        src='@/assets/person_icon.png'
      ></v-img>      
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  name: "header",
  data(){
    return{
      drawer : true
    }
  },
  // methods: {

  // }
};
</script>