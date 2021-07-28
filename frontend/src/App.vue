<template>
  <v-app>
    <Navbar />
    <v-main class="mx-4 mb-5">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/organisms/Navbar";
export default {
  name: "App",
  components: { Navbar },
};
</script>
