<script lang="ts">

    import { T } from "@threlte/core";

    export let fov = 70;
    export let target = false;
    export let position: [ number, number, number ] = [ 5, 5, 5 ];

</script>

<T.PerspectiveCamera {position} fov={fov} makeDefault={target} on:create={({ref}) => { ref.lookAt(0, 0, 0 )} } >
    
    <slot />

</T.PerspectiveCamera>