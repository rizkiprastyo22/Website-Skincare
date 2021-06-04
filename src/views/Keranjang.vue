<template>
  <div class="keranjang">
    <Navbar :updateKeranjang="keranjangs" />
    <div class="container">

      <div class="row mt-4">
        <div class="col">
          <h2>
            <strong>Bookmark Anda</strong>
          </h2>
          <div class="table-responsive mt-3">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Foto</th>
                  <th scope="col">Nama</th>
                  <th scope="col">Deskripsi</th>
                  <th scope="col">Komentar</th>
                  <th align="center" scope="col">Penilaian</th>
                  <th align="center" scope="col">Hapus</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(keranjang, index) in keranjangs" :key="keranjang.id">
                  <th>{{index+1}}</th>
                  <td>
                    <!-- <router-link :to="'/foods/'+keranjang.products.id"> -->
                      <img
                        :src=" '../assets/images/' + keranjang.products.gambar "
                        class="img-fluid shadow"
                        width="250"
                      />
                    <!-- </router-link> -->
                  </td>
                  <td>
                    <strong>{{ keranjang.products.nama }}</strong>
                  </td>
                  <td>
                    {{ keranjang.products.deskripsi }}
                  </td>
                  <td>{{ keranjang.keterangan ? keranjang.keterangan : "-" }}</td>
                  <td align="center">{{ keranjang.jumlah_pemesanan }}</td>
                  <td align="center" class="text-danger">
                    <b-icon-trash @click="hapusKeranjang(keranjang.id)"></b-icon-trash>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";

export default {
  name: "Keranjang",
  components: {
    Navbar,
  },
  data() {
    return {
      id: this.$route.params.id,
      keranjangs: [],
      // pesan: {},
    };
  },
  mounted() {
    axios
      .get("/db.json")
      .then((response) => this.setKeranjangs(response.data.keranjangs))
      .catch((error) => console.log(error));
  },
  methods: {
    setKeranjangs(data) {
      this.keranjangs = data;
    },
    hapusKeranjang(id) {
      axios
        this.$delete(this.keranjangs, id)
        .then(() => {
          this.$toast.error("Sukses Hapus Keranjang", {
            type: "error",
            position: "top-right",
            duration: 3000,
            dismissible: true,
          });

          // Update Data keranjang
          axios
            .get("/db.json")
            .then((response) => this.setKeranjangs(response.data.keranjangs))
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
    },
    // checkout() {
    //   if (this.pesan.nama && this.pesan.noMeja) {
    //     this.pesan.keranjangs = this.keranjangs;
    //     axios
    //       .post("/db.json/pesanans", this.pesan)
    //       .then(() => {

    //         // Hapus Semua Keranjang 
    //         this.keranjangs.map(function (item) {
    //           return axios
    //             .delete("/db.json/keranjangs/" + item.id)
    //             .catch((error) => console.log(error));
    //         });

    //         this.$router.push({ path: "/pesanan-sukses" });
    //         this.$toast.success("Sukses Dipesan", {
    //           type: "success",
    //           position: "top-right",
    //           duration: 3000,
    //           dismissible: true,
    //         });
    //       })
    //       .catch((err) => console.log(err));
    //   } else {
    //     this.$toast.error("Nama dan Nomor Meja Harus diisi", {
    //       type: "error",
    //       position: "top-right",
    //       duration: 3000,
    //       dismissible: true,
    //     });
    //   }
    // },
  },
  // computed: {
  //   totalHarga() {
  //     return this.keranjangs.reduce(function (items, data) {
  //       return items + data.products.harga * data.jumlah_pemesanan;
  //     }, 0);
  //   },
  // },
};
</script>

<style>
</style>