const asyncBtn = document.querySelector('#async-btn');
const asyncDiv = document.querySelector('#async-div');

const setText = (text) => {
    asyncDiv.textContent = text;
};

const checkAuth = () =>
    Rx.Observable.create(observer => {
        setText('Checking Auth...');
        setTimeout(() => {
            observer.next(true);
        }, 2000);
    });

const fetchUser = () =>
    Rx.Observable.create(observer => {
        setText('Fetching User...');
        setTimeout(() => {
            observer.next({ name: 'Max' });
        }, 2000);
    });

Rx.Observable.fromEvent(asyncBtn, 'click')
    .switchMap(event => checkAuth())
    .switchMap(isAuth => {
        if (isAuth) {
            return fetchUser();
        }
    })
    .subscribe(user => {
        setText(user.name);
    });