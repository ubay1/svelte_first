<div class="_grid_item">
    <div class="_header">Store</div>
    <ul class="_isi">
        <!-- auto subscribe -->
        {$count}

        <button on:click={increment}>
            +
        </button>
        <button on:click={decrement}>
            -
        </button>

        <button on:click={reset}>
            reset
        </button> <br><br>

        {$count2}
        <button on:click={count2.increment}>
            +2
        </button>
        <button on:click={count2.decrement}>
            -2
        </button>
        <button on:click={count2.reset}>
            reset
        </button> <br><br>
    </ul>
</div>

<script>
    import { count, count2 } from './store/store'

    // let count_value;

	// const unsubscribe = count.subscribe(value => {
	// 	count_value = value;
	// });

    function increment() {
        count.update(n=>n+1);
    }

    function decrement() {
        count.update(n=>n-1);
    }
    
    function reset() {
        count.set(0);
    }
</script>

<style type="text/scss">
    @import '../styles/global.scss';
</style>