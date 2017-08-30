const input = document.querySelector('input');
const observable = Rx.Observable.fromEvent(input, 'input');

observable
    .debounceTime(500)
    .map((ev) => ev.target.value)
    .distinctUntilChanged()
    .subscribe({
        next: (value) => console.log(value),
        error: (err) => console.log(err)
    });