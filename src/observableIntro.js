const button = document.querySelector('button');
// button.addEventListener('click', (event) => {
//     console.log(event);
// });

Rx.Observable.fromEvent(button, 'click')
    .throttleTime(1000)
    .map((event) => event.target)
    .subscribe(
        (target) => console.log(target)
    );
