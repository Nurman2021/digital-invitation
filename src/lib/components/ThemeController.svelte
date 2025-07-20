<script>
	import { onMount } from 'svelte';
	import { Sun, Moon, Monitor } from 'lucide-svelte';

	let currentTheme = 'system';
	let isOpen = false;

	const themes = [
		{ name: 'light', label: 'Light', icon: Sun },
		{ name: 'dark', label: 'Dark', icon: Moon },
		{ name: 'system', label: 'System', icon: Monitor }
	];

	function setTheme(theme) {
		currentTheme = theme;
		isOpen = false;

		if (theme === 'system') {
			// Remove theme attribute to use system preference
			document.documentElement.removeAttribute('data-theme');
			localStorage.removeItem('theme');

			// Apply system theme
			const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
				? 'dark'
				: 'light';
			document.documentElement.setAttribute('data-theme', systemTheme);
		} else {
			// Set specific theme
			document.documentElement.setAttribute('data-theme', theme);
			localStorage.setItem('theme', theme);
		}
	}

	function getCurrentThemeIcon() {
		const theme = themes.find((t) => t.name === currentTheme);
		return theme ? theme.icon : Monitor;
	}

	function initTheme() {
		// Check localStorage first
		const savedTheme = localStorage.getItem('theme');

		if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
			currentTheme = savedTheme;
			document.documentElement.setAttribute('data-theme', savedTheme);
		} else {
			// Default to system
			currentTheme = 'system';
			const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
				? 'dark'
				: 'light';
			document.documentElement.setAttribute('data-theme', systemTheme);
		}

		// Listen for system theme changes
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
			if (currentTheme === 'system') {
				document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
			}
		});
	}

	onMount(() => {
		initTheme();
	});
</script>

<!-- Theme Controller -->
<div class="fixed right-6 bottom-6 z-50">
	<div class="dropdown dropdown-top dropdown-end">
		<div
			tabindex="0"
			role="button"
			class="btn btn-circle btn-ghost bg-base-200 border-base-300 hover:bg-base-300 border shadow-lg"
		>
			<svelte:component this={getCurrentThemeIcon()} class="h-5 w-5" />
		</div>

		<ul
			class="dropdown-content menu bg-base-100 rounded-box border-base-300 mb-2 w-52 border p-2 shadow-xl"
		>
			<li class="menu-title">
				<span>Theme</span>
			</li>
			{#each themes as theme}
				<li>
					<button
						class="flex items-center gap-3 {currentTheme === theme.name ? 'active' : ''}"
						on:click={() => setTheme(theme.name)}
					>
						<svelte:component this={theme.icon} class="h-4 w-4" />
						<span>{theme.label}</span>
						{#if currentTheme === theme.name}
							<div class="bg-primary ml-auto h-2 w-2 rounded-full"></div>
						{/if}
					</button>
				</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	.dropdown-content {
		transform: translateY(-8px);
	}

	.btn-circle {
		transition: all 0.2s ease;
	}

	.btn-circle:hover {
		transform: scale(1.05);
	}

	.menu li > *:where(.active) {
		background-color: hsl(var(--p) / 0.2);
		color: hsl(var(--pc));
	}
</style>
