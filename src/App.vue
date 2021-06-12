<template>
  <div id="app">
    <router-view/>
    <!-- <Navbar /> -->
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
// import Navbar from "@/components/Navbar.vue";


export default {
  components: {
    // Navbar,
    Footer
  }
}
</script>
