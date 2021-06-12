<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="row mt-3">
        <div class="col-md-6">
          <img
            :src="'../assets/images/' + product.gambar"
            class="img-fluid shadow"
          />
        </div>
        <div class="col-md-6 mt-5">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong>{{ product.nama }}</strong>
              </h2>
              <hr />
              <h5 style="color: #117864;">
                <strong>Nama lain:</strong>
              </h5>
              <p>
                {{ product.nama_lain }}
              </p>
              <h5 style="color: #117864;">
                <strong>Nama IUPAC:</strong>
              </h5>
              <p>
                {{ product.nama_iupac }}
              </p>
              <h5 style="color: #117864;">
                <strong>Fungsi:</strong>
              </h5>
              <p>
                {{ product.fungsi }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />

      <div class="row mt-5">
        <div class="col-md-4">
          <h2>
            <strong>Apa manfaatnya?</strong>
          </h2><hr>
          <p class="mt-4 text-justify">
            Ketahui manfaat dari setiap kandungan dalam produk kecantikan dan
            sesuaikan dengan kebutuhan kulitmu.
          </p>
        </div>
        <div class="col-md-6 offset-md-2">
          <div v-for="(manfaat, index) in manfaats" :key="manfaat.id">
            <h5 style="color: #117864;">
              <strong>{{ index + 1 }}. {{ manfaat.nama }}</strong>
            </h5>
            <p>
              {{ manfaat.deskripsi }}
            </p>
          </div>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-md-12">
          <h2>
            <strong>Cari tahu detailnya</strong>
          </h2><hr>
          <div v-for="detail in details" :key="detail.id" class="text-justify">
            <h5 style="color: #117864;">
              <strong>{{ detail.sub_judul }}</strong>
            </h5>
            <p>
              {{ detail.deskripsi }}
            </p>
          </div>
        </div>
      </div>

      <!-- Desktop -->
      <div class="d-md-block d-none">
        <div class="row mt-3 kesimpulan-besar shadow">
        <div class="col-md-12">
          <h3 class="mt-3" style="color: #117864;"><strong>Kesimpulan</strong></h3><hr>
          <p>{{product.kesimpulan}}</p>
        </div>
      </div>
      </div>

      <!-- Mobile -->
      <div class="d-sm-block d-md-none">
        <div class="row mt-3 kesimpulan shadow">
        <div class="col-md-12">
          <h3 class="mt-3" style="color: #117864;"><strong>Kesimpulan</strong></h3><hr>
          <p>{{product.kesimpulan}}</p>
        </div>
      </div>
      </div>

      <div class="row mt-5">
        <div class="col-md-12">
          <h2>
            <strong>Mana sumbernya?</strong>
          </h2><hr>
          <div v-for="(sumber, index) in sumbers" :key="sumber.id">
            <p>{{ index + 1 }}. {{ sumber.nama }}</p>
          </div>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-md-12">
          <router-link to="/kandungan" class="btn btn-success float-left"
            ><b-icon-arrow-left></b-icon-arrow-left> Kembali</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";

export default {
  name: "KandunganDetail",
  components: {
    Navbar,
  },
  data() {
    return {
      id: this.$route.params.id,
      product: {},
      manfaats: {},
      details: {},
      sumbers: {},
    };
  },
  mounted() {
    axios
      .get("/db.json")
      .then((response) =>
        this.setProduct(
          response.data.kandungans.find((item) => item.id == this.id)
        )
      )
      .catch((error) => console.log(error)),
      axios
        .get("/db.json")
        .then((response) =>
          this.setManfaats(
            response.data.kandungans.find((item) => item.id == this.id).manfaat
          )
        )
        .catch((error) => console.log(error)),
      axios
        .get("/db.json")
        .then((response) =>
          this.setDetails(
            response.data.kandungans.find((item1) => item1.id == this.id).detail
          )
        )
        .catch((error) => console.log(error)),
      axios
        .get("/db.json")
        .then((response) =>
          this.setSumbers(
            response.data.kandungans.find((item2) => item2.id == this.id).sumber
          )
        )
        .catch((error) => console.log(error));
  },
  methods: {
    setProduct(data) {
      this.product = data;
    },
    setManfaats(data) {
      this.manfaats = data;
    },
    setDetails(data) {
      this.details = data;
    },
    setSumbers(data) {
      this.sumbers = data;
    },
  },
};
</script>

<style>
</style>