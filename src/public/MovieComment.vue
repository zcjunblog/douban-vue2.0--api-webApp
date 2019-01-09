<template>
  <div>
66666666{{$rote.params.id}}
  </div>
</template>

<script>
  export default {
    name: 'MovieComment',
    created(){
      this.axios.get('http://api01.idataapi.cn:8000/comment/douban?id='+id+'&parent=movie&apikey=GDAHhEue3IG14xZVS4PBhQ4KkescpJJr3Nm3HJtRb4xx7md0FdmwfCaoYqua0qn3')
        .then((res)=>{
          console.log(res.data)
        })
        .catch((err)=>console.log(err))
    }
  }
</script>

<style scoped>

</style>
