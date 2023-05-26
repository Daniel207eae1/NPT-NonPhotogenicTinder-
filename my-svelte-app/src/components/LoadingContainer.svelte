<script>
  export let show;
</script>

{#if show}
  <div class="loading-container">
    <div class="loading-spinner" />
    <p>Loading...</p>
  </div>
{/if}

<style>
  .loading-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loading-spinner {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 5px solid #ffffff;
    border-top-color: #000000;
    animation: spin 1s infinite linear;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
