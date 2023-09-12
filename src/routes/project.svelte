<script>
    /**
     * @type {string}
     */
    export let title;

	/**
     * @type {string}
     */
	 export let href;
</script>

<a href={href} role="button" class="outline">
    <hgroup>
        <h2>{title}</h2>
        <ul>
            <slot/>
        </ul>
    </hgroup>
    <small>Backend:<br/>Rust, Postgres</small>
</a>

<style>
    h2 {
        color: var(--primary);
    }

    a {
        width: 100%;
        text-align: left;
    }

    small {
        color: var(--chill-white);
    }
</style>