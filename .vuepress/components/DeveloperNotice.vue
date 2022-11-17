<template>
  <div class="developer-notice">
    <div class="custom-container warning">
      <p class="custom-container-title">ATTENTION</p>
      <p>You're browsing the documentation for an <b>development</b> version of froxlor.<br>The current stable version's documentation can be found <a href="https://docs.froxlor.org/latest/">here</a>.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeveloperNotice"
}
</script>

<style lang="scss">
.developer-notice {
  max-width: var(--content-width);
  margin: 0 auto;
  padding: 2rem 2.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  overflow: auto;
}
</style>
