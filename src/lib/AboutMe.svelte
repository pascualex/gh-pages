<script lang="ts">
</script>

<div class="about-me">
  <div class="card main">
    <img class="portrait" src="src/assets/portrait.png" alt="Portrait"/>
    <div>
      <p class="presentation">
        Hey! I'm Alejandro and I love using modern tools to build reliable and efficient solutions to challenging problems.
        My current focus is to expand as much as I can my game development knowledge.
      </p>
    </div>
  </div>
  <div class="links">
    <div class="card link blog">
    Check out my blog
    </div>
    <div class="card link github">
      GitHub
    </div>
    <div class="card link twitter">
      Twitter
    </div>
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
    background-color: rgb(240, 240, 240);
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

  .blog {
    flex: 3;
  }

  .github {
    flex: 1;
  }

  .twitter {
    flex: 1;
  }
</style>
