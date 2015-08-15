$(document).ready(function(){
    $("#search").jlistsearch({
        onSelect :   function(ex){
                alert( ex.text());    
            }
        });
});
