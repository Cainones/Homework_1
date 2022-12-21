const student = "Корнаушенков Фёдор Андреевич"; 

document.getElementById("student").innerHTML = student;

let scoreFirstCommand = prompt('Введите предполагаемый результат 1-й команды')
let real_ScoreFirstCommand = prompt('Введите настоящий результат 1-й команды')

let scoreSecondCommand = prompt('Введите предполагаемый результат 2-й команды')
let real_ScoreSecondCommand  = prompt('Введите настоящий результат 2-й команды')

let realScoreGame = [real_ScoreFirstCommand,real_ScoreSecondCommand]; realScoreGame
let expectedScoreGame = [ scoreFirstCommand, scoreSecondCommand]; 
if  
    (scoreFirstCommand > scoreSecondCommand) {realScoreGame = 0} 
    else if 
        (scoreFirstCommand == scoreSecondCommand) {realScoreGame = 1}
    else
        realScoreGame = 2
if  
    (real_ScoreFirstCommand > real_ScoreSecondCommand) {expectedScoreGame = 0}  
    else if
        (real_ScoreFirstCommand == real_ScoreSecondCommand) {expectedScoreGame = 1}
    else 
        expectedScoreGame = 2 
if ( scoreSecondCommand == real_ScoreSecondCommand, scoreFirstCommand == real_ScoreFirstCommand) 
{
    alert('Ваше предположение было верным счёт и результат был угадан верно  !!');
}  
    else if (realScoreGame==expectedScoreGame)
{
        alert('Ваше предположение было ошибочным счёт не был угадан,!')
        alert('Ваше предположение было верным результат совподает!');
}
    else
{ 
        alert('Предпологаемый счёт и результат был ошибочным ваша ставка закрыта!' )
}