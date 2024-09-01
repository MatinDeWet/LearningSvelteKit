<script>
	import { goto } from "$app/navigation";

    let name = 'about';
</script>

<h1>About {name}</h1>

<button on:click={() => {
    goto('/');
}}>Go to Home</button>