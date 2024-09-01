<script>
	import { page } from '$app/stores';
</script>

<h1>Product Page</h1>
<p>Product id: {$page.params.id}</p>

<a href="/product/123">Other product</a>
