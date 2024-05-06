<script setup lang="ts"></script>

<template>
  <v-row justify="center">
    <v-col>
      <v-card :color="color" :variant="variant" class="mx-auto">
        <v-card-item>
          <div>
            <div class="text-overline mb-1">
              {{ variant }}
            </div>
            <div class="text-h4 mb-1">Selamat Datang di Aplikasi</div>
            <div class="text-h6 mb-1">Aplikasi ini dibuat oleh :</div>
            <div class="text-caption">Npm : 40622100142</div>
            <div class="text-caption">Nama : Muhamad Daffa Khoerudin</div>
          </div>
        </v-card-item>

        <v-card-actions>
          <v-btn> Hello </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script setup>
import { ref } from 'vue'

const variants = ['elevated', 'flat', 'tonal', 'outlined']
const color = ref('indigo')
</script>