const button = document.querySelector('button');
const button2 = document.querySelector('#button2');

Rx.Observable.fromEvent(button, 'click')
    .throttleTime(1000)
    .map((event) => event.target)
    .subscribe(
        (target) => console.log(target)
    );

const observer = {
    next: (event) => {
        console.log(event);
    },
    error: (error) => {
        console.log(error);
    },
    complete: () => {
        console.log('complete');
    }
};

// Rx.Observable.fromEvent(button2, 'click')
Rx.Observable.create((obs) => {
    // button2.addEventListener('click', (event) => obs.next(event));
    obs.next('A value');
    obs.error('Error');
    obs.next('Second value');
})
    .subscribe(observer);

