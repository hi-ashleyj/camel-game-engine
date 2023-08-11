<script lang="ts">

    import SensibleDefaultStyles from "$lib/SensibleDefaultStyles.svelte";
    import Game from "$lib/Game.svelte";
    import Camera from "$lib/Camera.svelte";
    import { T } from "@threlte/core";

</script>

<SensibleDefaultStyles>

    <Game>
        
        <Camera target />

        <T.Mesh position={[ 0, 0, 0 ]}>
            <T.BoxGeometry />
            <T.MeshBasicMaterial />
        </T.Mesh>
    
    </Game>

</SensibleDefaultStyles>