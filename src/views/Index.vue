<script>
import axios from 'axios'
import { onMounted, ref } from 'vue'

export default {
    setup() {
        let gets = ref([])
        onMounted(() => {
            axios.get('http://localhost:8000/api/post').then(response => {
                gets.value = response.data.data
            }).catch(error => {
                console.log(error.response.data)
            })
        }) 
        return { 
            gets,
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="card" v-for="(get,index) in gets" :key="index">
  <div class="card-header">
    {{ get.title }}
  </div>
  <div class="card-body">
    <p class="card-text">{{ get.content }}</p>
  </div>
</div>  
            </div>
            <div class="col">
                <img src="https://ouch-cdn2.icons8.com/7jluvNibLZB52wZfXMwcc6tZWtaNC_6R2AzfM2T4yZA/rs:fit:214:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDQz/Lzg1MDIyOWFmLWFm/NjEtNGY2YS05MGMx/LTdmNzliMTUyZDM2/Yy5wbmc.png" alt="">
            </div>
        </div>
    </div>
</template>