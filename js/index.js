$(function () {
    const sideNavLis = '.sidenav h3,.sidenav > div > ul > li';
    const $liveExampleLinks = $('#liveExamples').find('a');
    const $previewContainer = $('#previewContainer');
    const $iframe = $('#preview');

    $previewContainer.resizable();

    function hideIframe() {
        TweenMax.to($iframe, .5, {opacity: 0, scale: 0});
    }

    $liveExampleLinks.click(function () {
        if ($iframe.is(':visible')) {
            $(this).attr('target', 'preview');
        } else {
            $(this).attr('target', '');
        }
        hideIframe();
    });

    $iframe.load(function () {
        TweenMax.to($iframe, 1, {opacity: 1, scale: 1});
    });
    TweenMax.staggerFrom(sideNavLis, .5, {x: -300, rotation: 90, scale: 2}, 0.1);
});
