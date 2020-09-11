<div class="_grid_item">
    <div class="_header">Basic</div>
    <ul class="_isi">
        <li>Hello World</li>
        <li>Adding data <b>{svelteCool}</b></li>
        <li><img src={src} alt="" width="120"></li>
        <li class="styleSvelte">styling</li>
        <li>HTML tags dengan `@html {@html tags}`</li>
    </ul>
</div>

<script>
    let svelteCool = 'svelte cool';
    var src    = 'https://pbs.twimg.com/profile_images/1121395911849062400/7exmJEg4.png'
    var tags   = '<b>nama_variabel</b>'
</script>

<style type="text/scss">
    @import '../styles/basic.scss';
    @import '../styles/global.scss';
</style>