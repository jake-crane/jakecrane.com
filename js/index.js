$(function() {
    $('#previewContainer').resizable();
    var $iframe = $('#preview');

    $iframe.load(function ()
    {
        $iframe.show();
        animate($iframe.parent(), 'zoomInDown');
    });

    function animate($element, animation) {
        $element.addClass('animated '+ animation);
        setTimeout( function(){
            $element.removeClass('animated ' + animation);
        }, 1500);
    }
});
