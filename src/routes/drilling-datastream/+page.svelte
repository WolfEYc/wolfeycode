<svelte:head>
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
  />
  <script
    type="module"
    src="https://cdn.jsdelivr.net/npm/@finos/perspective-viewer@2.5.1/dist/cdn/perspective-viewer.min.js"
  ></script>

  <script
    type="module"
    src="https://cdn.jsdelivr.net/npm/@finos/perspective-viewer-d3fc@2.5.1/dist/cdn/perspective-viewer-d3fc.min.js"
  >
  </script>

  <link
    rel="stylesheet"
    crossorigin="anonymous"
    href="https://cdn.jsdelivr.net/npm/@finos/perspective-viewer/dist/css/pro.css"
  />
</svelte:head>

<div>
  <perspective-viewer id="Density_Porosity" theme="Pro Dark" />
  <perspective-viewer id="Restivity" theme="Pro Dark" />
  <script type="module">
    import perspective from "https://cdn.jsdelivr.net/npm/@finos/perspective@2.5.1/dist/cdn/perspective.min.js";
    async function DoThing() {
      const Density_Porosity = document.getElementById("Density_Porosity");
      const Restivity = document.getElementById("Restivity");

      // Create a client that expects a Perspective server to accept
      // Websocket connections at the specified URL.
      const websocket = perspective.websocket(
        "wss://hole-dev-stream-xomlbq5lta-uc.a.run.app/websocket"
      );

      /* This shows Perspective running in "server mode": the `table`
	  variable is a proxy for the `Table` we created on the server.
  
	  All operations that are possible through the Javascript API are
	  possible on the Python API as well, thus calling `view()`,
	  `schema()`, `update()` etc on `const table` will pass those
	  operations to the Python `Table`, execute the commands,
	  and return the result back to Javascript.
	  */

      // Load this in the `<perspective-viewer>`.
      const table = await websocket.open_table("data_source_one");
      Density_Porosity.load(table);
      Density_Porosity.restore({
        plugin: "X/Y Line",
        plugin_config: {},
        settings: true,
        theme: "Pro Dark",
        title: null,
        group_by: [],
        split_by: [],
        columns: ["T_Offset", "Density_Porosity", null],
        filter: [],
        sort: [["T_Offset", "asc"]],
        expressions: [],
        aggregates: {},
      });
      Restivity.load(table);
      Restivity.restore({
        plugin: "X/Y Line",
        plugin_config: {},
        settings: true,
        theme: "Pro Dark",
        title: null,
        group_by: [],
        split_by: [],
        columns: ["T_Offset", "Restivity", null],
        filter: [],
        sort: [["T_Offset", "asc"]],
        expressions: [],
        aggregates: {},
      });
    }

    DoThing();
  </script>
</div>

<style>
  div {
    height: 93vh;
    width: 100%;
  }
  perspective-viewer {
    height: 50%;
    width: 100%;
  }
</style>
