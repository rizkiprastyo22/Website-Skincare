<template>
<div>

  <!-- Desktop -->
  <div class="d-none d-md-block">
    <b-navbar toggleable="lg" type="light">
      <div class="container">
        <router-link class="nav-link" to="/">
          <b-navbar-brand><img src="../assets//images/skinsight1.png" height="25" width="30%"></b-navbar-brand>
        </router-link>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
              <li class="nav-item">
                <router-link class="nav-link" to="/">Beranda</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/kandungan">Kandungan</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/skincare">Produk</router-link>
              </li>
            </b-navbar-nav>
          </b-collapse>

      </div>
    </b-navbar>
  </div>

  <!-- Mobile -->
  <div class="d-sm-block d-md-none">
    <b-navbar toggleable="lg" type="light">
      <div class="container">
        <!-- <router-link class="nav-link" to="/"> -->
          <img src="../assets//images/skinsight1.png" height="25" width="40%">
        <!-- </router-link> -->

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
              <li class="nav-item">
                <router-link class="nav-link" to="/">Beranda</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/kandungan">Kandungan</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/skincare">Produk</router-link>
              </li>
            </b-navbar-nav>
          </b-collapse>

      </div>
    </b-navbar>
  </div>
</div>

</template>

<script>

export default {
  name: "Navbar",
};
</script>

<style></style>
