<template>
  <div>
    <h1>Entry Data Mahasiswa</h1>
    <!-- Models Database Start -->
    <v-text-field v-model="mhs.npm" label="NPM" variant="outlined"></v-text-field>
    <v-text-field v-model="mhs.nama" label="Nama" variant="outlined"></v-text-field>
    <v-text-field v-model="mhs.ipk" label="Ipk" variant="outlined"></v-text-field>

    <v-btn @click="alertMhs" variant="outlined"> Submit </v-btn>
    <!-- Models Database End-->
    <br />
    <br />

    <!-- Tampilkan nilai hanya jika showNilai bernilai true -->
    <p v-if="showNilai">Npm: {{ mhs2.npm }}</p>
    <p v-if="showNilai">Nama: {{ mhs2.nama }}</p>
    <p v-if="showNilai">Ipk: {{ mhs2.ipk }}</p>
  </div>
</template>

<script lang="ts">
import { Mahasiswa } from '@/model/Mahasiswa.ts'

export default {
  data() {
    return {
      count: 0,
      nilai: '',
      mhs: new Mahasiswa('1234', 'bambang', 3.4),

      showNilai: false,
      mhs2: {}
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
    alertMhs() {
      if (!this.mhs.npm) {
        alert('Field npm harus diisi!')
      } else if (!this.mhs.nama) {
        alert('Field nama harus diisi!')
      } else if (!this.mhs.ipk) {
        alert('Field ipk harus diisi!')
      } else if (parseFloat(this.mhs.ipk) < 0 || parseFloat(this.mhs.ipk) > 4) {
        alert('Nilai IPK harus berada di antara 0 dan 4!')
      } else {
        alert(`${this.mhs.nama} berhasil ditambahkan`)
        this.mhs2 = this.mhs
        this.showNilai = true
        setTimeout(() => {
          this.mhs = ''
        }, 1000)
      }
    }
  },

  mounted() {
    console.log(`The initial count is ${this.mhs}.`)
    console.log(`The initial count is ${this.mhs2}.`)
  }
}
</script>
