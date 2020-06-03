<template>
  <div id="app">
    <div class="topnav">
      <a>Mem-Challenge Java Profiler</a>
    </div>
    <img src="./assets/web-ui.png" width="100%" >
    <p> </p>
    <p> </p>
    <div class="svg-wrapper">
      <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
        <rect class="shape" height="60" width="320" />
      </svg>
       <div class="text">O Profiler</div>
    </div>
    <!-- -->
    <ul>
      <li>As allowed that assumptions would be made, here was assumed that
      implementing a css grid with hundreds of cells (representing each byte of memory) would not be suggestive,so,
       a nested tree map of grids was used instead.<br>
       Hovering upon region shows : The Size of the Memory Region and The Data Type of the Memory Region<br>
       Clicking region shows regions inside the selected region</li>
    </ul>

    <!-- -->

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*borda de cima*/
  margin-top: 0px;
}
</style>

<!--Topbar estilo -->
<style>
body {
  padding: 0px;
  margin: 0px;
  font-family: Arial, Helvetica, sans-serif;
}

.topnav {
  margin: 0px;
  padding: 0px;
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #4CAF50;
  color: white;
}
</style>

<!-- estilo grade-->
<style>

</style>
