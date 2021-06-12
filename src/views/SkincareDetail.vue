<template>
  <div class="food-detail">
    <Navbar />
    <div class="container">

      <div class="row mt-3">
        <div class="col-md-6">
          <img :src=" '../assets/images/' + product.gambar " class="img-fluid shadow" />
        </div>
        <div class="col-md-5 offset-md-1 mt-5">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong>{{ product.nama }}</strong>
              </h2>
              <h3>
                <strong>{{ product.merk }}</strong>
              </h3>
              <hr>
              <p>
                {{ product.deskripsi_panjang }}
              </p>
            </div>
          </div>
        </div>
      </div><hr>

      <div class="row mt-5">
        <div class="col">
          <h2><strong>Kandungan Produk</strong></h2>
          <div class="table-responsive mt-3">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Nama Kandungan</th>
                  <th scope="col">Fungsi</th>
                  <th align="center" scope="col">EWG</th>
                  <th align="center" scope="col">CIR</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(kandungan, index) in kandungans" :key="kandungan.id">
                  <th>{{index+1}}</th>
                  <td>
                    <strong>{{ kandungan.nama }}</strong>
                  </td>
                  <td>
                    {{ kandungan.fungsi }}
                  </td>
                  <td>{{ kandungan.ewg }}</td>
                  <td>{{ kandungan.cir }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Desktop -->
      <div class="d-md-block d-none">
        <div class="row mt-3 kesimpulan-besar shadow">
          <div class="col-md-12">
            <h3 class="mt-3"><strong>Keterangan:</strong></h3><hr>
              <p>
                <strong>EWG (Environmental Working Group)</strong><br>
                menggambarkan <b>peringkat keamanan</b> dari suatu bahan dengan skala 1-10. <b>Semakin rendah</b> rating EWG, bahan <b>semakin terhindar dari toxic</b>.<br>
              </p>
              <p>
                <strong>CIR (Cosmetic Ingredient Review)</strong><br>
                A - Aman untuk digunakan<br>
                B - Aman dengan kualifikasi<br>
                C - Data tidak memadai untuk mendukung keselamatan
              </p>
          </div>
        </div>
      </div>

      <!-- Mobile -->
      <div class="d-sm-block d-md-none">
        <div class="row mt-3 kesimpulan shadow">
          <div class="col-md-12">
            <h3 class="mt-3"><strong>Keterangan:</strong></h3><hr>
              <p>
                <strong>EWG (Environmental Working Group)</strong><br>
                menggambarkan <b>peringkat keamanan</b> dari suatu bahan dengan skala 1-10. <b>Semakin rendah</b> rating EWG, bahan <b>semakin terhindar dari toxic</b>.<br>
              </p>
              <p>
                <strong>CIR (Cosmetic Ingredient Review)</strong><br>
                <b>A</b> - Aman untuk digunakan<br>
                <b>B</b> - Aman dengan kualifikasi<br>
                <b>C</b> - Data tidak memadai untuk mendukung keselamatan
              </p>
          </div>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col">
            <router-link to="/skincare" class="btn btn-success float-left"><b-icon-arrow-left></b-icon-arrow-left> Kembali</router-link>
          </div>
      </div>

    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";

export default {
  name: "SkincareDetail",
  components: {
    Navbar,
  },
  data() {
    return {
      id: this.$route.params.id,
      product: {},
      kandungans: []
    };
  },
  mounted() {
    axios
      .get("/db.json")
      .then((response) => this.setProduct(response.data.products.find(item => item.id == this.id)))
      .catch((error) => console.log(error)),
      axios
      .get("/db.json")
      .then((response) => this.setKandungans(response.data.products.find(item => item.id == this.id).kandungans))
      .catch((error) => console.log(error));
  },
  methods: {
    setProduct(data) {
      this.product = data;
    },
    setKandungans(data) {
      this.kandungans = data;
    },
  },
};
</script>

<style>
</style>