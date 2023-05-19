const header = document.getElementsByTagName('header').item(0);
const aside = document.getElementsByTagName('aside').item(0);
const main = document.getElementsByTagName('main').item(0);

if (header) {
	header.innerHTML = `<div class="container">
	<a class="header-link" href="/">Home</a>
    <a class="header-link" href="/PlayStation/PSX">PlayStation X</a>
    <a class="header-link" href="/PlayStation/PS2">PlayStation 2</a>
    <a class="header-link" href="/PlayStation/PS3">PlayStation 3</a>
    <a class="header-link" href="/PlayStation/PS4">PlayStation 4</a>
    <a class="header-link" href="/PlayStation/PSP">PlayStation Portable</a>
    <a class="header-link" href="/PlayStation/PSVita">PlayStation Vita</a>
    <a class="header-link" href="https://discord.gg/tWFDYBj9ZC" target="_blank">Join our server!</a>
    </div>`;
}

if (aside && main) {
	if (main.children.length <= 0) {
		main.innerHTML = '<center><h1>There are no articles here yet.</h1></center>';

		aside.remove();
	}

	for (const child of main.children) {
		const id = child.id;
		const text = child.children.item(0).innerHTML;

		if (id) aside.innerHTML += `<a class="aside-link" href="#${id}">${text}</a>`;
	}
}
