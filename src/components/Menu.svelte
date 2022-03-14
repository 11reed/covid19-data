<script lang="ts">
  import { Link } from 'svelte-routing';
  
  export let to = '';
  
  function getProps({ href, isPartiallyCurrent, isCurrent }) {
    const isActive = href === '/' ? isCurrent : isPartiallyCurrent || isCurrent;
  
    if (isActive) {
      return { class: 'active' };
    }
    return {};
  }
</script>

<Link to="{to}" getProps="{getProps}">
  <slot />
</Link>