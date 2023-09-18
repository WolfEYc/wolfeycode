<head>
  <title>WolfeyCode</title>
</head>

<div class="container">
  <h1 class="welcomer">Wolfey's Fullstack Apps</h1>
  <div class="project" style="--theme-color: hsl(12, 94%, 62%)">
    <a class="project-title" href="/purchase?page=0">Purchases-Tracker</a>
    <ul>
      <li>Filter & search customers and purchases</li>
      <li>Get detailed customer data from a related purchase</li>
      <li>See customer purchases at a specific merchant</li>
      <li>Detect potentially fraud purchases</li>
    </ul>
    <small>Backend:<br />Rust, Postgres</small>
  </div>
  <div class="project" style="--theme-color: #3776ab">
    <a class="project-title" data-sveltekit-reload href="/drilling-datastream"
      >Drilling-DataStream</a
    >
    <ul>
      <li>Use JPMorgan Chase's Perspective to view a drilling datastream</li>
      <li>
        Perform group by, split by, where conditions, and change the chart type
      </li>
      <li>
        Change which columns are being viewed, and watch them stream in live
      </li>
      <li>
        It is looping over static <a
          style="color: #3776ab"
          href="https://www.kaggle.com/datasets/cboychinedu/hole-deviation"
        >
          data
        </a>
      </li>
    </ul>
    <small
      >Backend:<br />Python, Pandas,
      <a href="https://www.tornadoweb.org/en/stable/index.html">Tornado</a>,
      <a href="https://perspective.finos.org/">Perspective</a>
    </small>
  </div>
</div>

<style>
  .project {
    width: 100%;
    text-align: left;
    margin-bottom: 1%;
    padding: 2%;
    border-radius: 25px;
    border: 1px solid var(--theme-color);
  }
  a {
    color: var(--theme-color);
  }
  .project-title {
    font-size: xx-large;
  }
  .welcomer {
    padding-top: 2%;
    margin-bottom: 2%;
    text-align: center;
  }
  li {
    color: var(--serious-white);
  }
</style>
