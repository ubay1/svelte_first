<HeaderHome/>
<div>
	<div class="_grid_container">
		<Basic/>
		<Reactivity/>
		<Propss {...pkg} />
		<Logic></Logic>
		<Binding></Binding>
		<LifeCycle></LifeCycle>
	</div>

</div>

<script>
	import Basic from './pages/basic.svelte'
	import Reactivity from './pages/reactivity.svelte'
	import HeaderHome from './components/HeaderHome.svelte'
	import Propss from './pages/props.svelte'
	import Logic from './pages/logic.svelte'
	import Binding from './pages/binding.svelte'
	import LifeCycle from './pages/lifecycle.svelte'

	const pkg = {
		answer: 'yes',
		name: 'svelte',
		version: 3,
		speed: 'blazing',
		website: 'https://svelte.dev'
	};
	// export let name;
</script>


<style type="text/scss">
	@import './styles/home.scss';
	:global(body){
		padding: 0px;
	}
</style>