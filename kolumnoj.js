// Copyright 2015 Mozart Olbrycht-Palmer; no rights reserved //

$(window).load(function(){

  var index;
  var list = '<ul class="column-list">';
  var option = [
      "Elections",
      "Press",
      "Designs",
      "Social media",
      "Submissions",
      "Policy",
      "Technology",
      "Disputes",
      "Leadership",
      ];
  for (index = 0; index < option.length; index++) {
    list += "<li>" + option[index] + "</li>";
    }    
  list += "</ul>"; 
  $('#column-1').html(list);
  $("#column-1").contents().find("li").click(function() {
    $("#column-1").contents().find("li.selected").removeClass("selected");
    $(this).toggleClass("selected");
    $("#column-3").hide();
    var col1 = $("#column-1").contents().find(".selected").index();
    if (col1 == 1) {
      $("#default-3").hide();
    } else {
      $("#default-3").show();
    }
    option[0] = [
      "I want to volunteer on election day",
	  "You aren't running in my state, but I still want to help",
	  "I want to be a candidate/run in an election",
      ];
    option[1] = [
      "What is a press release?",
	  "I have an idea for a press release",
	  "I want to write a press release",
	  "I want to join the Press Team",
      ];
    option[2] = [
	  "I have an idea for a design",
	  "I want to make a design",
	  "I want to join the Design Team",
      ];
    option[3] = [
      "I want to join the Social Media Team",
      ]
    option[4] = [
      "What is a submission?",
	  "I think we should make a submission",
	  "I want to write or help write a submission",
      ];
    option[5] = [
	  "I have an idea for a policy",
	  "I want to write a policy",
	  "I want to join the Policy Development Committee",
      ];
    option[6] = [
	  "I want to join the IT Team",
	  "I want to join the Programming Team",
	  "I want to join the Internet Engineering Committee",
      ];
    option[7] = [
	  "I want to join the Dispute Resolution Committee",
      ];
    option[8] = [
	  "I want to join the National Council",
	  "I want to be an Officer",
	  "I want to be a State or Territory Coordinator",
      ];
    var list = '<ul class="column-list">';
    for (index = 0; index < option[col1].length; index++) {
      list += "<li>" + option[col1][index] + "</li>";
      }
    list += "</ul>";
    $('#column-3').html(list);
    $("#default-3").hide();
    $("#column-3").show();
    $("#column-3").contents().find("li").click(function() {
      $("#column-3").contents().find("li.selected").removeClass("selected");
      $(this).toggleClass("selected");
      var col3 = $("#column-3").contents().find(".selected").index();
      $(".output").children("div").hide();
      if (col1 == 0) {
      	$("#elections").children().eq(col3).show();
	  } else if (col1 == 1) {
      	$("#press").children().eq(col3).show();
	  } else if (col1 == 2) {
      	$("#designs").children().eq(col3).show();
	  } else if (col1 == 3) {
      	$("#socmed").children().eq(col3).show();
	  } else if (col1 == 4) {
      	$("#submissions").children().eq(col3).show();
	  } else if (col1 == 5) {
      	$("#policy").children().eq(col3).show();
	  } else if (col1 == 6) {
      	$("#technology").children().eq(col3).show();
	  } else if (col1 == 7) {
      	$("#disputes").children().eq(col3).show();
	  } else if (col1 == 8) {
      	$("#leadership").children().eq(col3).show();
	  }
    });
  });
});
