$(function () {
    if (!window.enemyData)
        window.enemyData = [
            {
                boss: true,
                the: false,
                name: 'Captain Strong',
                hypno: 5,
                size: 'big',
                sprite: 'Captain%20Strong.gif',
                music: 102,
            },
            {
                boss: true,
                the: false,
                name: 'Carbon Dog',
                hypno: 1,
                size: 'big',
                sprite: 'Carbon%20Dog.gif',
                music: 103,
            },
            {
                boss: true,
                the: false,
                name: 'Clumsy Robot',
                hypno: 1,
                size: 'small',
                sprite: 'Clumsy%20Robot.gif',
                music: 148,
            },
            {
                boss: true,
                the: false,
                name: 'Dept. Store Spook',
                hypno: 5,
                size: 'big',
                sprite: 'Department%20Store%20Spook.gif',
                music: 102,
            },
            {
                boss: true,
                the: false,
                name: 'Diamond Dog',
                hypno: 1,
                size: 'big',
                sprite: 'Diamond%20Dog.gif',
                music: 97,
            },
            {
                boss: true,
                the: false,
                name: 'Electro Specter',
                hypno: 1,
                size: 'big',
                sprite: 'Electro%20Specter.gif',
                music: 104,
            },
            {
                boss: true,
                the: false,
                name: 'Everdred',
                hypno: 5,
                size: 'big',
                sprite: 'Everdred.gif',
                music: 98,
            },
            {
                boss: true,
                the: false,
                name: 'Evil Mani-Mani',
                hypno: 5,
                size: 'big',
                sprite: 'Evil%20Mani%20Mani.gif',
                music: 148,
            },
            {
                boss: true,
                the: false,
                name: 'Frank',
                hypno: 5,
                size: 'big',
                sprite: 'Frank.gif',
                music: 100,
            },
            {
                boss: true,
                the: false,
                name: 'Frankystein Mark II',
                hypno: 1,
                size: 'big',
                sprite: 'Frankystein%20Mark%20II.gif',
                music: 102,
            },
            {
                boss: true,
                the: true,
                name: 'Guardian Digger',
                hypno: 1,
                size: 'big',
                sprite: 'Guardian%20Digger.gif',
                music: 103,
            },
            {
                boss: true,
                the: true,
                name: 'Guardian General',
                hypno: 5,
                size: 'big',
                sprite: 'Guardian%20General.gif',
                music: 103,
            },
            {
                boss: true,
                the: false,
                name: 'Giygas',
                hypno: 0,
                size: 'big',
                sprite: 'Giygas.gif',
                music: 105,
            },
            {
                boss: true,
                the: false,
                name: 'Heavily Armed Pokey',
                hypno: 5,
                size: 'big',
                sprite: 'Heavily%20Armored%20Pokey.gif',
                music: 0,
            },
            {
                boss: true,
                the: false,
                name: 'Kraken',
                hypno: 1,
                size: 'big',
                sprite: 'Kraken.gif',
                music: 104,
            },
            {
                boss: true,
                the: false,
                name: "Oceanity's Nightmare",
                hypno: 5,
                size: 'big',
                sprite: 'Ness%27s%20Nightmare.gif',
                music: 148,
            },
            {
                boss: true,
                the: false,
                name: 'Master Barf',
                hypno: 5,
                size: 'big',
                sprite: 'Master%20Barf.gif',
                music: 99,
            },
            {
                boss: true,
                the: false,
                name: 'Master Belch',
                hypno: 10,
                size: 'big',
                sprite: 'Master%20Belch.gif',
                music: 99,
            },
            {
                boss: true,
                the: true,
                name: 'Mini Barf',
                hypno: 1,
                size: 'small',
                sprite: 'Minibarf.gif',
                music: 99,
            },
            {
                boss: true,
                the: false,
                name: 'Mondo Mole',
                hypno: 1,
                size: 'big',
                sprite: 'Mondo%20Mole.gif',
                music: 103,
            },
            {
                boss: true,
                the: false,
                name: 'Mr. Carpainter',
                hypno: 5,
                size: 'big',
                sprite: 'Carpainter.gif',
                music: 148,
            },
            {
                boss: true,
                the: false,
                name: 'Plague Rat of Doom',
                hypno: 1,
                size: 'big',
                sprite: 'Plague%20Rat%20of%20Doom.gif',
                music: 103,
            },
            {
                boss: true,
                the: true,
                name: 'Shrooom!',
                hypno: 5,
                size: 'big',
                sprite: 'Shrooom%21.gif',
                music: 103,
            },
            {
                boss: true,
                the: true,
                name: 'Starman Deluxe',
                hypno: 1,
                size: 'big',
                sprite: 'Starman%20Deluxe.gif',
                music: 97,
            },
            {
                boss: true,
                the: true,
                name: 'Starman Junior',
                hypno: 1,
                size: 'big',
                sprite: 'Starman%20Junior.gif',
                music: 148,
            },
            {
                boss: true,
                the: false,
                name: 'Thunder and Storm',
                hypno: 5,
                size: 'big',
                sprite: 'Thunder%20and%20Storm.gif',
                music: 104,
            },
            {
                boss: true,
                the: false,
                name: 'Titanic Ant',
                hypno: 5,
                size: 'big',
                sprite: 'Titanic%20Ant.gif',
                music: 103,
            },
            {
                boss: true,
                the: false,
                name: 'Trillionage Sprout',
                hypno: 1,
                size: 'big',
                sprite: 'Trillionage%20Sprout.gif',
                music: 103,
            },
            {
                boss: false,
                the: true,
                name: 'Abstract Art',
                hypno: 1,
                size: 'big',
                sprite: 'Abstract%20Art.gif',
            },
            {
                boss: false,
                the: true,
                name: 'Annoying Old Party Man',
                hypno: 5,
                size: 'big',
                sprite: 'Annoying%20Old%20Party%20Man.gif',
            },
            {
                boss: false,
                the: true,
                name: 'Annoying Reveler',
                hypno: 5,
                size: 'big',
                sprite: 'Annoying%20Reveler.gif',
            },
            {
                boss: false,
                the: true,
                name: 'Arachnid!!!',
                hypno: 0,
                size: 'small',
                sprite: 'Arachnid%21%21%21.gif',
            },
            {
                boss: false,
                the: true,
                name: 'Arachnid!',
                hypno: 0,
                size: 'small',
                sprite: 'Arachnid%21%21.gif',
            },
            {
                boss: false,
                the: true,
                name: 'Armored Frog',
                hypno: 5,
                size: 'small',
                sprite: 'Armored%20Frog.gif',
            },
            {
                boss: false,
                the: true,
                name: 'Atomic Power Robot',
                hypno: 1,
                size: 'big',
                sprite: 'Atomic%20Power%20Robot.gif',
            },
            {
                boss: false,
                the: true,
                name: 'Attack Slug',
                hypno: 0,
                size: 'small',
                sprite: 'Attack%20Slug.gif',
            },
            {
                boss: false,
                the: true,
                name: 'Bad Buffalo',
                hypno: 1,
                size: 'big',
                sprite: 'Bad%20Buffalo.gif',
            },
            {
                boss: false,
                the: true,
                name: 'Beautiful UFO',
                hypno: 0,
                size: 'small',
                sprite: 'Beautiful%20UFO.gif',
            },
            {
                boss: false,
                the: true,
                name: 'Big Pile of Puke',
                hypno: 5,
                size: 'big',
                sprite: 'Big%20Pile%20of%20Puke.gif',
            },
            {
                boss: false,
                the: true,
                name: 'Bionic Kraken',
                hypno: 1,
                size: 'big',
                sprite: 'Bionic%20Kraken.gif',
            },
            {
                boss: false,
                the: true,
                name: 'Black Antoid',
                hypno: 10,
                size: 'small',
                sprite: 'Black%20Antoid.gif',
            },
            {
                boss: false,
                the: true,
                name: 'Care Free Bomb',
                hypno: 1,
                size: 'big',
                sprite: 'Carefree%20Bomb.gif',
            },
            {
                boss: false,
                the: true,
                name: 'Cave Boy',
                hypno: 1,
                size: 'big',
                sprite: 'Cave%20Boy.gif',
            },
            {
                boss: false,
                the: true,
                name: 'Chomposaur',
                hypno: 5,
                size: 'big',
                sprite: 'Chomposaur.gif',
            },
            {
                boss: false,
                the: true,
                name: 'Coil Snake',
                hypno: 10,
                size: 'big',
                sprite: 'Coil%20Snake.gif',
            },
            {
                boss: false,
                the: true,
                name: 'Conducting Menace',
                hypno: 1,
                size: 'big',
                sprite: 'Conducting%20Menace.gif',
            },
            {
                boss: false,
                the: true,
                name: 'Conducting Spirit',
                hypno: 1,
                size: 'big',
                sprite: 'Conducting%20Spirit.gif',
            },
            {
                boss: false,
                the: true,
                name: 'Cop',
                hypno: 5,
                size: 'big',
                sprite: 'Cop.gif',
            },
            {
                boss: false,
                the: true,
                name: 'Cranky Lady',
                hypno: 5,
                size: 'big',
                sprite: 'Cranky%20Lady.gif',
            },
            {
                boss: false,
                the: true,
                name: 'Crazed Sign',
                hypno: 10,
                size: 'big',
                sprite: 'Crazed%20Sign.gif',
            },
            {
                boss: false,
                the: true,
                name: 'Crested Booka',
                hypno: 10,
                size: 'big',
                sprite: 'Crested%20Booka.gif',
            },
            {
                boss: false,
                the: true,
                name: 'Criminal Caterpillar',
                hypno: 10,
                size: 'big',
                sprite: 'Criminal%20Caterpillar.gif',
            },
            {
                boss: false,
                the: true,
                name: "Cute Li'l UFO",
                hypno: 0,
                size: 'small',
                sprite: 'Cute%20Li%27l%20UFO.gif',
            },
            {
                boss: false,
                the: true,
                name: 'Fobby',
                hypno: 0,
                size: 'small',
                sprite: 'Fobby.gif',
            },
            {
                boss: false,
                the: true,
                name: "Li'l UFO",
                hypno: 0,
                size: 'small',
                sprite: 'Li%27l%20UFO.gif',
            },
            {
                boss: false,
                the: true,
                name: 'Mobile Sprout',
                hypno: 0,
                size: 'small',
                sprite: 'Mobile%20Sprout.gif',
            },
            {
                boss: false,
                the: true,
                name: 'Mole Playing Rough',
                hypno: 1,
                size: 'small',
                sprite: 'Mole%20Playing%20Rough.gif',
            },
            {
                boss: false,
                the: true,
                name: 'Mr. Batty',
                hypno: 0,
                size: 'small',
                sprite: 'Mr%20Batty.gif',
            },
            {
                boss: false,
                the: true,
                name: 'Runaway Dog',
                hypno: 10,
                size: 'small',
                sprite: 'Runaway%20Dog.gif',
            },
            {
                boss: false,
                the: true,
                name: 'Spiteful Crow',
                hypno: 5,
                size: 'small',
                sprite: 'Spiteful%20Crow.gif',
            },
            {
                boss: false,
                the: true,
                name: 'Starman',
                hypno: 5,
                size: 'big',
                sprite: 'Starman.gif',
            },
            {
                boss: false,
                the: true,
                name: 'Yes Man Junior',
                hypno: 5,
                size: 'big',
                sprite: 'Yes%20Man%20Junior.gif',
            },
        ];

    if (!window.musicTracks)
        window.musicTracks = {
            0: 'raid-pokey-means-business.ogg',
            96: 'raid-battle-weird-opponent.ogg',
            97: 'raid-battle-machine.ogg',
            98: 'raid-battle-mobile-opponent.ogg',
            99: 'raid-battle-belch.ogg',
            100: 'raid-franky.ogg',
            101: 'raid-battle-weak-opponent.ogg',
            102: 'raid-battle-unsettling-opponent.ogg',
            103: 'raid-sanctuary-guardian.ogg',
            104: 'raid-kraken.ogg',
            105: 'raid-giygas-is-wounded.ogg',
            148: 'raid-otherworldly-foe.ogg',
        };
    if (!window.music) window.music = new Audio();
    // Globals
    let baseURL = 'https://oceanity.github.io/stream/alerts/eb/',
        container = $('#container'),
        enemyImage = document.getElementById('enemy-image'),
        alertSpan = document.createElement('span');
    stringTest = document.createElement('div');

    alertSpan.id = 'alert-span';
    stringTest.id = 'string-test';
    container.append(stringTest);

    let sfx = [
            ['raid', container.data('raid-sound'), 0.4],
            ['help', 'help.ogg', 0.3],
            ['startup', container.data('startup-sound'), 0.4],
            ['attack', container.data('attack-sound'), 0.3],
            ['hit', 'enemyhit.ogg', 0.3],
            ['status', 'ailment.ogg', 0.3],
            ['enemyDie', 'enemydie.ogg', 0.3],
            ['defeatedEnemy', 'defeatenemy.ogg', 0.3],
            ['defeatedBoss', 'defeatboss.ogg', 0.3],
        ],
        sounds = {};

    // Audio Functions
    function LoadAudio(files, cb) {
        if (files.length) {
            let file = files.shift();
            AudioFile(file[1], file[2], function (r) {
                sounds[file[0]] = r;
                LoadAudio(files, cb);
            });
        } else if (cb) cb(true);
    }
    function AudioFile(file, volume, cb) {
        if (file) {
            let a = new Audio(baseURL + 'sfx/' + file);
            a.volume = volume;
            a.load();
            a.onloadeddata = function () {
                if (cb) cb(a);
            };
        } else if (cb) cb(undefined);
    }
    function PlayAudio(name) {
        if (sounds.hasOwnProperty(name) && sounds[name]) sounds[name].play();
    }
    function FadeMusic(callback) {
        if (window.music && !window.music.paused) {
            window.musicIsFading = true;
            window.music.volume -= 0.02;
            if (window.music.volume > 0) setTimeout(FadeMusic, 200);
            else {
                window.musicIsFading = false;
                if (callback) callback();
            }
        }
    }

    // Common Functions
    function getEnemy(boss) {
        let selection = boss
            ? window.enemyData.filter(function (enemy) {
                  return enemy.boss;
              })
            : window.enemyData.filter(function (enemy) {
                  return !enemy.boss;
              });
        return selection[Math.floor(Math.random() * selection.length)];
    }
    function getHypnotizable() {
        let hypnotizeable = [];
        for (let i = 0; i < window.enemyData.length; i++) for (let j = 0; j < window.enemyData[i].hypno; j++) hypnotizeable.push(window.enemyData[i]);
        return hypnotizeable[Math.floor(Math.random() * hypnotizeable.length)];
    }
    function Amount() {
        if (container.data('amount')) {
            switch (container.data('currency')) {
                case 'dollars':
                    return container.data('amount').substr(1) * 100;
                case 'months':
                    return container.data('amount') * 100;
                default:
                    return parseInt(container.data('amount'));
            }
        }
    }

    // Print Animation
    function PrintOut(text, element, sound, cb) {
        let timePerLetter = 20,
            index = 0;
        function PrintNextLetter() {
            if (index == 0) PlayAudio(sound);
            if (index < text.length) {
                // If Space, determine if newline should be added
                if (text[index] == ' ' && index != 0) {
                    let boxWidth = $(element).parent().innerWidth(),
                        lastLine = $(element).html().split('<br>').pop().trim();
                    nextWord = text.substr(index + 1).split(' ')[0];
                    $('#string-test').html(lastLine + ' ' + nextWord);
                    if ($('#string-test').innerWidth() > boxWidth) $(element).html($(element).html() + '<br>');
                }
                $(element).html($(element).html() + text[index++]);
                setTimeout(PrintNextLetter, timePerLetter);
            } else if (cb) cb();
        }
        PrintNextLetter();
    }

    function EnemyName(capitalize) {
        if (window.enemyDisplayed) return (window.enemyDisplayed['the'] ? (capitalize ? 'The ' : 'the ') : '') + window.enemyDisplayed.name;
        return undefined;
    }
    // Get enemy
    switch (container.data('enemy')) {
        case 'hypnotizable':
            window.enemyDisplayed = getHypnotizable();
            break;
        case 'boss':
            window.enemyDisplayed = getEnemy(true);
            break;
        default:
            window.enemyDisplayed = getEnemy(false);
            break;
    }

    // Global lets
    let attackImg = document.createElement('video'),
        enemyImg = document.createElement('img');
    if (container.data('raid')) $('#alert-text-wrap, #alert-image-wrap').hide();
    else {
        let alertImage = $('#alert-image');
        alertImage.append(attackImg);
        if (container.data('shield')) attackImg.classList = 'shield';
    }

    // Document ready, begin code
    $(function () {
        // Remove default styles and HTML classes
        $('html').removeClass();
        $('body style:not([id])').remove();
        $('#alert-text').addClass('bullet');
        $('#alert-message, #alert-user-message').removeAttr('style');
        $('#victory-message').hide();
        // Set up span in Alert
        alertSpan.innerHTML = $('#alert-message').html();
        $('#alert-message').empty().append(alertSpan);
        // Get enemy sprite
        enemyImg.id = 'main-sprite';
        enemyImage.classList = window.enemyDisplayed.size;
        enemyImg.onload = () => {
            // When image loads, begin first message
            if (container.data('raid')) LoadAudio(sfx, Raid);
            else LoadAudio(sfx, FirstMessage);
        };
        enemyImg.src = baseURL + 'img/' + window.enemyDisplayed.sprite;
        enemyImage.appendChild(enemyImg);
        // Create clones for fade effects
        const clones = ['white-sprite', 'black-sprite', 'position-sprite'];
        for (let i in clones) {
            let clonedNode = enemyImg.cloneNode();
            clonedNode.id = clones[i];
            enemyImage.appendChild(clonedNode);
        }
    });
    // Show Raid animation
    function Raid() {
        // Load music
        window.music.volume = 0.5;
        window.music.src = baseURL + 'music/' + window.musicTracks[window.enemyDisplayed.music];
        window.music.load();
        // Load animation
        let introAnim = document.createElement('video');
        container.append(introAnim);
        introAnim.onloadeddata = () => {
            introAnim.play();
            PlayAudio('raid');
            setTimeout(() => {
                let alertBack = $('#alert-span').clone();
                $(introAnim).fadeOut(() => {
                    $('#container').empty();
                });
                $('#alert-text-wrap, #alert-image-wrap').show();
                window.music.volume = 0.5;
                window.music.play();
                PrintOut(' raided the stream!', '#alert-span', null, () => {
                    setTimeout(() => {
                        $('#alert-span').html(alertBack.html());
                        DamageFlash();
                        PrintOut(' called for help.', '#alert-span', 'attack', () => {
                            setTimeout(() => {
                                $('#alert-span').text(container.html());
                                $('#alert-span').html(container.data('amount'));
                                PrintOut(' raiders showed up!', '#alert-span', 'help', () => {});
                            }, 2000);
                        });
                    }, 2000);
                });
            }, 4000);
        };
        introAnim.src = baseURL + 'anim/' + container.data('raid-animation');
    }
    // Print first battle message
    function FirstMessage() {
        PrintOut(container.data('startup-message'), '#alert-span', 'startup', () => {
            setTimeout(Attack, 600);
        });
    }
    // Play attack animation/sound
    function Attack() {
        let attackAnim = container.data('attack-animation'),
            attackLength = parseInt(container.data('attack-length')) | 0;
        // If animation exists, play, otherwise just play sound
        if (attackAnim) {
            attackImg.onloadeddata = () => {
                attackImg.play();
                PlayAudio('attack');
                setTimeout(() => {
                    SecondMessage();
                }, attackLength);
            };
            attackImg.src = baseURL + 'anim/' + attackAnim;
        } else {
            PlayAudio('attack');
            setTimeout(() => {
                SecondMessage();
            }, attackLength);
        }
    }
    // Pick resulting animation
    function SecondMessage() {
        $('#alert-span').empty();
        switch (container.data('followup-animation')) {
            case 'hypnotize':
                Hypnotize();
                break;
            case 'hit':
                Hit();
                break;
            case 'hitdie':
                Hit(Die);
                break;
            case 'booststats':
                BoostStats();
                break;
            default:
                break;
        }
    }
    // Reactions
    function Hypnotize() {
        PrintOut(EnemyName(true) + ' fell asleep!', '#alert-span', null, () => {
            PlayAudio('status');
        });
    }
    function DamageFlash() {
        let index = 0,
            count = 5,
            delay = 50;
        function Flash() {
            if (index++ < count) {
                enemyImage.style.opacity = index % 2 == 0 ? '1' : '0';
                setTimeout(Flash, delay);
            } else {
                enemyImage.style.opacity = '1';
                return;
            }
        }
        Flash();
    }
    function Hit(callback) {
        DamageFlash();
        PlayAudio('hit');
        PrintOut(Amount() + ' HP damage to ' + EnemyName(false) + '.', '#alert-span', null, () => {
            if (callback) setTimeout(callback, 500);
        });
    }
    function Die() {
        PlayAudio('enemyDie');
        $('#main-sprite').fadeOut(400, function () {
            $('#white-sprite').fadeOut(100, function () {
                $('#black-sprite').fadeOut(200, function () {
                    if (container.data('victory-message')) setTimeout(VictoryMessage, 250);
                });
            });
        });
    }
    function BoostStats() {
        PrintOut("Oceanity's viewers increased!", '#alert-span', null, () => {});
    }
    function VictoryMessage() {
        if (!window.music.paused) window.music.pause();
        $('#alert-span').empty();
        PlayAudio(window.enemyDisplayed.boss ? 'defeatedBoss' : 'defeatedEnemy');
        $('#alert-text').removeClass('bullet');
        $('#alert-message')
            .addClass('victory')
            .html(Pluralize(container.data('victory-message')))
            .show();
        $('#alert-user-message').show();
    }

    function Pluralize(input) {
        let amount = container.data('amount') ? parseInt(container.data('amount')) : 0;
        return input.replace('{s}', amount > 1 ? 's' : '');
    }
});
