const date = document.getElementById("date")
const currentDate = new Date(Date.now() + 8.64e+7).toLocaleDateString()
let [month, day, year] = currentDate.split('/')
if (day.length == 1) day = `0${day}`
if (month.length == 1) month = `0${month}`
date.min = `${year}-${month}-${day}`
date.value = `${year}-${month}-${day}`
document.getElementById("date-display").innerHTML = date.value
checkWeekend()

// Time
const buttons = document.querySelectorAll(".time-button")
for (const button of buttons) {
  button.addEventListener("click", function() {
    for (const btn of buttons) if (btn.classList.contains("time-button-active")) btn.classList.remove("time-button-active")
    button.classList.add("time-button-active")
    document.getElementById("time").value = button.innerHTML.replaceAll(" ", "").replace(":", "")

    // For displaying the time in the submission panel
    const submitButton = document.getElementById("submit")
    submitButton.disabled = false
    submitButton.classList.add("submit-active")
    submitButton.value = "Next"
    document.getElementById("time-display").innerHTML = button.innerHTML
  })
}

$("#submit").click(function() {
  $("#form1").toggle()
  $("#form2").toggle()
  $("#button1").toggle()
  $("#button2").toggle()

  if ($("#form2").is(":visible")) {
    $("#size-info").html($("#size-display").html())
    $("#date-info").html(new Date($("#date-display").html()).toDateString())
    $("#time-info").html($("#time-display").html())
  }
})
$(".modify").click(function() {
  $("#form1").toggle()
  $("#form2").toggle()
  $("#button1").toggle()
  $("#button2").toggle()
})

// Size
function modifySizeOption(id) {
  const newOptions = []
  const select = document.getElementById(id)
  const stopAt = 10 - select.value

  let selectToModify = document.getElementById("kid")
  if (id == "kid") selectToModify = document.getElementById("adult")
  const lastKnownValue = selectToModify.value

  if (id == "adult") {
    // create options
    for (let i = 0; i <= stopAt; i++) {
      const option = document.createElement("option")
      option.value = i
      option.innerHTML = `${i} kid(s)`
      newOptions.push(option)
    }
  }
  else {
    const element = document.createElement("option")
    element.setAttribute("disabled", "disabled")
    element.innerHTML = "Please select your party size"
    newOptions.push(element)
    // create options
    for (let i = 1; i <= stopAt; i++) {
      const option = document.createElement("option")
      option.value = i
      option.innerHTML = `${i} adult(s)`
      newOptions.push(option)
    }
  }

  // remove current optinos
  let child = selectToModify.lastElementChild
  while (child) {
    selectToModify.removeChild(child)
    child = selectToModify.lastElementChild
  }
  // add new options
  for (const option of newOptions) selectToModify.appendChild(option)
  selectToModify.value = lastKnownValue

  const numberOfAdults = Number(document.getElementById("adult").value)
  const numberOfKids = Number(document.getElementById("kid").value)
  
  let string = `${numberOfAdults} adult${numberOfAdults == 1 ? '' : 's'}`
  if (numberOfKids) string += `, ${numberOfKids} kid${numberOfKids == 1 ? '' : 's'}`
  document.getElementById("size-display").innerHTML = string
}

// Time Options
function checkWeekend() {
  const date = document.getElementById("date")
  document.getElementById("date-display").innerHTML = date.value

  const day = new Date(date.value).getDay()
  const buttons = document.querySelectorAll("#weekendOnly")
  if (day == 0 || day == 6) for (const button of buttons) button.style.display = ""
  else for (const button of buttons) button.style.display = "none"

  // For if they change weekend to weekday
  // The options that are only available from weekend will be removed
  const timeQuery = document.getElementById("time")
  if (Number(timeQuery.value) > 1900) {
    timeQuery.value = ""

    // Deny the Submission
    const submitButton = document.getElementById("submit")
    submitButton.disabled = true
    submitButton.value = "Please select your dining time"
    if (submitButton.classList.contains("submit-active")) submitButton.classList.remove("submit-active")

    // Reset the Time
    document.getElementById("time-display").innerHTML = "Time"
    for (const btn of buttons) if (btn.classList.contains("time-button-active")) btn.classList.remove("time-button-active")
    document.getElementById("time").value = ""
  }
}
