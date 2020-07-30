function draggable() {
    $('.item').draggable({
        start: function() {
            $(this).addClass( "isDragging" );
        },
        
        // stop: function() {
        // }
    });
}
draggable();
$('.dropzone').droppable({
    classes: {
        'ui-droppable-active': 'dropzoneActive',
        'ui-droppable-hover': 'dropzoneHover'
    },

    drop: function(event, ui) {
        if (event.type === 'drop') {
            let item = document.querySelector('.isDragging');
            let card = $(this).attr('id');

            $(`#${card}`).prepend(item);
            $('.isDragging').css({'left': '0', 'top': '0'});
            $('.isDragging').removeClass('isDragging');
        }
    }
});

$('#add').click(() => {
    $('#list').prepend('<div class="item"><h3 class="item-title">Item Title</h3><span class="item-content">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span></div>');
    draggable();
})