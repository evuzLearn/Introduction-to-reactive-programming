const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');

var span = document.querySelector('span');

const obs1 = Rx.Observable.fromEvent(input1, 'input');
const obs2 = Rx.Observable.fromEvent(input2, 'input')

obs1.mergeMap((ev1) => {
    return obs2.map(ev2 => ev1.target.value + ' ' + ev2.target.value);
}).subscribe((combined) => span.textContent = combined);
    // .subscribe({
    //     next: (event) => span.textContent = event.target.value,
    //     error: (err) => console.log(err)
    // });


// obs
// .subscribe({
//     next: (event) => span.textContent = event.target.value,
//     error: (err) => console.log(err)
// });