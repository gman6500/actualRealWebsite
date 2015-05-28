alert("Hero! We need your sword in our battle against those... cube lookin things over there... They have stolen our coins and now are coming for you!!! Please help us get back our coins! W A S D control the direction of the sword, Arrow keys to move, if coins are stuck in buildings, press the reset coins to respawn all coins.")
window.requestAnimationFrame(coinTick);
window.requestAnimationFrame(gameTick);
window.requestAnimationFrame(enemyMovement);
window.requestAnimationFrame(updateSword);
window.requestAnimationFrame(hitEnemiesCheck);
window.requestAnimationFrame(safeZoneCheck);
//randomizes coin positions
function randomCoins() {
    console.log('randoming coins')
    spawnCoin('1');
    spawnCoin('2');
    spawnCoin('3');
    spawnCoin('4');
    spawnCoin('5');
    spawnCoin('6');
    spawnCoin('7');
    spawnCoin('8');
    spawnCoin('9');
    spawnCoin('10');
    spawnCoin('11');
    
}
//checks for collision
function collision($div1, $div2) {
    var x1 = $($div1).offset().left;
    var y1 = $($div1).offset().top;
    var h1 = $($div1).outerHeight(true);
    var w1 = $($div1).outerWidth(true);
    var b1 = y1 + h1;
    var r1 = x1 + w1;
    var x2 = $($div2).offset().left;
    var y2 = $($div2).offset().top;
    var h2 = $($div2).outerHeight(true);
    var w2 = $($div2).outerWidth(true);
    var b2 = y2 + h2;
    var r2 = x2 + w2;

    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
    return true;
}
var screenHeight = $(document).outerHeight(true);
var screenWidth = $(document).outerWidth(true);
var fps = 30;
var isLeft = false;
var isUp = false;
var isDown = false;
var isRight = false;
var aimDirection = "";
var score = 100;
var swordBroken=false
var weapon="sword"
var armor='none'
var weaponTicks=20
var playerSpeed=4
var enemySpeed=2.7
var coinGet= new Audio('coinGet.wav')
var enemyDeath= new Audio('enemyDeath.wav')
//the sword object
function Sword() {
    this.aimLeftPos = $('#player').offset().left - $('#player').outerWidth(true); //position of left (offset - width)
    this.aimRightPos = $('#player').offset().left + $('#player').outerWidth(true); //position of right
    this.aimUpPos = $('#player').offset().top + $('#player').outerHeight(true); //(offset either + or - height)
    This.aimDownPos = $('#player').offset().top - $('#player').outerHeight(true);
}
//for returning the right
function updateSwordHitHtml(){
	return(weaponTicks)
}
//adds wep durabillity
function durabillity(){
    console.log('tried to add dur')
    if ($('#score').html()>=5) {
    weaponTicks+=5
    score-=10
    $('#score').html(returnScore)
    $('#swordHits').html(updateSwordHitHtml)
    console.log('added dur')
    };
}
//buys the spear
function spear(){
    if ($('#score').html()>=20) {
        weapon='spear'
        score-=20
        $('#score').html(returnScore)
    };
}
//exchanges for the sword
function sword(){
    weapon='sword'
}
//buys the theives dagger
function theivesDagger(){
    if ($('#score').html()>=30) {
        weapon='theivesDagger'
        score-=30
        $('#score').html(returnScore)
    };
}
//buys the shield
function shield(){
    if ($('#score').html()>=30) {
        weapon='shield'
        score-=30
        $('#score').html(returnScore)
    };
}

