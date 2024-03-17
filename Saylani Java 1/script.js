document.getElementById("alert-name").onclick = function () {
    alert("Your name");
};

document.getElementById("alert-number").onclick = function () {
    alert("Any number i.e 8");
};

document.getElementById("show-variable").onclick = function () {
    let varHump;
    document.getElementById("original-statement").innerText = "Variable Name";
    document.getElementById("result-output").innerText = `varHump`;
};

document.getElementById("camel-case").onclick = function () {
    document.getElementById("original-statement").innerText = "the example of camelCasing";
    document.getElementById("result-output").innerText = "camelCase, getElementById, JavaScript";
};

document.getElementById("sum-numbers").onclick = function () {
    let a = 67, b = 89;
    document.getElementById("original-statement").innerText = "a = 67 and b = 89";
    document.getElementById("result-output").innerText = `a + b = ${a + b}`;
};

document.getElementById("subtract-numbers").onclick = function () {
    let a = 123, b = 45;
    document.getElementById("original-statement").innerText = "a = 123 and b = 45";
    document.getElementById("result-output").innerText = `a - b = ${a - b}`;
};

document.getElementById("multiply-numbers").onclick = function () {
    let a = 34, b = 56;
    document.getElementById("original-statement").innerText = "a = 34 and b = 56";
    document.getElementById("result-output").innerText = `a * b = ${a * b}`;
};

document.getElementById("divide-numbers").onclick = function () {
    let a = 456, b = 78;
    document.getElementById("original-statement").innerText = "a = 456 and b = 78";
    document.getElementById("result-output").innerText = `a / b = ${a / b}`;
};

document.getElementById("calculate-numbers").onclick = function () {
    let a = 789, b = 123, c = 456;
    document.getElementById("original-statement").innerText = "a = 789 and b = 123 and c = 456";
    document.getElementById("result-output").innerText = `a * b + c = ${a * b + c}`;
};
