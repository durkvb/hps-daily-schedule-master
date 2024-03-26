<script>
  import { time } from '../stores/TimeStore.js';
  export let info;

  $: current = nowIsBetween(info.start, info.end, $time);
  $: passing = nowIsBetween(info.end, info.nextStart, $time);

  function nowIsBetween(startStr, endStr, now) {
    let start = startStr.split(':').map((i) => parseInt(i));
    let startMins = start[0] * 60 + start[1];

    let end = endStr.split(':').map((i) => parseInt(i));
    let endMins = end[0] * 60 + end[1];

    let nowMins = now.getHours() * 60 + now.getMinutes();

    return nowMins >= startMins && nowMins < endMins;
  }

  function get12HourStamp(timeStr) {
    let timeArr = timeStr.split(':');
    let hours = parseInt(timeArr[0]);
    let mins = timeArr[1];
    let morning = true;

    if (hours > 12) {
      hours = hours - 12;
      morning = false;
    } else if (hours === 12) {
      morning = false;
    }

    return `${hours}:${mins} ${morning ? 'AM' : 'PM'}`;
  }
</script>

<style>
</style>

<li
  class="collection-item"
  class:blue={current === true}
  class:lighten-4={current === true}>
  <div>
    <div>
      {info.id}<span class="secondary-content">{get12HourStamp(info.start)}
        -
        {get12HourStamp(info.end)}
        {#if passing}
          <span class="badge blue white-text" data-badge-caption="passing" />
        {/if}
      </span>
    </div>
  </div>
</li>
