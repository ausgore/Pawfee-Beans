const bookingRef = document.getElementById("bookingRefNo")
const randomNo = Math.floor(Math.random() * 999999999)
bookingRef.innerHTML = `Reference Number: ${randomNo}`

// Party Size Information
let partyInfo = ""
const adults = getQueryStringValues("adult")
const kids = getQueryStringValues("kid")
partyInfo += `${adults} adult${adults > 1 ? "s" : ""}`
if (kids > 0) partyInfo += `, and ${kids} kid${kids > 1 ? "s" : ""}`
$("#size-info").html(partyInfo)
// Date Inforatmion
$("#date-info").html(new Date(getQueryStringValues("date")).toDateString())
// Time Information
let time = getQueryStringValues("time")
time = `${time.substr(0, 2)}:${time.substring(2, 4)}`
$("#time-info").html(time)

$("#name-info").html(getQueryStringValues("name").replaceAll("+", " ").toUpperCase())
$("#email-info").html(getQueryStringValues("email"))
$("#phone-info").html(getQueryStringValues("number"))

$("#invoiceAdultQuantity").html(adults)
$("#invoiceChildQuantity").html(kids)
$("#invoiceAdultAmount").html(`$${adults * 15}.00`)
$("#invoiceChildAmount").html(`$${kids * 10}.00`)
$("#invoiceTotal").html(`$${(adults * 15) + (kids * 10)}.00`)

function getQueryStringValues(key) {
    var arrParamValues = [];
    var url = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < url.length; i++) {
        var arrParamInfo = url[i].split('=');
        if (arrParamInfo[0] == key || arrParamInfo[0] == key + '[]') {
            arrParamValues.push(decodeURIComponent(arrParamInfo[1]));
        }
    }
    return (arrParamValues.length > 0 ? (arrParamValues.length == 1 ? arrParamValues[0] : arrParamValues) : null);
}