$(document).ready(function () {
    spawnCoin('1');
    spawnCoin('2');
    spawnCoin('3');
    spawnCoin('4');
    spawnCoin('5');
    spawnCoin('6');
    spawnCoin('7');
    spawnCoin('8');
    spawnCoin('9');
    spawnCoin('10');
    spawnCoin('11');
    spawnEnemy('1');
    spawnEnemy('2');
    spawnEnemy('3');
    spawnEnemy('4');
    spawnEnemy('5');
    $('#score').html(returnScore)
});
function safeZoneCheck(){
    setTimeout(function(){
        window.requestAnimationFrame(safeZoneCheck)
    if (collision('#safe','#enemy1')) {
        spawnEnemy('1')
    };
    if (collision('#safe','#enemy2')) {
        spawnEnemy('2')
    };

    if (collision('#safe','#enemy3')) {
        spawnEnemy('3')
    };

    if (collision('#safe','#enemy4')) {
        spawnEnemy('4')
    };

    if (collision('#safe','#enemy5')) {
        spawnEnemy('5')
    };

    },1000/fps)
}
//Checks if enemies are hitting the sword
function hitEnemiesCheck(){
	setTimeout(function(){
			window.requestAnimationFrame(hitEnemiesCheck)
            $('#swordHits').html(updateSwordHitHtml)
		
		if (collision('#Sword','#enemy1')) {
			
			if (weaponTicks<=0) {
				
			}else{
                if (weapon==='shield') {
                    if(Math.random()>=0.5){
                        weaponTicks-=1
                        $('#swordHits').html(updateSwordHitHtml())
                    }
                };
            if (weapon==='spear'||weapon==='theivesDagger') {
                weaponTicks-=2
                if (weapon==='theivesDagger') {
                    $('#score').html(addScore);
                };

            }
            if (weapon==='sword') {
            weaponTicks -=1
            };
            enemyDeath.play()
			spawnEnemy('1')
			$('#swordHits').html(updateSwordHitHtml())
			}
		};
		if (collision('#Sword',"#enemy2")) {
			
			if (weaponTicks<=0) {
				
			}else{
                if (weapon==='shield') {
                    if(Math.random()>=0.5){
                        weaponTicks-=1
                        $('#swordHits').html(updateSwordHitHtml())
                    }
                };
            if (weapon==='spear'||weapon==='theivesDagger') {
                weaponTicks-=2
                if (weapon==='theivesDagger') {
                    $('#score').html(addScore);
                };

            }
            if (weapon==='sword') {
            weaponTicks -=1
            };
            enemyDeath.play()
			spawnEnemy('2')
			$('#swordHits').html(updateSwordHitHtml())
			}
		};
		if (collision('#Sword',"#enemy3")) {
			
			if (weaponTicks<=0) {
				
			}else{
                if (weapon==='shield') {
                    if(Math.random()>=0.5){
                        weaponTicks-=1
                        $('#swordHits').html(updateSwordHitHtml())
                    }
                };
            if (weapon==='spear'||weapon==='theivesDagger') {
                weaponTicks-=2
                if (weapon==='theivesDagger') {
                    $('#score').html(addScore);
                };

            }
            if (weapon==='sword') {
            weaponTicks -=1
            };
            enemyDeath.play()
			spawnEnemy('3')
			$('#swordHits').html(updateSwordHitHtml())
			}
		};
		if (collision('#Sword',"#enemy4")) {
			
			if (weaponTicks<=0) {
				
			}else{
                if (weapon==='shield') {
                    if(Math.random()>=0.5){
                        weaponTicks-=1
                        $('#swordHits').html(updateSwordHitHtml())
                    }
                };
            if (weapon==='spear'||weapon==='theivesDagger') {
                weaponTicks-=2
                if (weapon==='theivesDagger') {
                    $('#score').html(addScore);
                };

            }
            if (weapon==='sword') {
            weaponTicks -=1
            };
            enemyDeath.play()
			spawnEnemy('4')
			$('#swordHits').html(updateSwordHitHtml())
			}
		};
		if (collision('#Sword',"#enemy5")) {
			
			if (weaponTicks<=0) {
				
			}else{
                if (weapon==='shield') {
                    if(Math.random()>=0.5){
                        weaponTicks-=1
                        $('#swordHits').html(updateSwordHitHtml())
                    }
                };
            if (weapon==='spear'||weapon==='theivesDagger') {
                weaponTicks-=2
                if (weapon==='theivesDagger') {
                    $('#score').html(addScore);
                };

            }
            if (weapon==='sword') {
            weaponTicks -=1
            };
            enemyDeath.play()
			spawnEnemy('5')
			$('#swordHits').html(updateSwordHitHtml())
			}
		};
		

	},1000/fps)
}
//makes sure the sword is in the right place
function updateSword() {
    setTimeout(function () {
        window.requestAnimationFrame(updateSword)
        if (weapon==="spear") {
            Sword.aimLeftPos = $('#player').offset().left - $('#player').outerWidth(true)*2.5 //position of left (offset - width)
            Sword.aimRightPos = $('#player').offset().left + $('#player').outerWidth(true) //position of right
            Sword.aimUpPos = $('#player').offset().top - $('#player').outerHeight(true)*2.5 //(offset either + or - height)
            Sword.aimDownPos = $('#player').offset().top + $('#player').outerHeight(true)
        }
        if (weapon==="sword") {
            Sword.aimLeftPos = $('#player').offset().left - $('#player').outerWidth(true) //position of left (offset - width)
            Sword.aimRightPos = $('#player').offset().left + $('#player').outerWidth(true) //position of right
            Sword.aimUpPos = $('#player').offset().top - $('#player').outerHeight(true) //(offset either + or - height)
            Sword.aimDownPos = $('#player').offset().top + $('#player').outerHeight(true)
        };
        if (weapon==='theivesDagger') {
            Sword.aimLeftPos = $('#player').offset().left - $('#player').outerWidth(true) //position of left (offset - width)
            Sword.aimRightPos = $('#player').offset().left + $('#player').outerWidth(true) //position of right
            Sword.aimUpPos = $('#player').offset().top - $('#player').outerHeight(true) //(offset either + or - height)
            Sword.aimDownPos = $('#player').offset().top + $('#player').outerHeight(true)
        }
        if (weapon==='shield') {
            Sword.aimLeftPos = $('#player').offset().left - $('#player').outerWidth(true)*0.3 //position of left (offset - width)
            Sword.aimRightPos = $('#player').offset().left + $('#player').outerWidth(true) //position of right
            Sword.aimUpPos = $('#player').offset().top - $('#player').outerHeight(true)*0.7 //(offset either + or - height)
            Sword.aimDownPos = $('#player').offset().top + $('#player').outerHeight(true)*0.5
        };
        if (aimDirection === 'up') {
            $('#Sword').css('top', Sword.aimUpPos + "px")
            $('#Sword').css('left', $('#player').offset().left + "px")
            $('#Sword').html('<img id="SwordImg" src="'+weapon+'Up.png">')
        } else {
            if (aimDirection === 'left') {
                $('#Sword').css('top', $('#player').offset().top + "px")
                $('#Sword').css('left', Sword.aimLeftPos + "px")
                $('#Sword').html('<img id="SwordImg" src="'+weapon+'Left.png">')
            } else {
                if (aimDirection === 'down') {
                    $('#Sword').css('top', Sword.aimDownPos + "px")
                    $('#Sword').css('left', $('#player').offset().left + "px")
                    $('#Sword').html('<img id="SwordImg" src="'+weapon+'Down.png">')
                } else {
                    if (aimDirection === 'right') {
                        $('#Sword').css('top', $('#player').offset().top + "px")
                        $('#Sword').css('left', Sword.aimRightPos + "px")
                        $('#Sword').html('<img id="SwordImg" src="'+weapon+'Right.png">')
                    }
                }
            }
        }
    }, 1000 / fps)
}

