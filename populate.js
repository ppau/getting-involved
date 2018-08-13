// Copyright 2018 Alex Jago; no rights reserved
// Adapted from `kolumnoj.js` by Mozart Olbrycht-Palmer, 2015

$(window).load(function() {
  // find every element with a `category` class
  // its `title` attribute becomes part of the LH column
  // its children with a `subcategory` class become part of the RH column

  var subCatsUL = '<ul class="column-list">';
  var catsUL = '<ul class="column-list">';

  // Categories...
  $(".category").each(function(idx, category) {
    catsUL += '<li class="cat" id="cat_'+idx+'">'+category.title+'</li>';

    // ... and sub-categories!
    for(var i=0; i<category.children.length; i++){
      subCatsUL += '<li class="subCat cat_'+idx+'">'+category.children[i].title+'</li>';
    }
  });

  subCatsUL += '</ul>';
  catsUL += '</ul>';

  $('#column-1').html(catsUL);
  $('#column-3').html(subCatsUL);

  // Categories click handler
  $(".cat").click(function() {
    $("#column-1").contents().find("li.selected").removeClass("selected");
    $(this).toggleClass("selected");
    $("#column-3").hide();
    $("#default-3").hide(); // no reason for this to ever be seen again
    $(".subCat").hide(); // blanket hide
    $(".cat_"+this.id[4]).show(); //specific reveal
    $("#column-3").show();
    $(".output").children("div").hide(); // blanket hide
  });

  // Sub-Categories click handler
  $(".subCat").click(function(){
    $("#column-3").contents().find("li.selected").removeClass("selected");
    $(this).toggleClass("selected");
    $(".output").children("div").hide(); // blanket hide
    $("div[title='"+this.innerText+"']").show(); // specific reveal
  });

});
