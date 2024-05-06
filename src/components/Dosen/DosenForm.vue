<template>
  <div>
    <h1>Entry Data Dosen</h1>
    <!-- Models Database Start -->
    <v-text-field v-model="dosen.nidn" label="NIDN" variant="outlined"></v-text-field>
    <v-text-field v-model="dosen.nama" label="Nama" variant="outlined"></v-text-field>

    <v-btn @click="alertDosen" variant="outlined"> Submit </v-btn>
    <!-- Models Database End-->
    <br />
    <br />

    <!-- Tampilkan nilai hanya jika showNilai bernilai true -->
    <p v-if="showNilai">nidn: {{ dosen2.nidn }}</p>
    <p v-if="showNilai">Nama: {{ dosen2.nama }}</p>
  </div>
</template>

<script lang="ts">
import { Dosen } from '@/model/Dosen.ts'

export default {
  data() {
    return {
      count: 0,
      nilai: '',
      dosen: new Dosen('1234', 'bambang', 3.4),

      showNilai: false,
      dosen2: {}
    }
  },

  methods: {
    increment() {
      this.count++
    },
    rubahNilai() {
      this.nilai = ' Muhamad Daffa Khoerudin'
      setTimeout(() => {
        this.nilai = ''
      }, 1000)
    },
    alertDosen() {
      if (!this.dosen.nidn) {
        alert('Field NIDN harus diisi!')
      } else if (this.dosen.nama === "") {
        alert('Field Nama harus diisi!')
      } else {
        alert(`${this.dosen.nama} berhasil ditambahkan`)
        this.dosen2 = this.dosen
        this.showNilai = true
        setTimeout(() => {
          this.dosen = ''
        }, 1000)
      }
    }
  },

  mounted() {
    console.log(`The initial count is ${this.dosen}`)
    console.log(`The initial count is ${this.dosen2}`)
  }
}
</script>
