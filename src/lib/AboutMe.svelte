<script lang="ts">
</script>

<div class="about-me">
  <div class="card main">
    <img src="./assets/portrait.png" alt="Portrait" class="portrait"/>
    <div>
      <p class="presentation">
        Hey! I'm Alejandro and I love using modern tools to build reliable and efficient software.
        My current focus is to expand as much as I can my knowledge of game development.
      </p>
    </div>
  </div>
  <div class="links">
    <a href="." class="card link blog">
      Check out my blog
    </a>
    <a href="https:/www.github.com/pascualex" class="card link github">
      GitHub
    </a>
    <a href="https://twitter.com/Pascualex22" class="card link twitter">
      Twitter
    </a>
  </div>
</div>

<style>
  .about-me {
    width: 640px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .card {
    background-color: #f0f0f0;
    border-radius: 24px;
    justify-content: center;
    align-items: center;
  }

  .main {
    padding: 32px;
    display: flex;
    gap: 32px;
  }

  .portrait {
    width: 64px;
    height: 64px;
  }

  .links {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    gap: 20px;
  }

  .link {
    padding: 16px;
    display: flex;
  }
  .link:hover {
    font-weight: bold;
    color: #f0f0f0;
  }

  .blog {
    flex: 3;
  }
  .blog:hover {
    background-color: #00B397;
  }

  .github {
    flex: 1;
  }
  .github:hover {
    background-color: #F47351;
  }

  .twitter {
    flex: 1;
  }
  .twitter:hover {
    background-color: #1da1f2;
  }
</style>
