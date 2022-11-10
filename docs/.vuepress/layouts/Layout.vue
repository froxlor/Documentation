<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
import DeveloperNotice from "../components/DeveloperNotice.vue";
</script>

<template>
  <ParentLayout>
    <template #page-top>
      <developer-notice v-if="showDeveloperNotice"/>
    </template>
    <template #page-bottom>
      <div class="copyright-footer">
        Except as otherwise noted, the content of this page is licensed under the <a href="https://creativecommons.org/licenses/by/4.0/" class="footer-link" rel="noopener noreferrer" target="_blank">Creative Commons Attribution 4.0 License</a>,
        and code samples are licensed under the <a href="https://opensource.org/licenses/MIT" class="footer-link" rel="noopener noreferrer" target="_blank">MIT</a>.
        Copyright © 2022-present froxlor & contributors.
      </div>
    </template>
  </ParentLayout>
</template>

<script>
export default {
  computed: {
    showDeveloperNotice: function () {
      return true;
    }
  }
}
</script>

<style lang="scss">
/* import variables from the plugin's palette file */
@import '@vuepress/plugin-palette/palette';

/* set default value for variables */
$color: red !default;

/* use variables in your styles */
.palette-title {
  color: $color;
}

.copyright-footer {
  max-width: var(--content-width);
  margin: 0 auto;
  padding: 2rem 2.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  overflow: auto;
  font-size: 0.8rem;
}
</style>