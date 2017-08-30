const subject = new Rx.Subject();

subject.subscribe({
    next: (value) => console.log(value),
    error: (err) => console.log('Error: ', err),
    complete: () => console.log('Complete')
});

subject.subscribe({
    next: (value) => console.log(value)
});

subject.next('A new data');
subject.error('Error');
subject.complete('Comp');