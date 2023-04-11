$(document).ready(function () {
  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY h:mm A"))
  console.log(dayjs().format("dddd, MMMM D, YYYY h:mm A"))
  // code that interacts with the DOM goes here
  $(".saveBtn").click(function () {

    var textarea = $(this).siblings("textarea").val()
    var rowTime = $(this).parent().attr("id")
    console.log(rowTime, textarea)
    localStorage.setItem(rowTime, textarea)
  })
  for (let i = 9; i < 18; i++) {
    $(`#hour-${i} textarea`).val(localStorage.getItem(`hour-${i}`))
  }
  $(".time-block").each(function () {
    var rowHour = parseInt($(this).attr("id").split("-")[1])
    var currentHour = dayjs().hour()
    if (rowHour < currentHour) {
      $(this).addClass("past")
    } else if (rowHour === currentHour) {
      $(this).addClass("present")
    } else {
      $(this).addClass("future")
    }
  })
})