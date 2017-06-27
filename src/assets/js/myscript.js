function css() {

    //TODO: based on the size of the screen therw woiuld be differents sizes

    var size = 2;

    numCols = $(".table_responsive").find('tr')[0].cells.length;
    // alert('Total columns : '+numCols);

    // last columns
    $( ".table_responsive thead tr th:nth-last-of-type(-n+$size)".replace("$size", size) )
      .css({ color:"red"})
    $( ".table_responsive tbody tr td:nth-last-of-type(-n+$size)".replace("$size", size) )
      .css({ color:"blue"})

    // last rows
    $( ".table_responsive tbody tr:nth-last-of-type(-n+$size)".replace("$size", size) )
      .css({ color:"green"})
}
