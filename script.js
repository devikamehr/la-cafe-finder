$( document ).ready(function() {
     $("#address-search").on( "click", function() {
        var encodedaddress = encodeURIComponent($("#address").val());