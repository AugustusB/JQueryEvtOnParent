(function(ns1, ns2){
    ns2.ParentEvent = function ParentEvent(){
    //private member
        tbodyEvt = function tbodyEvt(findElem){
            $(findElem).on('click', 'td', function(e){
                var name = $(this).text();
                $('#selectedPerson').text(name);
            });
        },

        addRowToTable = function addRowToTable(findElem){
            var table = $('#customers tbody');
            $(findElem).on('click', function(){
                table.append('<tr class="Highlight"><td>Bob</td><td>Crane</td></tr>');
            });
        },

        onHover = function onHover(findElem){
            $(findElem).hover(function(){
                $(this).toggleClass('HighlightSelection');
            });
        },

        // Method without toggle
        onHover2 = function onHover(findElem){
            $(findElem).hover(
                function(){
                    $(this).addClass('HighlightSelection')
                },
                function(){
                    $(this).removeClass('HighlightSelection')
                }
            );
        },
        
        removeClsFunc = function removeClsFunc(findElem){
            $(findElem).each(function(){
                $(this).removeClass('Highlight');
            });
        };

    //public member
        return {
            tbodyEvt: tbodyEvt,
            addRowToTable: addRowToTable,
            onHover:onHover,
            onHover2:onHover2,
            removeClsFunc: removeClsFunc
        };
    };
    
})(window.Gus = window.Gus || {}, 
    window.Gus.ExJqEvents = window.Gus.ExJqEvents || {});