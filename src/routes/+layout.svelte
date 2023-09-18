<header>
  <div class="navcontainer">
    <nav aria-label="breadcrumb">
      <ul>
        <li><a href="/" class="navlink">Home</a></li>
      </ul>
    </nav>
    <a href="/"><img src="logo.svg" width="48px" height="48px" alt="logo" /></a>
    <nav aria-label="breadcrumb">
      <ul>
        <li><a href="/" class="navlink">About</a></li>
      </ul>
    </nav>
  </div>
</header>
<main class="main">
  <slot />
</main>

<style>
  .navcontainer {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: calc(100vw - 100%);
  }
  header {
    background-color: var(--sk-back-4);
    position: fixed;
    top: 0rem;
    width: 100%;
    height: 6%;
  }

  img {
    align-self: center;
  }

  nav {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  .navlink {
    font-size: larger;
  }

  .navlink:hover {
    background: var(--primary-hover);
    color: black;
  }

  .main {
    margin-top: 4rem;
  }
</style>
