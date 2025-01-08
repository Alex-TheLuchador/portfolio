<script setup>
</script>

<template>
  <div class="center-container">
    <div id="description">
      <h3>STARFLEET LOGS</h3>
      <p><strong>NAME:</strong> Alex Hernandez</p>
      <p><strong>DIVISION:</strong> Operations and Engineering (Cloud, AI, DevOps)</p>
      <p><strong>RANK:</strong>Lieutenant Commander</p>
      <p><strong>PRIMARY SKILLS:</strong> Microsoft Azure, PowerShell, IaC</p>
      <p><strong>RESIDENCE:</strong> Earth (Spring, Texas)</p>
      <p><strong>MORE INFO:</strong> <a href="https://www.linkedin.com/in/itsalexh/">LinkedIn</a>, <a
          href="https://github.com/Alex-TheLuchador">GitHub</a></p>
    </div>

    <img class="profile-pic" src="../../images/me1.jpg">
  </div>
</template>

<style scoped>
* {
  color: rgb(11, 161, 6);
  font-family: "Space Grotesk", serif;
}

.center-container {
  display: flex;
  justify-content: left;
  align-items: flex-start;
  height: 100vh;
  /* Full viewport height */
}

.center-container img {
  margin-top: 10rem;
  margin-left: 6rem;
  width: 22rem;
  border-radius: 4rem;
}

#description {
  margin-top: 15rem;
  margin-left: 9rem;
  text-align: left;
  /* background-image: url('../../images/starfleet.png');
  background-size: 15rem;
  background-position: center;
  padding: 4rem 0rem;
  background-repeat: no-repeat; */
}

#description p {
  max-width: 30ch;
  overflow-wrap: break-word;
}

/* Media query for smaller screens */
@media (max-width: 768px) {
  .center-container {
    flex-direction: column;
    align-items: center;
  }

  .center-container img {
    margin-top: 2rem;
    margin-left: 0;
    margin-bottom: 2rem;
  }

  #description {
    text-align: center;
    margin-left: 0;
    margin-top: 3rem;
  }
}
</style>
