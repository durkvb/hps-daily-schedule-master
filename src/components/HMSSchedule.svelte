<script>
  import { each } from 'svelte/internal';

  import HMSPeriod from './HMSPeriod.svelte';
  export let title;
  export let sched;
</script>

<style>
</style>

<div class="col s4">
  <ul class="collection with-header">
    <li class="collection-header"><span>{title}</span></li>
    {#each sched as period}
      <HMSPeriod info={period} />
    {/each}
  </ul>
</div>
