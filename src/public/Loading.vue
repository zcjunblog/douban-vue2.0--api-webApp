<template>
  <div class="colorful_loading_frame">
    <div class="colorful_loading" >
      <i class="rect1"></i>
      <i class="rect2"></i>
      <i class="rect3"></i>
      <i class="rect4"></i>
      <i class="rect5"></i>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'Loading'
  }
</script>

<style scoped>
  .colorful_loading_frame{position:fixed;top:40%;left:0;z-index:99999;width:100%;height:100%;background:rgba(255,255,255,.2);color: #0def13;text-align:center;font-size:2em}
  .colorful_loading{margin:25% auto;width:80px;height:60px;text-align:center;font-size:10px}
  .colorful_loading>i{display:inline-block;margin-right:3px;width:6px;height:100%;background-color: #0def13;-webkit-animation:stretchdelay 1.2s infinite ease-in-out;animation:stretchdelay 1.2s infinite ease-in-out}
  .colorful_loading .rect2{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}
  .colorful_loading .rect3{-webkit-animation-delay:-1.0s;animation-delay:-1.0s}
  .colorful_loading .rect4{-webkit-animation-delay:-0.9s;animation-delay:-0.9s}
  .colorful_loading .rect5{-webkit-animation-delay:-0.8s;animation-delay:-0.8s}
  @-webkit-keyframes stretchdelay{0%,100%,40%{-webkit-transform:scaleY(.4)}
    20%{-webkit-transform:scaleY(1)}
  }
  @keyframes stretchdelay{0%,100%,40%{-webkit-transform:scaleY(.4);transform:scaleY(.4)}
    20%{-webkit-transform:scaleY(1);transform:scaleY(1)}
  }

</style>
