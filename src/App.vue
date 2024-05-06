<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import LeftNav from '@/components/navbar/LeftNav.vue'
</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar title="Aplikasi Penjadwalan Kuliah"></v-app-bar>
    
    <LeftNav/>  

    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      <RouterView/>
    </v-main>
    
  </v-layout>
</template>