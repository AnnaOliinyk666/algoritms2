




//  1 Найти сумму трёх чисел
//  2 По двум заданным числам проверять является ли одно квадратом другого
//  3 На промежутке от 1 до N, показать кубы чисел, заканчивающихся на четную цифру



function Summ() {
    var a, b, c, d;
    
    a = Number(window.prompt('Enter a value for a'));
    b = Number(window.prompt('Enter a value for b'));
    c = Number(window.prompt('Enter a value for c'));
    d = a + b + c;
    window.alert(d);
}


function Square() {
    var a, b;
    
    a = Number(window.prompt('Enter a value for a'));
    b = Number(window.prompt('Enter a value for b'));
    if (a * a == b) {
        window.alert(b.ToString() + " является квадратом от " + a);
    } else {
        if (b * b == a) {
            window.alert(a.ToString() + " является квадратом от " + b);
        } else {
            window.alert("не является квадратом ни одно из чисел");
        }
    }
}

function Cube() {
    var a, b;
    
    a = Number(window.prompt('Enter a value for a'));
    b = Number(window.prompt('Enter a value for b'));
    if (a * a == b) {
        window.alert(b.ToString() + " является квадратом от " + a);
    } else {
        if (b * b == a) {
            window.alert(a.ToString() + " является квадратом от " + b);
        } else {
            window.alert("не является квадратом ни одно из чисел");
        }
    }
}

