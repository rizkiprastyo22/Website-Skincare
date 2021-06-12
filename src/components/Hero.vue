<template>
  <div class="hero">
    <!-- Desktop -->
    <div class="background d-none d-md-block shadow" :style="getBackground">
      <div class="container">
        <div class="row mb-3">
          <div class="col-md-6 mt-5 mb-5 offset-md-1">
            <div class="d-flex h-100">
              <div class="justify-content-center align-self-center">
                <h2>
                  <strong
                    >Kenali kandungan produk<br />perawatan kulitmu
                    disini</strong
                  >
                </h2>
                <p>
                  Kembangkan wawasan skincare Anda<br />bersama
                  <strong>Skinsight</strong>
                </p>
                <br /><router-link
                  class="btn btn-lg btn-success"
                  to="/kandungan"
                  >Cek Daftar Kandungan</router-link
                >
              </div>
            </div>
          </div>
          <!-- <div class="col-md-6">
            <img src="../assets//images/skincare1.png" width="100%">
          </div> -->
        </div>
      </div>
    </div>

    <!-- Mobile -->
    <div class="d-sm-block d-md-none">
      <div class="row mt-4">
        <div class="col-md-6 mb-3 shadow backsmall" :style="getImage"></div>
      </div>
      <div class="row mt-4">
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h4>
                <strong
                  >Kenali kandungan produk<br />perawatan kulitmu disini</strong
                >
              </h4>
              <p>
                Kembangkan wawasan skincare Anda<br />bersama
                <strong>Skinsight</strong>
              </p>
              <br /><router-link
                class="btn btn-lg btn-success float-center"
                to="/kandungan"
                >Cek Daftar Kandungan</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
  computed: {
    getBackground() {
      return "background: url(" + this.image + "); background-size: 1100px;";
    },
    getImage() {
      return "background: url(" + this.image1 + "); background-size: 450px;";
    },
  },
  data() {
    return {
      image: "../assets/images/skincare3.jpeg",
      image1: "../assets/images/skincare1.png",
    };
  },
};
</script>

<style>
</style>