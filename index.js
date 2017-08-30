const button = document.querySelector('button');

const observer = {
    next: (value) => console.log('Next ', value),
    error: (err) => console.log('Error ', err),
    complete: () => console.log('Completed')
}

// Rx.Observable.fromEvent(button, 'click')
const subscription = Rx.Observable.create(
    (obs) => {
        button.onclick = (ev) => { obs.next(ev) };
    }).subscribe(observer);

setTimeout(function() {
    subscription.unsubscribe();
    console.log('Unsubscribe');
}, 5000);