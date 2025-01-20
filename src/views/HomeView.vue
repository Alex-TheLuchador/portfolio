<script setup>
import { ref } from 'vue';
</script>

<template>
  <div class="center-container">
    <div class="typewriter description">
      <h2>STARFLEET PROFILE</h2>
      <br>
      <h3>BASIC INFO</h3>
      <br>
      <p><strong>NAME:</strong><br>--- Alex Hernandez</p>
      <br>
      <p><strong>DIVISION:</strong><br>--- Operations & Engineering<br>----- (Cloud, AI, DevOps)</p>
      <br>
      <p><strong>RANK:</strong><br>--- LT. Commander</p>
      <br>
      <p><strong>PRIMARY SKILLS:</strong><br>--- Microsoft Azure,<br>--- PowerShell, IaC</p>
      <br>
      <p><strong>RESIDENCE:</strong><br>--- Earth (Spring, Texas)</p>
      <br>
      <p><strong>MORE INFO:</strong><br>--- <a href="https://www.linkedin.com/in/itsalexh/">LinkedIn</a><br>--- <a
          href="https://github.com/Alex-TheLuchador">GitHub</a></p>
    </div>

    <img class="profile-pic" src="../../images/me1.jpg">
  </div>
</template>

<style scoped>
.description h2,
.description h3,
.description p {
  position: relative;
}

.description h2,
.description h3 {
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
.typewriter p {
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
