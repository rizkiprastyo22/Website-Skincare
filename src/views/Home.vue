<template>
  <div class="home">
    <Navbar />
    <div class="container">
      <Hero />

      <!-- Desktop -->
      <div class="d-none d-md-block">
        <div class="row mt-5">
          <div class="col">
            <h3><strong>Kandungan</strong> yang biasa dicari</h3>
          </div>
          <div class="col">
            <router-link to="/kandungan" class="btn btn-success float-right"><b-icon-eye></b-icon-eye> Selengkapnya</router-link>
          </div>
        </div>

        <div class="row mb-4">
          <div class="col-md-4 mt-4" v-for="product in kandungans" :key="product.id">
            <CardKandungan :product="product"/>
          </div>
        </div>

        <div class="row mt-5">
          <div class="col">
            <h3>Popular <strong>Skincare</strong></h3>
          </div>
          <div class="col">
            <router-link to="/foods" class="btn btn-success float-right"><b-icon-eye></b-icon-eye> Selengkapnya</router-link>
          </div>
        </div>

        <div class="row mb-4">
          <div class="col-md-4 mt-4" v-for="product in products" :key="product.id">
            <CardProduct :product="product"/>
          </div>
        </div>        
      </div>

      <!-- Mobile -->
      <div class="d-sm-block d-md-none">
        <div class="row mt-5">
          <div class="col-md-4 mt-4">
            <h5><strong>Kandungan</strong> yang biasa dicari</h5>
          </div>
        </div>

        <div class="row mb-4">
          <div class="col-md-4 mt-4" v-for="product in products" :key="product.id">
            <CardProduct :product="product"/>
          </div>
          <div class="col-md-4 mt-5 mb-5">
            <router-link to="/kandungan" class="btn btn-success float-right"><b-icon-eye></b-icon-eye> Selengkapnya</router-link>
          </div>
        </div>

        <div class="row mt-5">
          <div class="col">
            <h4>Popular <strong>Skincare</strong></h4>
          </div>
        </div>

        <div class="row mb-4">
          <div class="col-md-4 mt-4" v-for="product in products" :key="product.id">
            <CardProduct :product="product"/>
          </div>
          <div class="col-md-4 mt-5">
            <router-link to="/foods" class="btn btn-success float-right"><b-icon-eye></b-icon-eye> Selengkapnya</router-link>
          </div>
        </div>        
      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import CardProduct from "@/components/CardProduct.vue";
import CardKandungan from "@/components/CardKandungan.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
    CardProduct,
    CardKandungan,
  },
  data() {
    return {
      products: [],
      kandungans: [],
    };
  },
  mounted() {
    axios
      .get("/db.json")
      .then((response) => this.setProducts(response.data.bestproducts))
      .catch((error) => console.log(error)),
    axios
      .get("/db.json")
      .then((response) => this.setKandungans(response.data.bestkandungan))
      .catch((error) => console.log(error))
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
    setKandungans(data) {
      this.kandungans = data;
    },
  },
};
</script>
