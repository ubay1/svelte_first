<div class="_grid_item">
    <div class="_header">Life Cycle</div>
    <ul class="_isi">
        {#each photos as photo}
            <figure>
                <img src={photo.thumbnailUrl} alt={photo.title}>
                <figcaption>{photo.title}</figcaption>
            </figure>
        {:else}
            <!-- this block renders when photos.length === 0 -->
            <p>loading...</p>
        {/each}

        <p>{date.toLocaleTimeString()}</p>

        <div>
            <h1>{count}</h1>
            <button on:click={() => count++}>Increment</button>
        </div>
    </ul>
</div>

<script>
    import {onMount, onDestroy, beforeUpdate, afterUpdate, tick} from 'svelte'

    // onMount
    let photos = [];

    onMount(async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=2`)
        photos = await res.json();
    })


    // onDestroy
    let date = new Date();
    
    // let timer = setInterval(() => {
    //     date = new Date();
    // }, 1000);
    
    // clears the timer when a component is destroyed
    // onDestroy(function() {
    //     clearInterval(timer);
    //     alert('hey');
    // });

    // beforeUpdate
    let count = 1;
    beforeUpdate(async()=> {
        console.log('tampil sebelum value updated');
        await tick();
        setTimeout(()=> {
            console.log('the component just updated');
        },3000)
    })

    // afterUpdate(()=> {
    //     console.log('tampil setelah value updated')
    // })
</script>

<style type="text/scss">
    @import '../styles/global.scss';
</style>