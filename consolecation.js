function consolecation(type, message) {
  const consoleSimulation = document.querySelector(`.console-msg--${type}`);
  consoleSimulation.classList.remove('hide');
  console[type](message);
}
