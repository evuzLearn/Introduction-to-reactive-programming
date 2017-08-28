const button = document.querySelector('button');

// button.addEventListener('click', (ev) => console.log(ev));
Rx.Observable.fromEvent(button, 'click')
    .throttleTime(1000)
    .map((data) => { return {Y: data.clientY, X: data.clientX} })
    .subscribe((coordinate) => console.log(coordinate.X));