//moves the enemies
function enemyMovement() {
    // console.log('enemy tick')
    setTimeout(function () {
        window.requestAnimationFrame(enemyMovement)

        if (collision('#player', '#enemy1')) {
            //you die
            if (armor==='none') {
                location.reload()
            };
            if (armor==='light') {
                armor='none'
            };
            if (armor==='medium') {
                armor='light'
            };
            if (armor==='heavy') {
                armor='medium'
            };
        } else {
            var enemyTop = $('#enemy1').offset().top;
            var enemyLeft = $('#enemy1').offset().left;
            var playerTop = $('#player').offset().top;
            var playerLeft = $('#player').offset().left;
            if (enemyLeft < playerLeft) {
                $('#enemy1').css('left', parseFloat($('#enemy1').css('left')) + enemySpeed + "px")
            }
            if (enemyLeft > playerLeft) {
                $('#enemy1').css('left', parseFloat($('#enemy1').css('left')) - enemySpeed + "px")
            }
            if (enemyTop < playerTop) {
                $('#enemy1').css('top', parseFloat($('#enemy1').css('top')) + enemySpeed + "px")
            }
            if (enemyTop > playerTop) {
                $('#enemy1').css('top', parseFloat($('#enemy1').css('top')) - enemySpeed + "px")
            }
        }
        if (collision('#player', '#enemy2')) {
            //you die
            if (armor==='none') {
                location.reload()
            };
            if (armor==='light') {
                armor='none'
            };
            if (armor==='medium') {
                armor='light'
            };
            if (armor==='heavy') {
                armor='medium'
            };

        } else {
            var enemyTop = $('#enemy2').offset().top;
            var enemyLeft = $('#enemy2').offset().left;
            var playerTop = $('#player').offset().top;
            var playerLeft = $('#player').offset().left;
            if (enemyLeft < playerLeft) {
                $('#enemy2').css('left', parseFloat($('#enemy2').css('left')) + enemySpeed + "px")
            }
            if (enemyLeft > playerLeft) {

                $('#enemy2').css('left', parseFloat($('#enemy2').css('left')) - enemySpeed + "px")
            }

            if (enemyTop < playerTop) {

                $('#enemy2').css('top', parseFloat($('#enemy2').css('top')) + enemySpeed + "px")
            }
            if (enemyTop > playerTop) {

                $('#enemy2').css('top', parseFloat($('#enemy2').css('top')) - enemySpeed+ "px")
            }
        }
        if (collision('#player', '#enemy3')) {
            if (armor==='none') {
                location.reload()
            };
            if (armor==='light') {
                armor='none'
            };
            if (armor==='medium') {
                armor='light'
            };
            if (armor==='heavy') {
                armor='medium'
            };

        } else {
            var enemyTop = $('#enemy3').offset().top;
            var enemyLeft = $('#enemy3').offset().left;
            var playerTop = $('#player').offset().top;
            var playerLeft = $('#player').offset().left;
            if (enemyLeft < playerLeft) {
                $('#enemy3').css('left', parseFloat($('#enemy3').css('left')) + enemySpeed + "px")
            }
            if (enemyLeft > playerLeft) {

                $('#enemy3').css('left', parseFloat($('#enemy3').css('left')) - enemySpeed + "px")
            }
            if (enemyTop < playerTop) {

                $('#enemy3').css('top', parseFloat($('#enemy3').css('top')) + enemySpeed + "px")
            }
            if (enemyTop > playerTop) {
                $('#enemy3').css('top', parseFloat($('#enemy3').css('top')) - enemySpeed + "px")
            }
        }
        if (collision('#player', '#enemy4')) {
            if (armor==='none') {
                location.reload()
            };
            if (armor==='light') {
                armor='none'
            };
            if (armor==='medium') {
                armor='light'
            };
            if (armor==='heavy') {
                armor='medium'
            };

        } else {
            var enemyTop = $('#enemy4').offset().top;
            var enemyLeft = $('#enemy4').offset().left;
            var playerTop = $('#player').offset().top;
            var playerLeft = $('#player').offset().left;
            if (enemyLeft < playerLeft) {
                $('#enemy4').css('left', parseFloat($('#enemy4').css('left')) + enemySpeed+ "px")
            }
            if (enemyLeft > playerLeft) {

                $('#enemy4').css('left', parseFloat($('#enemy4').css('left')) - enemySpeed + "px")
            }
            if (enemyTop < playerTop) {

                $('#enemy4').css('top', parseFloat($('#enemy4').css('top')) + enemySpeed + "px")
            }
            if (enemyTop > playerTop) {
                $('#enemy4').css('top', parseFloat($('#enemy4').css('top')) - enemySpeed + "px")
            }
        }
        if (collision('#player', '#enemy5')) {
            if (armor==='none') {
                location.reload()
            };
            if (armor==='light') {
                armor='none'
            };
            if (armor==='medium') {
                armor='light'
            };
            if (armor==='heavy') {
                armor='medium'
            };

        } else {
            var enemyTop = $('#enemy5').offset().top;
            var enemyLeft = $('#enemy5').offset().left;
            var playerTop = $('#player').offset().top;
            var playerLeft = $('#player').offset().left;
            if (enemyLeft < playerLeft) {
                $('#enemy5').css('left', parseFloat($('#enemy5').css('left')) + enemySpeed + "px")
            }
            if (enemyLeft > playerLeft) {

                $('#enemy5').css('left', parseFloat($('#enemy5').css('left')) - enemySpeed + "px")
            }
            if (enemyTop < playerTop) {

                $('#enemy5').css('top', parseFloat($('#enemy5').css('top')) + enemySpeed + "px")
            }
            if (enemyTop > playerTop) {
                $('#enemy5').css('top', parseFloat($('#enemy5').css('top')) - enemySpeed + "px")
            }
        }
    }, 1000 / fps)
}
//adds 1 score
function addScore() {
    return score = score + 1;
}
//returns score for .html() in jquery
function returnScore(){
    return score
}
//get coins
function getCoin() {
    $('div#score').html(addScore());
    coinGet.play()
    console.log('got coin');
}
//(re)spawns a coin
function spawnCoin(coinNum) {
    var coin = '#coin' + coinNum
    $(coin).css("left", Math.random() * (screenWidth * 0.85 - 5) + 5 + 'px')
    $(coin).css("top", Math.random() * (screenHeight * 0.85 - 5) + 5 + 'px')
    console.log('spawning coin')
};
//(re)spawns an enemy
function spawnEnemy(enemyNum) {
    var enemy = '#enemy' + enemyNum
    $(enemy).css("left", Math.random() * (screenWidth * 0.85 - 5) + 5 + 'px')
    $(enemy).css("top", Math.random() * (screenHeight * 0.85 - 5) + 5 + 'px')
    console.log('spawning enemy')
};
//checks if the player or sword is colliding with coin for collection
function coinTick() {
    setTimeout(function () {
        window.requestAnimationFrame(coinTick)
        if (collision('#Sword','#coin1')) {
            spawnCoin('1')
        };
        // console.log('cointick')
        if (collision('#player', '#coin1')) {
            spawnCoin('1');
            getCoin();
        };
        if (collision('#Sword','#coin2')) {
            spawnCoin('2')
        };
        // console.log('cointick')
        if (collision('#player', '#coin2')) {
            spawnCoin('2');
            getCoin();
        };
        if (collision('#Sword','#coin3')) {
            spawnCoin('3')
        };
        // console.log('cointick')
        if (collision('#player', '#coin3')) {
            spawnCoin('3');
            getCoin();
        };
        if (collision('#Sword','#coin4')) {
            spawnCoin('4')
        };
        // console.log('cointick')
        if (collision('#player', '#coin4')) {
            spawnCoin('4');
            getCoin();
        };
        if (collision('#Sword','#coin5')) {
            spawnCoin('5')
        };
        // console.log('cointick')
        if (collision('#player', '#coin5')) {
            spawnCoin('5');
            getCoin();
        };
        if (collision('#Sword','#coin6')) {
            spawnCoin('6')
        };
        // console.log('cointick')
        if (collision('#player', '#coin6')) {
            spawnCoin('6');
            getCoin();
        };
        if (collision('#Sword','#coin7')) {
            spawnCoin('7')
        };
        // console.log('cointick')
        if (collision('#player', '#coin7')) {
            spawnCoin('7');
            getCoin();
        };
        if (collision('#Sword','#coin8')) {
            spawnCoin('8')
        };
        // console.log('cointick')
        if (collision('#player', '#coin8')) {
            spawnCoin('8');
            getCoin();
        };
        if (collision('#Sword','#coin9')) {
            spawnCoin('9')
        };
        // console.log('cointick')
        if (collision('#player', '#coin9')) {
            spawnCoin('9');
            getCoin();
        };
        if (collision('#Sword','#coin10')) {
            spawnCoin('10')
        };
        // console.log('cointick')
        if (collision('#player', '#coin10')) {
            spawnCoin('10');
            getCoin();
        };
        if (collision('#Sword','#coin11')) {
            spawnCoin('11')
        };
        // console.log('cointick')
        if (collision('#player', '#coin11')) {
            spawnCoin('11');
            getCoin();
        };
    }, 1000 / fps)
}
//checks for all player collision and movement for player
function gameTick() {
    setTimeout(function () {
        window.requestAnimationFrame(gameTick);
        if (isLeft) {
            if (collision('#player', '#wall1')) {
                $('#player').css('left', parseFloat($('#player').css('left')) + playerSpeed + "px");
            } else {
                if (collision('#player', '#wall2')) {
                    $('#player').css('left', parseFloat($('#player').css('left')) + playerSpeed + "px");
                } else {
                    if (collision('#player', '#wall3')) {
                        $('#player').css('left', parseFloat($('#player').css('left')) + playerSpeed + "px");
                    } else {
                        if (collision('#player', '#wall4')) {
                            $('#player').css('left', parseFloat($('#player').css('left')) + playerSpeed + "px");
                        } else {
                            if (collision('#player', '#wall5')) {
                                $('#player').css('left', parseFloat($('#player').css('left')) + playerSpeed + "px");
                            } else {
                                if (collision('#player', '#wall6')) {
                                    $('#player').css('left', parseFloat($('#player').css('left')) + playerSpeed + "px");
                                } else {
                                    if (collision('#player', '#wall7')) {
                                        $('#player').css('left', parseFloat($('#player').css('left')) + playerSpeed + "px");
                                    } else {
                                        if (collision('#player', '#wall8')) {
                                            $('#player').css('left', parseFloat($('#player').css('left')) + playerSpeed + "px");
                                        } else {
                                            $('#player').css('left', parseFloat($('#player').css('left')) - playerSpeed + "px");
                                            if (collision('#player', '#wall1')) {
                                                $('#player').css('left', parseFloat($('#player').css('left')) + playerSpeed + "px");
                                            }
                                            if (collision('#player', '#wall2')) {
                                                $('#player').css('left', parseFloat($('#player').css('left')) + playerSpeed + "px");
                                            }
                                            if (collision('#player', '#wall3')) {
                                                $('#player').css('left', parseFloat($('#player').css('left')) + playerSpeed + "px");
                                            }
                                            if (collision('#player', '#wall4')) {
                                                $('#player').css('left', parseFloat($('#player').css('left')) + playerSpeed + "px");
                                            }
                                            if (collision('#player', '#wall5')) {
                                                $('#player').css('left', parseFloat($('#player').css('left')) + playerSpeed + "px");
                                            }
                                            if (collision('#player', '#wall6')) {
                                                $('#player').css('left', parseFloat($('#player').css('left')) + playerSpeed + "px");
                                            }
                                            if (collision('#player', '#wall7')) {
                                                $('#player').css('left', parseFloat($('#player').css('left')) + playerSpeed + "px");
                                            }
                                            if (collision('#player', '#wall8')) {
                                                $('#player').css('left', parseFloat($('#player').css('left')) + playerSpeed + "px");
                                            }

                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        };
        if (isUp) {
            if (collision('#player', '#wall1')) {
                $('#player').css('top', parseFloat($('#player').css('top')) + playerSpeed + "px");
            } else {
                if (collision('#player', '#wall2')) {
                    $('#player').css('top', parseFloat($('#player').css('top')) + playerSpeed + "px");
                } else {
                    if (collision('#player', '#wall3')) {
                        $('#player').css('top', parseFloat($('#player').css('top')) + playerSpeed + "px");
                    } else {
                        if (collision('#player', '#wall4')) {
                            $('#player').css('top', parseFloat($('#player').css('top')) + playerSpeed + "px");
                        } else {
                            if (collision('#player', '#wall5')) {
                                $('#player').css('top', parseFloat($('#player').css('top')) + playerSpeed + "px");
                            } else {
                                if (collision('#player', '#wall6')) {
                                    $('#player').css('top', parseFloat($('#player').css('top')) + playerSpeed + "px");
                                } else {
                                    if (collision('#player', '#wall7')) {
                                        $('#player').css('top', parseFloat($('#player').css('top')) + playerSpeed + "px");
                                    } else {
                                        if (collision('#player', '#wall8')) {
                                            $('#player').css('top', parseFloat($('#player').css('top')) + playerSpeed + "px");
                                        } else {
                                            $('#player').css('top', parseFloat($('#player').css('top')) - playerSpeed + "px");
                                            if (collision('#player', '#wall1')) {
                                                $('#player').css('top', parseFloat($('#player').css('top')) + playerSpeed + "px");
                                            }
                                            if (collision('#player', '#wall2')) {
                                                $('#player').css('top', parseFloat($('#player').css('top')) + playerSpeed + "px");
                                            }
                                            if (collision('#player', '#wall3')) {
                                                $('#player').css('top', parseFloat($('#player').css('top')) + playerSpeed + "px");
                                            }
                                            if (collision('#player', '#wall4')) {
                                                $('#player').css('top', parseFloat($('#player').css('top')) + playerSpeed + "px");
                                            }
                                            if (collision('#player', '#wall5')) {
                                                $('#player').css('top', parseFloat($('#player').css('top')) + playerSpeed + "px");
                                            }
                                            if (collision('#player', '#wall6')) {
                                                $('#player').css('top', parseFloat($('#player').css('top')) + playerSpeed + "px");
                                            }
                                            if (collision('#player', '#wall7')) {
                                                $('#player').css('top', parseFloat($('#player').css('top')) + playerSpeed + "px");
                                            }
                                            if (collision('#player', '#wall8')) {
                                                $('#player').css('top', parseFloat($('#player').css('top')) + playerSpeed + "px");
                                            }

                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        if (isRight) {
            if (collision('#player', '#wall1')) {
                $('#player').css('left', parseFloat($('#player').css('left')) - playerSpeed + "px");
            } else {
                if (collision('#player', '#wall2')) {
                    $('#player').css('left', parseFloat($('#player').css('left')) - playerSpeed + "px");
                } else {
                    if (collision('#player', '#wall3')) {
                        $('#player').css('left', parseFloat($('#player').css('left')) - playerSpeed + "px");
                    } else {
                        if (collision('#player', '#wall4')) {
                            $('#player').css('left', parseFloat($('#player').css('left')) - playerSpeed + "px");
                        } else {
                            if (collision('#player', '#wall5')) {
                                $('#player').css('left', parseFloat($('#player').css('left')) - playerSpeed + "px");
                            } else {
                                if (collision('#player', '#wall6')) {
                                    $('#player').css('left', parseFloat($('#player').css('left')) - playerSpeed + "px");
                                } else {
                                    if (collision('#player', '#wall7')) {
                                        $('#player').css('left', parseFloat($('#player').css('left')) - playerSpeed + "px");
                                    } else {
                                        if (collision('#player', '#wall8')) {
                                            $('#player').css('left', parseFloat($('#player').css('left')) - playerSpeed + "px");
                                        } else {
                                            $('#player').css('left', parseFloat($('#player').css('left')) + playerSpeed + "px");
                                            if (collision('#player', '#wall1')) {
                                                $('#player').css('left', parseFloat($('#player').css('left')) - playerSpeed + "px");
                                            }
                                            if (collision('#player', '#wall2')) {
                                                $('#player').css('left', parseFloat($('#player').css('left')) - playerSpeed + "px");
                                            }
                                            if (collision('#player', '#wall3')) {
                                                $('#player').css('left', parseFloat($('#player').css('left')) - playerSpeed + "px");
                                            }
                                            if (collision('#player', '#wall4')) {
                                                $('#player').css('left', parseFloat($('#player').css('left')) - playerSpeed + "px");
                                            }
                                            if (collision('#player', '#wall5')) {
                                                $('#player').css('left', parseFloat($('#player').css('left')) - playerSpeed + "px");
                                            }
                                            if (collision('#player', '#wall6')) {
                                                $('#player').css('left', parseFloat($('#player').css('left')) - playerSpeed + "px");
                                            }
                                            if (collision('#player', '#wall7')) {
                                                $('#player').css('left', parseFloat($('#player').css('left')) - playerSpeed + "px");
                                            }
                                            if (collision('#player', '#wall8')) {
                                                $('#player').css('left', parseFloat($('#player').css('left')) - playerSpeed + "px");
                                            }

                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        if (isDown) {
            if (collision('#player', '#wall1')) {
                $('#player').css('top', parseFloat($('#player').css('top')) - playerSpeed + "px");
            } else {
                if (collision('#player', '#wall2')) {
                    $('#player').css('top', parseFloat($('#player').css('top')) - playerSpeed + "px");
                } else {
                    if (collision('#player', '#wall3')) {
                        $('#player').css('top', parseFloat($('#player').css('top')) - playerSpeed + "px");
                    } else {
                        if (collision('#player', '#wall4')) {
                            $('#player').css('top', parseFloat($('#player').css('top')) - playerSpeed + "px");
                        } else {
                            if (collision('#player', '#wall5')) {
                                $('#player').css('top', parseFloat($('#player').css('top')) - playerSpeed + "px");
                            } else {
                                if (collision('#player', '#wall6')) {
                                    $('#player').css('top', parseFloat($('#player').css('top')) - playerSpeed + "px");
                                } else {
                                    if (collision('#player', '#wall7')) {
                                        $('#player').css('top', parseFloat($('#player').css('top')) - playerSpeed + "px");
                                    } else {
                                        if (collision('#player', '#wall8')) {
                                            $('#player').css('top', parseFloat($('#player').css('top')) - playerSpeed + "px");
                                        } else {
                                            $('#player').css('top', parseFloat($('#player').css('top')) + playerSpeed + "px");
                                            if (collision('#player', '#wall1')) {
                                                $('#player').css('top', parseFloat($('#player').css('top')) - playerSpeed + "px");
                                            }
                                            if (collision('#player', '#wall2')) {
                                                $('#player').css('top', parseFloat($('#player').css('top')) - playerSpeed + "px")
                                            }
                                            if (collision('#player', '#wall3')) {
                                                $('#player').css('top', parseFloat($('#player').css('top')) - playerSpeed + "px")
                                            }
                                            if (collision('#player', '#wall4')) {
                                                $('#player').css('top', parseFloat($('#player').css('top')) - playerSpeed + "px")
                                            }
                                            if (collision('#player', '#wall5')) {
                                                $('#player').css('top', parseFloat($('#player').css('top')) - playerSpeed + "px")
                                            }
                                            if (collision('#player', '#wall6')) {
                                                $('#player').css('top', parseFloat($('#player').css('top')) - playerSpeed + "px")
                                            }
                                            if (collision('#player', '#wall7')) {
                                                $('#player').css('top', parseFloat($('#player').css('top')) - playerSpeed + "px")
                                            }
                                            if (collision('#player', '#wall8')) {
                                                $('#player').css('top', parseFloat($('#player').css('top')) - playerSpeed + "px")
                                            }

                                        }
                                    }
                                }
                            }

                        };
                    }
                }
            }
        }
    }, 1000 / fps)
}
//checks for keypresses
$(document).keydown(function (e) {
    //W key
    if (e.which === 87) {
        console.log('w key is down')
        aimDirection = "up"
        // updateSword2()
    };
    //a key
    if (e.which === 65) {
        console.log('a key is down')
        aimDirection = "left"
        // updateSword2()
    };
    //s key
    if (e.which === 83) {
        console.log('s key is down')
        aimDirection = "down"
        // updateSword2()
    };
    //d key
    if (e.which === 68) {
        console.log('d key is down')
        aimDirection = "right"
        // updateSword2()
    };
    //left
    if (e.which === 37) {
        isLeft = true
        // updateSword2()
    };
    //up
    if (e.which === 38) {
        isUp = true
        // updateSword2()
    };
    //right
    if (e.which === 39) {
        isRight = true
        // updateSword2()
    };
    //down
    if (e.which === 40) {
        isDown = true
        // updateSword2()
    };

})
//checks for key releases
$(document).keyup(function (e) {
    //W key
    if (e.which === 87) {
        console.log('w key is up')
        // updateSword2()

    };
    //a key
    if (e.which === 65) {
        console.log('a key is up')
        // updateSword2()
    };
    //s key
    if (e.which === 83) {
        console.log('s key is up')
        // updateSword2()

    };
    //d key
    if (e.which === 68) {
        console.log('d key is up')
        // aimDirection = ""
        // updateSword2()

    };
    //left
    if (e.which === 37) {
    	// updateSword2()
        isLeft = false
        if (collision('#player', '#wall1')) {
            $('#player').css('left', parseFloat($('#player').css('left')) + playerSpeed + "px");
        } else {
            if (collision('#player', '#wall2')) {
                $('#player').css('left', parseFloat($('#player').css('left')) + playerSpeed + "px");
            } else {
                if (collision('#player', '#wall3')) {
                    $('#player').css('left', parseFloat($('#player').css('left')) + playerSpeed + "px");
                } else {
                    if (collision('#player', '#wall4')) {
                        $('#player').css('left', parseFloat($('#player').css('left')) + playerSpeed + "px");
                    } else {
                        if (collision('#player', '#wall5')) {
                            $('#player').css('left', parseFloat($('#player').css('left')) + playerSpeed + "px");
                        } else {
                            if (collision('#player', '#wall6')) {
                                $('#player').css('left', parseFloat($('#player').css('left')) + playerSpeed + "px");
                            } else {
                                if (collision('#player', '#wall7')) {
                                    $('#player').css('left', parseFloat($('#player').css('left')) + playerSpeed + "px");
                                } else {
                                    if (collision('#player', '#wall8')) {
                                        $('#player').css('left', parseFloat($('#player').css('left')) + playerSpeed + "px");
                                    } else {
                                        $('#player').css('left', parseFloat($('#player').css('left')) - playerSpeed + "px");
                                        if (collision('#player', '#wall1')) {
                                            $('#player').css('left', parseFloat($('#player').css('left')) + playerSpeed + "px");
                                        }
                                        if (collision('#player', '#wall2')) {
                                            $('#player').css('left', parseFloat($('#player').css('left')) + playerSpeed + "px");
                                        }
                                        if (collision('#player', '#wall3')) {
                                            $('#player').css('left', parseFloat($('#player').css('left')) + playerSpeed + "px");
                                        }
                                        if (collision('#player', '#wall4')) {
                                            $('#player').css('left', parseFloat($('#player').css('left')) + playerSpeed + "px");
                                        }
                                        if (collision('#player', '#wall5')) {
                                            $('#player').css('left', parseFloat($('#player').css('left')) + playerSpeed + "px");
                                        }
                                        if (collision('#player', '#wall6')) {
                                            $('#player').css('left', parseFloat($('#player').css('left')) + playerSpeed + "px");
                                        }
                                        if (collision('#player', '#wall7')) {
                                            $('#player').css('left', parseFloat($('#player').css('left')) + playerSpeed + "px");
                                        }
                                        if (collision('#player', '#wall8')) {
                                            $('#player').css('left', parseFloat($('#player').css('left')) + playerSpeed + "px");
                                        }

                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    //up
    if (e.which === 38) {
    	// updateSword2()
        isUp = false
        if (collision('#player', '#wall1')) {
            $('#player').css('top', parseFloat($('#player').css('top')) + playerSpeed + "px");
        } else {
            if (collision('#player', '#wall2')) {
                $('#player').css('top', parseFloat($('#player').css('top')) + playerSpeed + "px");
            } else {
                if (collision('#player', '#wall3')) {
                    $('#player').css('top', parseFloat($('#player').css('top')) + playerSpeed + "px");
                } else {
                    if (collision('#player', '#wall4')) {
                        $('#player').css('top', parseFloat($('#player').css('top')) + playerSpeed + "px");
                    } else {
                        if (collision('#player', '#wall5')) {
                            $('#player').css('top', parseFloat($('#player').css('top')) + playerSpeed + "px");
                        } else {
                            if (collision('#player', '#wall6')) {
                                $('#player').css('top', parseFloat($('#player').css('top')) + playerSpeed + "px");
                            } else {
                                if (collision('#player', '#wall7')) {
                                    $('#player').css('top', parseFloat($('#player').css('top')) + playerSpeed + "px");
                                } else {
                                    if (collision('#player', '#wall8')) {
                                        $('#player').css('top', parseFloat($('#player').css('top')) + playerSpeed + "px");
                                    } else {
                                        $('#player').css('top', parseFloat($('#player').css('top')) - playerSpeed + "px");
                                        if (collision('#player', '#wall1')) {
                                            $('#player').css('top', parseFloat($('#player').css('top')) + playerSpeed + "px");
                                        }
                                        if (collision('#player', '#wall2')) {
                                            $('#player').css('top', parseFloat($('#player').css('top')) + playerSpeed + "px");
                                        }
                                        if (collision('#player', '#wall3')) {
                                            $('#player').css('top', parseFloat($('#player').css('top')) + playerSpeed + "px");
                                        }
                                        if (collision('#player', '#wall4')) {
                                            $('#player').css('top', parseFloat($('#player').css('top')) + playerSpeed + "px");
                                        }
                                        if (collision('#player', '#wall5')) {
                                            $('#player').css('top', parseFloat($('#player').css('top')) + playerSpeed + "px");
                                        }
                                        if (collision('#player', '#wall6')) {
                                            $('#player').css('top', parseFloat($('#player').css('top')) + playerSpeed + "px");
                                        }
                                        if (collision('#player', '#wall7')) {
                                            $('#player').css('top', parseFloat($('#player').css('top')) + playerSpeed + "px");
                                        }
                                        if (collision('#player', '#wall8')) {
                                            $('#player').css('top', parseFloat($('#player').css('top')) + playerSpeed + "px");
                                        }

                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    //right
    if (e.which === 39) {
    	// updateSword2()
        isRight = false
        if (collision('#player', '#wall1')) {
            $('#player').css('left', parseFloat($('#player').css('left')) - playerSpeed + "px");
        } else {
            if (collision('#player', '#wall2')) {
                $('#player').css('left', parseFloat($('#player').css('left')) - playerSpeed + "px");
            } else {
                if (collision('#player', '#wall3')) {
                    $('#player').css('left', parseFloat($('#player').css('left')) - playerSpeed + "px");
                } else {
                    if (collision('#player', '#wall4')) {
                        $('#player').css('left', parseFloat($('#player').css('left')) - playerSpeed + "px");
                    } else {
                        if (collision('#player', '#wall5')) {
                            $('#player').css('left', parseFloat($('#player').css('left')) - playerSpeed + "px");
                        } else {
                            if (collision('#player', '#wall6')) {
                                $('#player').css('left', parseFloat($('#player').css('left')) - playerSpeed + "px");
                            } else {
                                if (collision('#player', '#wall7')) {
                                    $('#player').css('left', parseFloat($('#player').css('left')) - playerSpeed + "px");
                                } else {
                                    if (collision('#player', '#wall8')) {
                                        $('#player').css('left', parseFloat($('#player').css('left')) - playerSpeed + "px");
                                    } else {
                                        $('#player').css('left', parseFloat($('#player').css('left')) + playerSpeed + "px");
                                        if (collision('#player', '#wall1')) {
                                            $('#player').css('left', parseFloat($('#player').css('left')) - playerSpeed + "px");
                                        }
                                        if (collision('#player', '#wall2')) {
                                            $('#player').css('left', parseFloat($('#player').css('left')) - playerSpeed + "px");
                                        }
                                        if (collision('#player', '#wall3')) {
                                            $('#player').css('left', parseFloat($('#player').css('left')) - playerSpeed + "px");
                                        }
                                        if (collision('#player', '#wall4')) {
                                            $('#player').css('left', parseFloat($('#player').css('left')) - playerSpeed + "px");
                                        }
                                        if (collision('#player', '#wall5')) {
                                            $('#player').css('left', parseFloat($('#player').css('left')) - playerSpeed + "px");
                                        }
                                        if (collision('#player', '#wall6')) {
                                            $('#player').css('left', parseFloat($('#player').css('left')) - playerSpeed + "px");
                                        }
                                        if (collision('#player', '#wall7')) {
                                            $('#player').css('left', parseFloat($('#player').css('left')) - playerSpeed + "px");
                                        }
                                        if (collision('#player', '#wall8')) {
                                            $('#player').css('left', parseFloat($('#player').css('left')) - playerSpeed + "px");
                                        }

                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    //down
    if (e.which === 40) {
    	// updateSword2()
        isDown = false
        if (collision('#player', '#wall1')) {
            $('#player').css('top', parseFloat($('#player').css('top')) - playerSpeed + "px");
        } else {
            if (collision('#player', '#wall2')) {
                $('#player').css('top', parseFloat($('#player').css('top')) - playerSpeed + "px");
            } else {
                if (collision('#player', '#wall3')) {
                    $('#player').css('top', parseFloat($('#player').css('top')) - playerSpeed + "px");
                } else {
                    if (collision('#player', '#wall4')) {
                        $('#player').css('top', parseFloat($('#player').css('top')) - playerSpeed + "px");
                    } else {
                        if (collision('#player', '#wall5')) {
                            $('#player').css('top', parseFloat($('#player').css('top')) - playerSpeed + "px");
                        } else {
                            if (collision('#player', '#wall6')) {
                                $('#player').css('top', parseFloat($('#player').css('top')) - playerSpeed + "px");
                            } else {
                                if (collision('#player', '#wall7')) {
                                    $('#player').css('top', parseFloat($('#player').css('top')) - playerSpeed + "px");
                                } else {
                                    if (collision('#player', '#wall8')) {
                                        $('#player').css('top', parseFloat($('#player').css('top')) - playerSpeed + "px");
                                    } else {
                                        $('#player').css('top', parseFloat($('#player').css('top')) + playerSpeed + "px");
                                        if (collision('#player', '#wall1')) {
                                            $('#player').css('top', parseFloat($('#player').css('top')) - playerSpeed + "px");
                                        }
                                        if (collision('#player', '#wall2')) {
                                            $('#player').css('top', parseFloat($('#player').css('top')) - playerSpeed + "px")
                                        }
                                        if (collision('#player', '#wall3')) {
                                            $('#player').css('top', parseFloat($('#player').css('top')) - playerSpeed + "px")
                                        }
                                        if (collision('#player', '#wall4')) {
                                            $('#player').css('top', parseFloat($('#player').css('top')) - playerSpeed + "px")
                                        }
                                        if (collision('#player', '#wall5')) {
                                            $('#player').css('top', parseFloat($('#player').css('top')) - playerSpeed + "px")
                                        }
                                        if (collision('#player', '#wall6')) {
                                            $('#player').css('top', parseFloat($('#player').css('top')) - playerSpeed + "px")
                                        }
                                        if (collision('#player', '#wall7')) {
                                            $('#player').css('top', parseFloat($('#player').css('top')) - playerSpeed + "px")
                                        }
                                        if (collision('#player', '#wall8')) {
                                            $('#player').css('top', parseFloat($('#player').css('top')) - playerSpeed + "px")
                                        }

                                    }
                                }
                            }
                        }

                    };
                }
            }
        }
    }
})

//to do
//
//
//add materials
//add more shop stuff
//add lives
//add armor