<template>
  <div class="player-window">
    <iframe
    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fclubcommission%2Fvideos%2F197096681721629%2F&width=500&show_text=false&height=281&appId"
    width="500" height="281" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"
    allow="encrypted-media" allowFullScreen="true">
  </iframe>
    <StreamInstance :streams="this.streams" />
  </div>
</template>

<script>
import getAllStreams from './util/getStreams';
import StreamInstance from './StreamInstance';

export default {
  name: 'Stream',
  props: {
    msg: String
  },
  components: {
    StreamInstance
  },
  data() {
    return { 
      streams: getAllStreams()
    }
  },
  mounted() {
     // 
  }
}
</script>

<style>
.player-window {
  padding: 25px;
}

</style>
