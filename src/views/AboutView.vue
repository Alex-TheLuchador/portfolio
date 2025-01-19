<script setup>
import { ref } from 'vue';
</script>

<template>
  <div class="center-container">
    <div class="typewriter description">
      <h2>STARFLEET LOGS</h2>
      <br>
      <h3>DUTIES</h3>
      <br>
      <p><strong>CURRENT ROLE:</strong><br>--- Senior Systems Engineer</p>
      <br>
      <p><strong>SUMMARY:</strong></p>
      <p>--- Develop automation for Azure<br>deployments with PowerShell & Bicep</p>
      <br>
      <p>--- Create infrastructure for AI<br>with Azure OpenAI and Databricks</p>
      <br>
      <p>--- Identify points of improvement<br>within our cloud environments</p>
      <br>
      <p><strong>HIGHLIGHTS:</strong></p>
      <p>--- Saved the company over $100,000<br>per month by developing automation<br>to archive unused cloud assets</p>
      <br>
      <p>--- 2023 Achievement in Excellence<br>Award winner for my contributions<br>
        to a high-stakes engagement</p>
      <br>
      <p><strong>MORE INFO:</strong><br>--- <a href="https://www.linkedin.com/in/itsalexh/">LinkedIn</a>,<br>--- <a
          href="https://github.com/Alex-TheLuchador">GitHub</a></p>
    </div>

    <img class="profile-pic" src="../../images/me1.jpg">
  </div>
</template>

<style scoped>
.description h2,
.description h3,
.description p,
.description ul,
.description li {
  position: relative;
}

.description h2,
.description h3,
.description ul,
.description li {
  text-align: center;
}

.description p {
  text-align: left;
}

.description a {
  color: #fff;
  font-family: monospace;
  font-size: 0.9rem;
}

/* Print first: h2, second: h3, third: p */
.typewriter h2,
.typewriter h3,
.typewriter p,
.description ul,
.description li {
  color: #fff;
  font-family: monospace;
  font-size: 0.9rem;

  overflow: hidden;
  /* Ensures the content is not revealed until the animation */

  /* border-right: .15em solid orange; */
  /* The typwriter cursor */

  white-space: nowrap;
  /* Keeps the content on a single line */

  margin: 0 auto;
  /* Gives that scrolling effect as the typing happens */

  letter-spacing: .15em;
  /* Adjust as needed */

  animation:
    typing 3.5s steps(30, end);
}

/* The typing effect */
@keyframes typing {
  from {
    width: 0
  }

  to {
    width: 100%
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {

  from,
  to {
    border-color: transparent
  }

  50% {
    border-color: orange
  }
}
</style>
