/**
 * ======================
 *   CUSTOM SCRIPTS
 * ======================
 **/
jQuery(document).ready(function () {
    /**
     * ======================
     *   NAV CATEGORY MENU
     * ======================
     **/
    jQuery("#sp-nav-menu").find(".parent")
        .addClass("dropdown")
        .children("a")
        .append(' <span class="caret"></span>')
        .next().addClass("dropdown-menu");
    var navdropdown = jQuery(".navbar-nav > li.dropdown");
    navdropdown.hover(function () {
        jQuery(this).find('ul').css('display', 'block');
    });
    navdropdown.click(function () {
        jQuery(this).find('ul').css('display', 'block');
    });
    navdropdown.mouseleave(function () {
        jQuery(this).find('ul').css('display', 'none');
    });
    /** /NAV CATEGORY MENU **/
});