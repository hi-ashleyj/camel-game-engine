<script lang="ts">

    import { T } from "@threlte/core";
    import * as THREE from "three";
    import { Euler } from "three";

    let something = new THREE.PerspectiveCamera();
    something.rotation

    export let fov = 70;
    export let target = false;
    export let position: [ number, number, number ] = [ 5, 5, 5 ];
    export let scale: [ number, number, number ] = [ 1, 1, 1 ];
    export let rotation: [ number, number, number ] = [ 0, 0, 0 ];

</script>

<T.PerspectiveCamera {position} {scale} rotation={[ ...rotation, Euler.DEFAULT_ORDER ]} fov={fov} makeDefault={target} let:ref={ref} >
    
    <slot {ref} />

</T.PerspectiveCamera>