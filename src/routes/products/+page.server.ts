export async function load() {
	const products = await (await import('$lib/dummy-products.json')).default;
	return products;
}
