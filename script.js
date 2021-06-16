const messages = {
    firstPart: [
        'Your future is ',
        'You are very ',
        'Outside is ',
        'Your best friend is ',
        'Drinking water is '
    ],
    secondPart: [
        'good and rich, ',
        'bad and really sad, ',
        'healthy and friendly, ',
        'boring and dark, ',
        'shiny and better, '
    ],
    thirdPart: [
        'but you are good to go.',
        'so you better watch out.',
        'you will succeed in life',
        'go outside now!',
        'keep the good attitude'
    ]
}

const createMessage = () => {
    let message = '';
    for(let part in messages){
        message += part[Math.floor(Math.random() * 10) - 4]
    }
    console.log(message)
}