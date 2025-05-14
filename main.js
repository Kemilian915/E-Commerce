
/* Small Image Click Function */
var MainImage = document.getElementsByClassName("mainImage")[0];
var SmallImage = document.getElementsByClassName("smallImage");


for (let i = 0; i < SmallImage.length; i++) {
    SmallImage[i].onclick = function(){
        MainImage.src = SmallImage[i].src;
    }
}


/* Pagination Function*/

function getPageList(totalPages, page, maxLength){
    function range(start, end){
        return Array.from(Array(end - start + 1), (_, i) => i + start);
    }

    var sideWidth = maxLength < 9 ? 1 : 2;
    var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
    var rightWidth = (maxLength - sideWidth * 2 - 3) >> 1;

    if (totalPages <= maxLength) {
        return range(1, totalPages);
    }

    if (page <= maxLength - sideWidth - 1 - rightWidth ){
        return range(1, maxLength - sideWidth - 1).concat(0, range(totalPages - sideWidth + 1, totalPages));
    }

    if (page >= totalPages - sideWidth - 1 - rightWidth) {
        return range(1, sideWidth).concat(0, range(totalPages - sideWidth - 1 - rightWidth - leftWidth, totalPages));
    }
    
    return range(1, sideWidth).concat(0, range(page - leftWidth, page + rightWidth), 0, range(totalPages - sideWidth + 1, totalPages));
}

$(function(){
    var numberOfItems = $('.shopContainer .pro').length;
    var limitPerPage = 5;
    var totalPages = Math.ceil(numberOfItems / limitPerPage);
    var paginationSize = 7;
    var currentPage;

    function showPage(whichPage){
        if(whichPage < 1  || whichPage > totalPages) return false;

        currentPage = whichPage;

        $('.shopContainer .pro').hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();

        $('.pagination li').slice(1, -1).remove();

        getPageList(totalPages, currentPage, paginationSize).forEach(item => {
            $('<li>').addClass('pageItem').addClass(item ? 'currentPage' : 'dots')
            .toggleClass('active', item === currentPage).append($('<a>').addClass('pageLink')
            .attr({href: 'javascript:void(0)'}).text(item || '...')).insertBefore('.nextPage');
        });
        $('.prevPage').toggleClass('disable', currentPage === 1);
        $('.nextPage').toggleClass('disable', currentPage === totalPages);
        return true;
    }
    $('.pagination').append(
        $('<li>').addClass('pageItem').addClass('prevPage').append($('<a>').addClass('pageLink').attr({href: 'javascript:void(0)'}).text('Prev')),
        $('<li>').addClass('pageItem').addClass('nextPage').append($('<a>').addClass('pageLink').attr({href: 'javascript:void(0)'}).text('Next'))
    );

    $('.shopContainer').show();
    showPage(1);

    $(document).on('click', '.pagination li.currentPage:not(.active)', function(){
        return showPage(+$(this).text());
    });
    $('.nextPage').on('click', function(){
        return showPage(currentPage + 1);
    });
    $('.prevPage').on('click', function(){
        return showPage(currentPage - 1);
    });
});