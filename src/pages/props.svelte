<div class="_grid_item">
    <div class="_header">Props</div>
    <ul class="_isi">
        <li><b>Declaring props</b></li>
        <li>Whats Svelte And Vue Is Very Cool ? {answer} adalah props dari App.svelte</li>
        <li></li>
        <li><b>Spread props</b></li>
        <li>The {name} package is {speed} fast. Download version {version} from <a href="https://www.npmjs.com/package/{name}">npm</a> and <a href={website}>learn more here</a></li>
    </ul>
</div>

<script>
    export let answer;

    export let name;
	export let version;
	export let speed;
	export let website;
</script>

<style type="text/scss">
    @import '../styles/props.scss';
</style>