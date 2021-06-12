<template>
  <div>

    <!-- Desktop -->
    <div class="d-md-block d-none">
      <Navbar />
      <div class="container">
        
        <div class="row background shadow mb-3" :style="getBackground">
          <div class="col-md-6 mt-5 mb-5 offset-md-1">
            <div class="d-flex h-100">
              <div class="justify-content-center align-self-center">
                <h3><strong>Ketahui setiap kandungan<br>dalam produk kecantikanmu</strong></h3>
                <div class="input-group mb-3 mt-3"> 
                  <input
                    v-model="search"
                    type="text"
                    class="form-control"
                    placeholder="Nama kandungan produk"
                    aria-label="Cari"
                    aria-describedby="basic-addon1"
                  />

                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">
                      <b-icon-search></b-icon-search>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row mb-4">
          <div class="col-md-4 mt-4" v-for="product in searchProducts" :key="product.id">
            <CardKandungan :product="product" />
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile -->
    <div class="d-sm-block d-md-none">
      <Navbar />
      <div class="container">
        
        <div class="row backsmall" :style="getBackground">
          <div class="col-md-6 mt-5 mb-5 offset-md-1">
            <div class="d-flex h-100">
              <div class="justify-content-center align-self-center">
                <h4 style="font-size: 1.17em;"><strong>Ketahui setiap kandungan<br>dalam produk kecantikanmu</strong></h4><hr>
                <div class="input-group mb-3 mt-3"> 
                  <input
                    v-model="search"
                    type="text"
                    class="form-control"
                    placeholder="Nama kandungan produk"
                    aria-label="Cari"
                    aria-describedby="basic-addon1"
                  />

                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">
                      <b-icon-search></b-icon-search>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row mb-4">
          <div class="col-md-4 mt-4" v-for="product in searchProducts" :key="product.id">
            <CardKandungan :product="product" />
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script src="https://unpkg.com/vue@2.4.2"></script>
<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import CardKandungan from "@/components/CardKandungan.vue";
import axios from "axios";

export default {
  name: "Kandungan",
  components: {
    Navbar,
    CardKandungan,
  },
  data() {
    return {
      image: "../assets/images/skincare3.jpeg",
      image1: "../assets/images/skincare4.jpeg",
      kandungans: [],
      search: null,
    };
  },
  mounted() {
    axios
      .get("/db.json")
      .then((response) => this.setProducts(response.data.kandungans))
      .catch((error) => console.log(error));
  },
  methods: {
    setProducts(data) {
      this.kandungans = data;
    },
  },
  computed: {
    searchProducts: function () {
      let searchTerm = (this.search || "").toLowerCase();
      return this.kandungans.filter(function (product) {
        let nama = (product.nama || "").toLowerCase();
        let deskripsi = (product.deskripsi || "").toLowerCase();
        return (
          nama.indexOf(searchTerm) > -1 || deskripsi.indexOf(searchTerm) > -1
        );
      });
    },
    getBackground() {
      return "background: url(" + this.image + "); background-size: 1100px;";
    },
    getBackmedium() {
      return "background: url(" + this.image1 + "); background-size: 700px;";
    },
  },
};
</script>
<style>
</style>