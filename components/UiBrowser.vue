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
    <img :src="withBase(src)" :alt="alt" data-zoomable>
  </div>
</template>

<style scoped>
.browser {
  background: #ddd;
  color: #bbb;
  border-radius: 0.35rem;
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;
}

.browser .bar {
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

.medium-zoom-overlay {
  z-index: 20;
}

.medium-zoom-image {
  z-index: 21;
}
</style>

<script setup>
import {onMounted} from 'vue';
import { withBase } from 'vitepress'
import mediumZoom from 'medium-zoom';

onMounted(() => {
  mediumZoom('[data-zoomable]', {background: 'var(--vp-c-bg)'});
});

defineProps({
  src: {
    type: String,
  },
  alt: {
    type: String,
  },
  url: {
    type: String,
  }
});
</script>


<script>
export default {
  name: 'UiBrowser',
}
</script>