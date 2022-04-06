var grid = document.querySelector('.grid');
var stampElem = grid.querySelector('.stamp');
var stampButton = document.querySelector('.stamp-button');
var msnry = new Masonry( grid, {
  itemSelector: '.grid-item',
  columnWidth: 160
});

var isStamped = false;

stampButton.addEventListener(  'click', function() {
  // stamp or unstamp element
  if ( isStamped ) {
    msnry.unstamp( stampElem );
  } else {
    msnry.stamp( stampElem );
  }
  // trigger layout
  msnry.layout();
  isStamped = !isStamped;
});


