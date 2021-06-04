<template>
  <div class="food-detail">
    <Navbar />
    <div class="container">
      <!-- breadcrumb -->
      <div class="row mt-4">
        <div class="col">
          <h2>
            <strong>Detail Produk</strong>
          </h2>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-md-6">
          <img :src=" '../assets/images/' + product.gambar " class="img-fluid shadow" />
        </div>
        <div class="col-md-6 mt-4">
          <h2>
            <strong>{{ product.nama }}</strong>
          </h2>
          <hr />
          <h4>
            {{ product.deskripsi }}
          </h4>
          <!-- <form class="mt-4" v-on:submit.prevent>
            <div class="form-group">
              <label for="jumlah_pemesanan">Nilai produk (skala 1-5)</label>
              <input type="number" class="form-control" v-model="pesan.jumlah_pemesanan" />
            </div>
            <div class="form-group">
              <label for="keterangan">Komentar Anda</label>
              <textarea
                v-model="pesan.keterangan"
                class="form-control"
                placeholder="Komentar seperti: bagus sekali, cocok, kurang bagus, dan lain-lain ..."
              ></textarea>
            </div>

            <button type="submit" class="btn btn-success" @click="pemesanan">
              <b-icon-bookmark></b-icon-bookmark> Tandai
            </button>
          </form> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";

export default {
  name: "FoodDetail",
  components: {
    Navbar,
  },
  data() {
    return {
      id: this.$route.params.id,
      product: {},
      // pesan: {},
    };
  },
  mounted() {
    axios
      .get("/db.json")
      .then((response) => this.setProduct(response.data.products.find(item => item.id == this.id)))
      .catch((error) => console.log(error));
  },
  methods: {
    setProduct(data) {
      this.product = data;
    },
    // pemesanan() {
    //   if (this.pesan.jumlah_pemesanan) {
    //     this.pesan.products = this.product;
    //     axios
    //       .post("/db.json/keranjangs", this.pesan)
    //       .then(() => {
    //         this.$router.push({ path: "/keranjang"})
    //         this.$toast.success("Sukses ditandai", {
    //           type: "success",
    //           position: "top-right",
    //           duration: 3000,
    //           dismissible: true,
    //         });
    //       })
    //       .catch((err) => console.log(err));
    //   } else {
    //     this.$toast.error("Nilai produk harus diisi", {
    //       type: "error",
    //       position: "top-right",
    //       duration: 3000,
    //       dismissible: true,
    //     });
    //   }
    // },
  },
};
</script>

<style>
</style>