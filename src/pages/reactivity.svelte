<div class="_grid_item">
    <div class="_header">Reactivity</div>
    <ul class="_isi">
        <li><button on:click={increment}>Incement +</button> 
            <button on:click={decrement}>decrement -</button>
        </li>
        <li><b>Declaration</b> {count + ' - ' + doubleCount}</li>
        <li>{error == null ? '' : error}</li>
        <li></li>
        <li><button on:click={addNumber}>Add addNumber</button></li>
        <li>{number.join(' + ')} = {sumNumber}</li>
    </ul>
</div>

<script>
    var count  = 0;
    var error  = null;

    $: doubleCount = count * 2;
	
	$: if(count >= 10){
		error = 'tidak boleh lebih dari 10';
		doubleCount = 18;
		count = 9;
	}

	$: if(count < 0){
		error = 'tidak boleh kurang dari 0';
		doubleCount = 0;
		count = 0;
    }
    
    function increment(){
		count = count+1;
		if(count > 0){
			error = null;
		}
	}

	function decrement(){
		count = count-1;
		if(count < 10){
			error = null;
		}
    }
    
    var number = [1,2,3,4];

	$: sumNumber = number.reduce((a,b) => a+b, 0);

	function addNumber(){
		number.push(number.length + 1);
		number = number;
		// number = [...number, number.length + 1];
	}
</script>

<style type="text/scss">
	@import '../styles/basic.scss';
	@import '../styles/global.scss';
</style>