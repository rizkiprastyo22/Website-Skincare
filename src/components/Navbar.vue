<template>
  <div>
    <b-navbar toggleable="lg" type="light">
      <div class="container">
        <router-link class="nav-link" to="/">
          <b-navbar-brand>Skinsight</b-navbar-brand>
        </router-link>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <!-- <div class="d-none d-md-block"> -->
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
              <li class="nav-item">
                <router-link class="nav-link" to="/">Beranda</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/kandungan">Kandungan</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/foods">Produk</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/keranjang">
                  <!-- Bookmark -->
                  <b-icon-bookmark></b-icon-bookmark>
                  <span
                    class="badge badge-success ml-2"
                  >{{ updateKeranjang ? updateKeranjang.length : jumlah_pesanans.length }}</span>
                </router-link>
              </li>
            </b-navbar-nav>
          </b-collapse>
        <!-- </div> -->

        <!-- <div class="d-sm-block d-md-none">
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
              <li class="nav-item">
                <router-link class="nav-link" to="/">Beranda</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/kandungan">Kandungan</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/foods">Produk</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/keranjang">
                  <b-icon-bookmark></b-icon-bookmark>
                  <span
                    class="badge badge-success ml-2"
                  >{{ updateKeranjang ? updateKeranjang.length : jumlah_pesanans.length }}</span>
                </router-link>
              </li>
            </b-navbar-nav>
          </b-collapse>
        </div> -->

      </div>
    </b-navbar>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Navbar",
  data() {
    return {
      jumlah_pesanans: [],
    };
  },
  props: ["updateKeranjang"],
  mounted() {
    axios
      .get("/db.json")
      .then((response) => this.setJumlah(response.data.keranjangs))
      .catch((error) => console.log(error));
  },
  methods: {
    setJumlah(data) {
      this.jumlah_pesanans = data;
    },
  },
};
</script>

<style></style>
