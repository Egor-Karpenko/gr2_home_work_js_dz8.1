let squar = document.createElement('div');
squar.style.cssText = `width :150px;
    height : 200px;
    background-color: green;
    margin-bottom: 10px;
    `;
document.body.append(squar)

squar.onmouseover = function() {
    console.log(`Высота : ${squar.clientHeight}px, Ширина : ${squar.clientWidth}px`)
};

let square2 = document.createElement('div');
square2.style.cssText = `width :230px;
    height : 170px;
    background-color: purple;
    margin-bottom: 10px;
    `;
document.body.append(square2)

square2.onmouseover = function() {
    console.log(`Высота : ${square2.clientHeight}px, Ширина : ${square2.clientWidth}px`)
};