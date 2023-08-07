<script lang="ts">
  export let filled = false;
  export let outlined = false;
  export let disabled = false;
</script>

<button class:filled={!outlined} class:outlined={!filled} {disabled}>
  <span>
    <slot />
  </span>
</button>

<style>
  button {
    @apply flex min-w-[328px] text-label-large w-full py-2.5 rounded-3xl px-2 justify-center items-center;
  }

  button.filled:not(:disabled) {
    @apply interactive-bg-primary-container;
  }

  button.outlined:not(:disabled) {
    @apply ring-1 ring-primary-container text-on-primary-container transition-all;
  }

  button.outlined:hover:not(:disabled) {
    @apply ring-2 text-primary;
  }

  button:disabled {
    @apply bg-inverse-surface/60 text-on-inverse-surface/60;
  }

  button > span {
    @apply justify-center items-center gap-1.5 flex;
  }
</style>
