$(document).ready(function() {
  $('img:eq(1)').on('click', function() {
    $('#popup-wrapper').hide()
  }
                    )
  $("#q0 .answerz").click(function() {
    $("#q0").hide(0, function() {
      $("#q1").fadeIn().focus();
    }
                  );
  }
                         );
  $("#q1 .answerz").click(function() {
    $("#q1").hide(0, function() {
      $("#q2").fadeIn().focus();
    }
                  );
  }
                         );
  $("#q2 .answerz").click(function() {
    $("#q2").hide(0, function() {
      $("#q3").fadeIn().focus();
    }
                  );
  }
                         );
  $("#q3 .answerz").click(function() {
    $("#q3").hide(0, function() {
      $("#q4").fadeIn().focus();
    }
                  );
  }
                         );
 $("#q4 .answerz").click(function() {
    $("#q4").hide(0, function() {
      $("#q5").fadeIn().focus();
    }
                  );
  }
                         );
$("#q5 .answerz").click(function() {
    $("#q5").hide(0, function() {
      $("#q6").fadeIn().focus();
    }
                  );
  }
                         );
   $("#q6 .answerz").click(function() {
    $("#q6").hide(0, function() {
      $("#q7").fadeIn().focus();
    }
                  );
  }
                         );				 	 
  $("#q7 .answerz").click(function() {
    $("#q7").hide(0, function() {
      $("#final, #v1").fadeIn().focus();
    }
                  );
    setTimeout(function() {
      $("#v1").hide();
      $("#v2").show();
    }
                , 1000);
    setTimeout(function() {
      $("#v2").hide();
      $("#v3").show();
    }
                , 2250);
    setTimeout(function() {
      $("#v3").hide();
      $("#v4").show();
    }
                , 3000);
    setTimeout(function() {
      $("#v4").hide();
      $("#v5").show();
    }
                , 4250);
  }
                         );
}
                  );
function showdate() {
  var mydate = new Date()
  var year = mydate.getYear()
  if (year < 1000)
    year += 1900
    var day = mydate.getDay() + 0
    var month = mydate.getMonth()
    var daym = mydate.getDate() + 1
    if (daym < 10)
      daym = "0" + daym
      var dayarray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday")
      var montharray = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December")
      return ("" + montharray[month] + " " + daym + "th")
}
