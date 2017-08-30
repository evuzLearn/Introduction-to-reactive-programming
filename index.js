const input = document.querySelector('input');
const observable = Rx.Observable.of(1, 2, 3, 4, 5);

observable
    .scan((total, currentValue) => total + currentValue, 0)
    .reduce((total, currentValue) => total + currentValue, 0)
    .subscribe({
        next: (value) => console.log(value),
        error: (err) => console.log(err)
    });