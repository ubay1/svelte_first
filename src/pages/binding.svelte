<div class="_grid_item">
    <div class="_header">Binding</div>
    <ul class="_isi">
        <li><b>Text Input</b></li>
        <input placeholder="masukan namamu" type="text" bind:value={data.text}> <br>
        <b>{data.text}</b> <br>

        <li></li>
        <li><b>Numeric Input</b></li>
        <input type="number" bind:value={data.numeric1} min="0" max="10">
        <input type="range" bind:value={data.numeric1} min="0" max="10"> <br>
        
        <input type="number" bind:value={data.numeric2} min="0" max="10">
        <input type="range" bind:value={data.numeric2} min="0" max="10"> <br>

        {data.numeric1} + {data.numeric2} = {data.numeric1 + data.numeric2} <br><br>

        <li></li>
        <li><b>Checkbox Input</b></li>
        <input type="checkbox" bind:checked={data.checkbox}> check this for subscribe me <br>

        {#if data.checkbox == true}
            <button on:click={subscribe}>Subscribe Me</button>
        {:else}
            <button disabled>Subscribe Me</button>
        {/if} <br><br>

        <li></li>
        <li><b>TextArea Input</b></li>
        <textarea bind:value={data.textarea} cols="30" rows="5"></textarea> <br>
        {data.textarea} <br><br>
    </ul>
</div>

<script>
let data = {
    text: '',
    numeric1: 0,
    numeric2: 0,
    checkbox: false,
    textarea: '',
}

function subscribe() {
    alert('you subscribe me, thankss')
}
</script>

<style type="text/scss">
    @import '../styles/binding.scss';
</style>