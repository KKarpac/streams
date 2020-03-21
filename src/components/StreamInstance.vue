<template>
  <div>
    <!-- <p v-for="(stream, index) in streams" :key="stream.streams[index].name">
        {{ stream }}
    </p> -->
    {{ streams }}
  </div>
</template>

<script>

export default {
  name: 'StreamInstance',
  props: {
    streams: {
        type: Array,
        required: true
    }
  },
  mounted() {
    console.log(this.streams)
  }
}
</script>

<style>

</style>
