
const $toggleJs = $('.js-toggle');
const $btnFeatures = $('.js-colorimage');
const $body = $('body');
const $navLeft = $('.js-nav-left');
const $navLeftItem = $('.js-nav-item');
const $navHeader = $('.js-nav');
const $navLeftItemFirst = $('.js-nav-item-first');
const $modal = $('.js-modal');
const $btnRemarkable = $('.js-btn-remarkable');
const $option = $('.js-option');
const $bigNav = $('.js-big-nav');
const $closeNav = $('.js-close-nav');
const $login = $('.js-login');
const $closeModal = $('.js-close-modal');
const $imgFeatures = $('.js-img');
const $btnBeginning = $('.js-btn-beginning');

$btnFeatures.click(function(){
    $(this).parent($option).prev($imgFeatures).css( "filter", "grayscale(100%)");
});

$imgFeatures.click(function(){
    $(this).next($option).slideToggle();
});

$btnRemarkable.click(function(){
    const $imagesRemarkable = $('.js-img-remarkable');
    $imagesRemarkable.slideToggle();
});

$toggleJs.click(function(){
    if($navLeft.hasClass('show')){
        $navLeft.removeClass('show');
    } else{
        $navLeft.addClass('show');
    }
    $navHeader.slideToggle();
});


$body.click(function(event){
    const classNameElement = event.target.className;
    if(!classNameElement.includes('js-toggle') && (!classNameElement.includes('js-nav') && (!classNameElement.includes('js-big-nav')&& (!classNameElement.includes('js-close-nav'))))){
        $navLeft.removeClass('show');
        $navHeader.slideUp();
    }
});

$bigNav.click(function(){
    
    if($navLeftItemFirst.hasClass('big') && ($navLeftItem.hasClass('big'))){
        $navLeftItemFirst.removeClass('big').addClass('');
        $navLeftItem.removeClass('big big--height');
    }else {
        $navLeftItemFirst.addClass('big');
        $navLeftItem.addClass('big big--height');
    }
});

$closeNav.click(function(){
    $navLeftItemFirst.removeClass('big');
    $navLeftItem.removeClass('big big--height');
    $navLeft.removeClass('show');
    $navHeader.toggle(1000);
});

$login.click(function(){
    $modal.toggle();
});

$closeModal.click(function(){
    $modal.toggle();
});

$modal.click(function(event){
    const classNameModal = event.target.className;
    if(!classNameModal.includes('js-modal-form') && 
    (!classNameModal.includes('js-close-modal') && 
    (!classNameModal.includes('js-input-modal') &&
    (!classNameModal.includes('js-btns-modal') &&
    (!classNameModal.includes('js-btn-modal')))))){
        $modal.hide();
    }
});
