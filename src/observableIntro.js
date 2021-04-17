const button = document.querySelector('button');
// button.addEventListener('click', (event) => {
//     console.log(event);
// });

Rx.Observable.fromEvent(button, 'click')
    .throttleTime(1000)
    .subscribe(
        (event) => console.log(event)
    );
