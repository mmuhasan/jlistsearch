/*!
 * jlistSearch - jQuery Plugin for search a ul li list - v1.0.0
 *
 * Copyright 2015, Md Monjur ul Hasan
 * http://monjur-ul-hasan.info/
 * Dual licensed under the MIT and GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl-2.0.html
 *
 * @author Md Monjur ul Hasan
 * @requires jQuery v1.11.3+
 */

(function($){

    $.fn.jlistsearch = function(options) {
        
        var settings = $.extend({
            text         : 'Start typing a search item',
            onSelect     : null
            }, options);
            
        return this.each( function() {
            $(this).attr("placeholder",settings.text);           
            var list = $("ul."+$(this).attr("rel")+" li");
            
            $(this).on("keyup", function()  {
                var searchValue = $(this).val();
                if (searchValue.length > 0)  {   
                    list.hide().filter(function () {
                        return $(this).text().toLowerCase().indexOf(searchValue.toLowerCase()) == 0;
                  }).show();
                }
                else {
                  list.show();
                }
            });
            
            list.on("click", function(){
                if ( $.isFunction( settings.onSelect ) ) {
                    settings.onSelect.call( $(this),$(this) );
                }
            });
        });
    }
}(jQuery));