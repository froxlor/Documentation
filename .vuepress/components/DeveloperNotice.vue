<template>
  <div class="developer-notice">
    <div class="custom-container warning">
      <p class="custom-container-title">ATTENTION</p>
      <p>We are excited to announce that the new froxlor version 2.0 will be available soon. This version includes many new features and improvements, which we are introducing on our new website. Stay tuned and look forward to the release of froxlor v2!<br>The 0.10.x documentation can be found <a href="https://docs.froxlor.org/v0.10/">here</a>.</p>
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
