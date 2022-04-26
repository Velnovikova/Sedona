const rangeSlider = document.getElementById('range-slider');
if (rangeSlider) {
    noUiSlider.create(rangeSlider, {
        start: [0, 3000],
        connect: true,
        step: 500,
        range: {
            'min': [0],
            'max': [3000]
        }
    });
    const inputMin = document.getElementById('input-min');
    const inputMax = document.getElementById('input-max');
    const inputs = [inputMin, inputMax];

    rangeSlider.noUiSlider.on('update', function(values, handle) {
        inputs[handle].value = Math.round(values[handle]);
    });
    const setRangeSlider = (i, value) => {
        let arr = [null, null];
        arr[i] = value;
        //console.log(arr);
        rangeSlider.noUiSlider.set(arr)
    }
    inputs.forEach((el, i) => {
        el.addEventListener('change', (e) => {
            setRangeSlider(i, e.currentTarget.value)

        })
    })
}
const button = document.getElementById('modal-button');
const form = document.getElementById('modal-form');

button.addEventListener('click', function(e) {
        e.preventDefault();
        if (button.classList.contains('close')) {
            button.classList.remove('close')
            button.classList.add('open')
            form.classList.remove('invisible-form')
            form.classList.add('visible-form')
        } else {
            button.classList.remove('open')
            button.classList.add('close')
            form.classList.remove('visible-form')
            form.classList.add('invisible-form')
        }
    })
    //const minus = document.getElementById('minus');
    //const inputNum = document.getElementById('input-number');
    //const plus = document.getElementById('plus');
    //minus.forEach(node => {
    //  node.addEventListener('click', () => {
    //    inputNum.forEach(element => {
    //      element.value = parseInt(+element.value - 1);
    //});
    //});
    //});
    //plus.forEach(node => {
    //  node.addEventListener('click', () => {
    //    inputNum.forEach(element => {
    //      element.value = parseInt(+element.value + 1);
    //});
    //});
    //})