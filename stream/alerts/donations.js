// Get Random Enemy (use seed for fixed)
var filteredEnemies = enemyData.filter(function(enemy) { return !enemy.boss; });
var enemyShown = enemyData[Math.floor(Math.random() * (enemyData.length))];
// Variables
var attackLength = 2500,
    attackMessage = 'tried PSI Donate Ω!',
    statusMessage = dataContainer.dataset.amount + ' HP of damage to ' + (enemyShown.theFlag ? 'The ' : '') + enemyShown.name + '!',
    attackSprite = baseURL + 'fire-omega-noloop.gif',
    startupAudio = new Audio(baseURL + 'psi.ogg'),
    attackAudio = new Audio(baseURL + 'fire-omega.ogg'),
    hitAudio = new Audio(baseURL + 'enemyhit.ogg'),
    deathAudio = new Audio(baseURL + 'enemydie.ogg'),
    victoryAudio = new Audio(baseURL + 'defeatenemy.ogg'),
    textAudio = new Audio(baseURL + 'text.ogg');
// Set volumes
startupAudio.volume = 0.5;
attackAudio.volume = 0.3;
deathAudio.volume = 0.3;
hitAudio.volume = 0.3;
victoryAudio.volume = 0.5;
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
  startupAudio.play();
	printOut(attackMessage, alertMessage, function() {
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
    hitAudio.play();
    alertMessage.innerHTML = '';
    printOut(statusMessage, alertMessage, function() {
      die();
      setTimeout(function() {
        victoryAudio.play();
        alertMessage.classList.add('you-win');
        alertWrapper.classList.add('no-bullet');
        alertMessage.innerHTML = '{name} donated {amount}';
        alertUserMessage.style.display = 'block';
      }, 1000);
    });
    damageFlash();
  }, attackLength);
}

function damageFlash() {
  var index = 0,
      count = 5,
  		delay = 50;
  var flash = function() {
  	if (index < count) {
      enemyImage.style.opacity = (index % 2 == 0) ? '1' : '0';
      index++;
      setTimeout(flash,delay);
    }
  }
  flash();
}

function die() {
  enemyImage.style.transition = 'opacity 0.5s';
  enemyImage.style.opacity = '0';
  deathAudio.play();
}