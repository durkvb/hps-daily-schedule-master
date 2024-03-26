<script>
  import { time } from './stores/TimeStore.js';
  import { hhsSched, hmsSched } from './stores/ScheduleStore.js';
  import Schedule from './components/Schedule.svelte';
  import HmsSchedule from './components/HMSSchedule.svelte';

  const formatter = new Intl.DateTimeFormat('en', {
    hour12: true,
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
  });

  const isABDay = () => {
    return;
  };
</script>

<style>
  .lh {
    line-height: 0.2rem !important;
  }

  .mh36 {
    min-height: 40px !important;
  }
</style>

<main>
  <nav class="blue darken-4">
    <div class="nav-wrapper">
      <span class="brand-logo center">{formatter.format($time)}</span>
    </div>
  </nav>

  <div class="">
    <div class="row mb-0">
      {#if $hhsSched.length > 0}
        <div class="col s12">
          <Schedule sched={$hhsSched[0].periods} title={$hhsSched[0].title} />
          <Schedule sched={$hhsSched[1].periods} title={$hhsSched[1].title} />
        </div>
      {/if}
    </div>
    <div class="row">
      {#if $hmsSched.length > 0}
        <HmsSchedule title="6th Grade" sched={$hmsSched[0].periods} />
        <HmsSchedule title="7th Grade" sched={$hmsSched[1].periods} />
        <HmsSchedule title="8th Grade" sched={$hmsSched[2].periods} />
      {/if}
    </div>
  </div>
</main>
