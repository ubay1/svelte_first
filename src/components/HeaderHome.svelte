<div class="_header">
    <div class="_headerLogo">
        <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--oeRYYMV3--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--YvHuzD9l--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://dev-to-uploads.s3.amazonaws.com/i/z73tnif31q1v7g31uaco.png" alt="" width="100">
    </div>
    <ul>
        <li><a href="../pages/page1.svelte">Page1</a></li>
        <li>Page2</li>
        <li>{@html page3}</li>
    </ul>
</div>

<script>
let page3 = '<b>Page3</b>';
</script>

<style type="text/scss">
    @import '../styles/_header.scss';
</style>