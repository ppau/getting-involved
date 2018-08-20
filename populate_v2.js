// Copyright 2018 Alex Jago; no rights reserved
// Adapted from `kolumnoj.js` by Mozart Olbrycht-Palmer, 2015

$(window).load(function() {
  // We're essentially constructing a two-level Table of Contents
  // from an *implicit* tree structure
  // The `h2`s are the roots, the `h3`s the leaves

  var columnsHeight;
  var maxSubCats = 0;

  var subCatsUL = '<ul class="column-list">';
  var catsUL = '<ul class="column-list">';

  // Categories...
  $("h2").each(function(idx, category) {
    catsUL += '<li class="cat" id="cat_'+idx+'">'+category.innerText+'</li>';
    // h2:stop, h3:filter
    var subcats = 0;
    $(category).nextUntil("h2", "h3").each(function(jdx, subcategory){
      subCatsUL += '<li class="subCat cat_'+idx+'">'+subcategory.innerText+'</li>';
      subcats++;
    });

    maxSubCats = Math.max(maxSubCats, subcats);
  });

  subCatsUL += '</ul>';
  catsUL += '</ul>';

  $('#column-1').html(catsUL);
  $('#column-3').html(subCatsUL);

  // make the columns table be an appropriate height

  /*
  columnsHeight = Math.max($(".category").length, maxSubCats) * 1.7;
  console.log("columnsHeight:", columnsHeight)

  $(".column").css('height', columnsHeight.toString()+'em');
  */

  // Categories click handler
  $(".cat").click(function() {
    $("#column-1").contents().find("li.selected").removeClass("selected");
    $(this).toggleClass("selected");
    $("#column-3").hide();
    $("#default-3").hide(); // no reason for this to ever be seen again
    $(".subCat").hide(); // blanket hide
    $("#column-3").contents().find("li.selected").removeClass("selected"); // likewise
    $(".cat_"+this.id[4]).show(); //specific reveal
    $("#column-3").show();
    $("#content").children().hide(); // blanket hide
  });

  // Sub-Categories click handler
  $(".subCat").click(function(){
    $("#column-3").contents().find("li.selected").removeClass("selected");
    $(this).toggleClass("selected");
    $("#content").children().hide(); // blanket hide

    // show full nav if possible
    $("#columns")[0].scrollIntoView();

    // show subcat
    this.scrollIntoView();

    // Now we have to figure out what to show
    // Since we seem to dislike putting id tags on things, we need to search
    var it = this.innerText.toString(); // hopefully that's a deep copy
    $("#content").children("h3").each(function(idx, subcat){
      if(subcat.innerText == it){
        $(subcat).nextUntil("h1, h2, h3").show();

        // Show the subtitle always
        $(subcat).next("h4")[0].scrollIntoView();
      }
    });


  });

});
