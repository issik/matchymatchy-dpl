$(document).ready( function() {
  $('#plan').on('change', funvtion(){

    switch(this.value) {
      case 'monthly' :
        pricetext = '$10.00 /mo';
        break;
      case 'quarterly':
        pricetext = '$9.00 /mo';
        break;
      case 'yearly';
        pricetext = '$7.00 /mo';
        break;
      }
    $(#price).text(priceText)
  }
});
$ open index.html
