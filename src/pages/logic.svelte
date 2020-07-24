<div class="_grid_item">
    <div class="_header">Logic</div>
    <ul class="_isi">
        <li><b>if</b></li>
        {#if user.login}
            <li>Sudah Login <button on:click={toggle}>Logout</button></li>
        {:else}
            <li>Belum Login <button on:click={toggle}>Login</button></li>
        {/if}

        {#if x < 10}
            <li>Nilai lebih kecil</li>
        {:else if x > 10}
            <li>Nilai lebih besar</li>
        {:else}
            <li>Nilai benar yaitu {x}</li>
        {/if}

        <li></li>
        <li><b>Each</b></li>
        {#each persons as person}
            <li>{person.name} - {person.address}</li>
        {/each}
        {#each cats as {name}, i}
            <li>{i+1}. {name}</li>
        {/each}

        <li></li>
        <li><b>DOM Event Forwadding</b></li>
        <ButtonDom on:click={handleDOM}></ButtonDom>
    </ul>
</div>

<script>
    import ButtonDom from './ButtonDom.svelte'

    let user = {login:false};

    let x = 1;

    let persons = [
        {name: 'ubay', address:'buaran'},
        {name: 'mute', address:'bekasi'},
        {name: 'ghifari', address:'bukasi'},
    ];

    var cats = [
        {name:'anggora'},
        {name:'persia'},
        {name:'jalanan'}
    ];

    function toggle(){
        user.login = !user.login;
    }

    function handleDOM(){
        alert('Hello This Is DOM Event Forwarding')
    }
</script>

<style type="text/scss">
    @import '../styles/logic.scss';
</style>