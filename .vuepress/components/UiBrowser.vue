<template>
  <div class="browser">
    <div class="bar">
      <div>
        <i class="fa fa-circle"></i> <i class="fa fa-circle"></i> <i class="fa fa-circle"></i>
      </div>
      <div class="url">http://{your-ip-address}/froxlor<span v-if="url">/{{ url }}</span></div>
      <div class="actions">
        <i class="fa fa-bars"></i>
      </div>
    </div>
    <img :src="src" :alt="alt">
  </div>
</template>

<style scoped>
.browser {
  background: #ddd;
  color: #bbb;
  border-radius: 0.35rem;
  margin-bottom: 1.5rem;
}
.browser .bar {
  display: flex;
  align-items: center;
  padding: .75rem;
}
.browser .bar .url {
  background: #ffffff;
  padding: 0.35rem 0.35rem;
  border-radius: 0.35rem;
  margin: 0 1rem 0 1rem;
  flex-grow: 1;
}
.browser .bar .actions {
  margin-right: .5rem;
}
.browser img {
  margin-bottom: -5px;
  border-top: solid 1px #eee;
  border-radius: 0 0 0.35rem 0.35rem;
  width: 100%;
}
</style>

<script>
export default {
  name: 'UiBrowser',
  props: {
    src: {
      type: String,
    },
    alt: {
      type: String,
    },
    url: {
      type: String,
    }
  }
}
</script>