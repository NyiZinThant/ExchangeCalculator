var data = {
    "info":"Central Bank of Myanmar",
    "description":"Official Website of Central Bank of Myanmar",
    "timestamp":"1634284800",
    "rates":{
      "MMK":"1",
      "USD":"1,830.4",
      "ZAR":"124.70",
      "NPR":"15.201",
      "CHF":"1,983.1",
      "CNY":"284.62",
      "THB":"55.008",
      "PKR":"10.685",
      "KES":"16.505",
      "EGP":"116.44",
      "BDT":"21.389",
      "LAK":"18.081",
      "SAR":"488.00",
      "IDR":"13.006",
      "KHR":"44.940",
      "SGD":"1,357.8",
      "LKR":"9.1065",
      "NZD":"1,291.3",
      "JPY":"1,601.9",
      "CZK":"83.565",
      "VND":"8.0420",
      "PHP":"36.046",
      "KRW":"154.80",
      "HKD":"235.26",
      "BRL":"331.96",
      "RSD":"18.070",
      "MYR":"440.16",
      "CAD":"1,482.6",
      "GBP":"2,512.8",
      "SEK":"212.04",
      "NOK":"217.43",
      "ILS":"568.22",
      "DKK":"285.49",
      "AUD":"1,358.2",
      "RUB":"25.720",
      "KWD":"6,066.8",
      "INR":"24.420",
      "BND":"1,357.8",
      "EUR":"2,124.1"
    }
  }
let to = document.getElementById("to");
let from = document.getElementById("from");
let input = document.getElementById("input");
let result = document.getElementById("result");
let tb = document.getElementById("tb");

function store(){
  localStorage.setItem("record",tb.innerHTML);
};

function toNum(x){
    return Number(x.replace(",",""));
};

function createOption(x,y,z){
    let o = document.createElement("option");
    let c = document.createTextNode(y);
    o.setAttribute("value",toNum(z));
    o.appendChild(c);
    x.appendChild(o);
};

for (let x in data.rates) {
    createOption(from,x,data.rates[x]);
    createOption(to,x,data.rates[x]);
};

function createTb(x){
  let rowSpace = document.getElementById("rowSpacer");
  if(rowSpace){
    rowSpace.remove();
  }
  let tr = document.createElement("tr");
  x.map(function(el){
    let td = document.createElement("td");
    let text = document.createTextNode(el);
    td.appendChild(text);
    tr.appendChild(td);
  });
  tb.appendChild(tr);
};

document.getElementById("calc").addEventListener("submit",function(e){
    e.preventDefault();
    //get 
    let x = input.value;
    let y = from.value;
    let z = to.value;

    //process
    let date = new Date().toLocaleString();
    let fromText = x+" "+from.options[from.selectedIndex].innerText;
    let toText = to.options[from.selectedIndex].innerText;
    let first = x*y;
    let second = first/z;
    let resultValue = second.toFixed(2);
    let arr = [date,fromText,toText,resultValue];
    createTb(arr);
    store();

    //set
    result.innerHTML = resultValue;
    input.value = "";
    from.value = "";
    to.value = 1;
    input.focus();
});

(function(){
  if(localStorage.getItem("record")){
    tb.innerHTML = localStorage.getItem("record")
  }else{
    tb.innerHTML = `<tr id="rowSpacer"><td colspan="4">There is no record</td></tr>`
  }
})();

function chgToDark(){
  document.body.classList.toggle("night-mode");
  document.getElementById("dm").classList.toggle("fa-sun")
};
