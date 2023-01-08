<template>
    <video v-model="urlll" id="video" class="video" controls autoplay style=""  ></video>
</template>

<script>

export default {
  name: "myVideo",
  data() {
    return {
      url: 'webrtc://10.2.23.56/live/livestream/1',
    };
  },
  mounted() {
    var video = document.getElementById('video');
    var url2 = this.url;
    var url = 'webrtc://10.2.23.56/live/livestream/1';
    // var url = 'http://10.2.21.124:8081/upload/4e26785d-877a-4ba0-991a-c19c2f3dc674.mp4';
    var player = new JSWebrtc.Player(url2, { video: video, autoplay: true,  });
  }

}
</script>

<style scoped>

</style>
