<template>
  
      <v-navigation-drawer
      image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
        theme="dark"
        permanent
        expand-on-hover
        rail
      >

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-view-dashboard" title="Home" :to="homeView" ></v-list-item>
          <v-list-item prepend-icon="mdi-account" title="Dosen" :to="dosenView" ></v-list-item>
          <v-list-item prepend-icon="mdi-account" title="Mahasiswa" :to="mahasiswa" ></v-list-item>
          <v-list-item prepend-icon="mdi-home-city" title="Ruangan" :to="ruanganView" ></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 250px"></v-main>
</template>

<script>
  export default {
    data () {
      return {
        homeView: '/',
        ruanganView: '/ruangan',
        mahasiswa: '/mahasiswa',
        dosenView: '/dosen'
      }
    },
  }
</script>