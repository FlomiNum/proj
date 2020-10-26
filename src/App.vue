<template>
  <v-app>
    <Header />
    <div id="content" class="content">
      <router-view></router-view>
    </div>
    <Home />
  </v-app>
</template>

<script>
//import Home from "./components/Home";
import Header from "./components/layout/Header";

export default {
  name: "App",

  components: {
    //Home,
    Header
  },

  data: () => ({
    //
  })
};
</script>
<style>

</style>