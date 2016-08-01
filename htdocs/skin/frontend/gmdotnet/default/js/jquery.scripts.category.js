/**
 * =======================================
 *   CUSTOM SCRIPTS FOR CATEGORY SECTION
 * =======================================
 **/

jQuery(document).ready(function() {
    // Scrollbar for attributes
    jQuery('.filter-scrollbar').mCustomScrollbar({
        theme: "dark",
        axis: "yx",
        setHeight: "150"
    });

    // Input search for attributes
    jQuery('.filter-layer').each(function(){
        var id = jQuery(this).attr('id');
        jQuery('#'+id).searcher({
            inputSelector: "#filter-input-"+id,
            itemSelector: "ul > li",
            textSelector: "a"
        });
    });

    // Arrow for attributes
    jQuery('.filter-name').click(function(){
        var id = jQuery(this).attr('aria-controls');
        jQuery('#'+id).slideToggle('fast');
        jQuery(this).children('span').toggleClass('fa-chevron-down');
        jQuery(this).children('span').toggleClass('fa-chevron-right');
    });
});

/**
 * =============
 *   CATEGORY - swap image
 * =============
 * 
 * @param image_from
 * @param image_to
 **/
function swapImage(image_from, image_to)
{
    jQuery('#'+image_from).addClass('hide');
    jQuery('#'+image_to).removeClass('hide');
}