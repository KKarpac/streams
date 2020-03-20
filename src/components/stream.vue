<template>
  <div>
    <iframe
    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fclubcommission%2Fvideos%2F197096681721629%2F&width=500&show_text=false&height=281&appId"
    width="500" height="281" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"
    allow="encrypted-media" allowFullScreen="true">
  </iframe>
  </div>
</template>

<script>
export default {
  name: 'stream',
  props: {
    msg: String
  }
}
</script>
