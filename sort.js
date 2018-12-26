$(".sortable").click(function() {
    var order = $(this).hasClass('asc') ? 'desc' : 'asc';
    $('.sortable').removeClass('asc').removeClass('desc');
    $(this).addClass(order);
    
    var colIndex = $(this).prevAll().length;
    var tbody = $(this).closest("table").find("tbody");
    var rows = tbody.find("tr");
    
    rows.sort(function(a, b){
        var A = $(a).find("td").eq(colIndex).text();
        var B = $(b).find("td").eq(colIndex).text();

        if(!isNaN(A)) A = Number(A);
        if(!isNaN(B)) B = Number(B);
        
        return order == 'asc' ? A > B : B > A;
    });
    
    $.each(rows, function(index, element){
        tbody.append(element);
    });
});
