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

<div
  class="card"
  class:blue={current === true}
  class:lighten-4={current === true}>
  {#if passing}
    <span class="badge blue white-text" data-badge-caption="passing" />
  {/if}
  <div class="card-content p-0">
    <span class="card-title center">{info.id}</span>
  </div>
  <div class="row">
    <div class="col s5 center">{get12HourStamp(info.start)}</div>
    <div class="col s2 center">-</div>
    <div class="col s5 center">{get12HourStamp(info.end)}</div>
  </div>
</div>
