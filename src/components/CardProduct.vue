<template>
  <div class="card shadow card-product">
    <img
      :src="'assets/images/' + product.gambar"
      class="card-img-top"
      alt="..." height="400"
    />
    <div class="card-body">
      <h5 class="card-title">{{ product.nama }}</h5>
      <p class="card-text">{{ product.deskripsi }}</p>
      <router-link
        @click.native="$scrollToTop"
        class="btn btn-success"
        :to="'/skincare/' + product.id"
        ><b-icon-search></b-icon-search> Cek Kandungan
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProduct",
  props: ["product"],
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style>
</style>