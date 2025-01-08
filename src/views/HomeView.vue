<script setup>
import { ref, onMounted } from 'vue';

const descriptionVisible = ref(false);

onMounted(() => {
  setTimeout(() => {
    descriptionVisible.value = true;
  }, 100); // Delay to start the animation
});
</script>

<template>
  <div class="center-container">
    <div :class="['description', { 'visible': descriptionVisible }]">
      <h2>STARFLEET LOGS</h2>
      <h3>BASIC INFO</h3>
      <p><strong>NAME:</strong> Alex Hernandez</p>
      <p><strong>DIVISION:</strong> Operations and Engineering (Cloud, AI, DevOps)</p>
      <p><strong>RANK:</strong> Lieutenant Commander</p>
      <p><strong>PRIMARY SKILLS:</strong> Microsoft Azure, PowerShell, IaC</p>
      <p><strong>RESIDENCE:</strong> Earth (Spring, Texas)</p>
      <p><strong>MORE INFO:</strong> <a href="https://www.linkedin.com/in/itsalexh/">LinkedIn</a>, <a
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
  overflow: hidden;
}

.description h2::before,
.description h3::before,
.description p::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(11, 161, 6);
  transition: transform 0.65s ease-in-out, background-color 0.5s ease-in-out 0.65s;
  transform: translateX(0);
}

.description.visible h2::before,
.description.visible h3::before,
.description.visible p::before {
  transform: translateX(100%);
  background-color: transparent;
}
</style>
