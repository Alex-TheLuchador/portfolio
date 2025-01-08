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
      <h3>DUTIES</h3>
      <p><strong>CURRENT ROLE:</strong> Senior Systems Engineer</p>
      <p><strong>SUMMARY:</strong></p>
      <ul>
        <li>Develop automation for Azure deployments using PowerShell and Bicep</li>
        <li>Create infrastructure for AI with Azure OpenAI and Databricks</li>
        <li>Identify points of improvement in cloud environments</li>
      </ul>
      <p><strong>HIGHLIGHTS:</strong></p>
      <ul>
        <li>Saved the company over $100,000 per month by developing automation to archive unused assets</li>
        <li>2023 Achievement in Excellence Award winner for my contributions to a high-stakes engagement</li>
      </ul>
      <p><strong>MORE INFO:</strong> <a href="https://www.linkedin.com/in/itsalexh/">LinkedIn</a>, <a href="https://github.com/Alex-TheLuchador">GitHub</a></p>
    </div>

    <img class="profile-pic" src="../../images/me1.jpg">
  </div>
</template>

<style scoped>
.description h2,
.description h3,
.description p,
.description ul {
  position: relative;
  overflow: hidden;
}

.description h2,
.description h3 {
  text-align: center;
}

.description p,
.description ul,
.description li {
  text-align: left;
}

.description h2::before,
.description h3::before,
.description p::before,
.description ul::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(11, 161, 6);
  transition: transform 1s ease-in-out, background-color 0.5s ease-in-out 1s;
  transform: translateX(0);
}

.description li {
  position: relative;
}

.description li::before {
  content: '';
  position: absolute;
  top: 0;
  left: -1.5rem; /* Adjust this value to position the bar correctly */
  width: calc(100% + 1.5rem); /* Adjust this value to cover the entire list item */
  height: 100%;
  background-color: rgb(11, 161, 6);
  transition: transform 0.65s ease-in-out, background-color 0.5s ease-in-out 0.65s;
  transform: translateX(0);
}

.description.visible h2::before,
.description.visible h3::before,
.description.visible p::before,
.description.visible ul::before,
.description.visible li::before {
  transform: translateX(100%);
  background-color: transparent;
}
</style>
