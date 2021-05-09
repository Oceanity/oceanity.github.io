$(document).ready(function() {
  $('#all-wrapper').fadeIn(function() {
// Get Random Enemy (use seed for fixed)
var filteredEnemies = enemyData.filter(function(enemy) { return !enemy.boss; });
var enemyShown = filteredEnemies[Math.floor(Math.random() * (filteredEnemies.length))];
// Variables
var attackLength = 2500,
    attackMessage = 'tried PSI Bitstorm α!',
    statusMessage = '{amount} HP of damage to ' + (enemyShown['the-flag'] ? 'The ' : '') + enemyShown.name + '!',
    attackSprite = baseURL + 'starstorm-alpha-noloop.gif',
sounds.attack = new Audio(baseURL + 'starstorm-alpha.ogg')
// Set volumes
setVolumes()
// Set text
alertMessage.innerHTML = '<span class="name">{name}</span> ';
// Set up enemy HTML
enemyWrapper.classList.add('enemy');
enemyWrapper.classList.add(enemyShown.size);
enemyWrapper.appendChild(enemyImage);
enemyImage.addEventListener('load', attackHtml);
enemyImage.src = baseURL + enemyShown.sprite;
// Set up attack HTML
function attackHtml() {
  alertWrapper.style.opacity = '1';
	printOut(attackMessage, alertMessage, startupAudio, function() {
    setTimeout(function () {
      attackWrapper.appendChild(attackImage);
      attackImage.addEventListener('load', secondMessage);
      attackImage.src = attackSprite;
    }, 250);
  });
}
// Second Message
// Set delay for second message and sound effect
function secondMessage() {
  attackAudio.play();
  setTimeout(function() {
    alertMessage.innerHTML = '';
    damageFlash();
    printOut(statusMessage, alertMessage, hitAudio, function() {
      die();
      setTimeout(function() {
        victoryAudio.play();
        alertMessage.classList.add('you-win');
        alertWrapper.classList.add('no-bullet');
        alertMessage.innerHTML = '{name} cheered {amount}!';
        alertUserMessage.style.display = 'block';
      }, 1000);
    });
  }, attackLength);
}
  })
})