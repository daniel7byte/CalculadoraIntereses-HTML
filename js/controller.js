// A $( document ).ready() block.
$( document ).ready(function() {

    var three_days_date = moment().add(3, 'days').format('YYYY-MM-DD'); // Aumenta tres días a la fecha actual para deshabilitar esos campos en el selector
    var default_date = moment().add(1, 'months').format('YYYY-MM-DD'); // Por defecto pone la fecha de pago dentro de 1 mes
    var limit_date = moment().add(3, 'months').format('YYYY-MM-DD'); // Pone el limite de pago a 3 meses

    $('#input_date').val(default_date); // Pone la fecha actual en el campo
    $('#input_date').attr({"min": three_days_date, "max": limit_date}); // Ajusta los limites de fechas

    // Escucha los cambios que se hagan en el campo de fecha
    $('#input_date').change(function() {
        var days = daysBetweenDates(); // Funcion que calcula la diferencia entre dos fechas
        $('#description_date_range').text(days + ' días'); // imprime en el div
    });

    // Esta funcion toma la fecha actual y la fecha que el usuario eligió en el campo, así sabrá dentro de cuantos días se hará el pago
    // valor que se imprime en el span#description_date_range
    function daysBetweenDates() {
        var input_date = moment($('#input_date').val(), 'YYYY-MM-DD'); // Obtiene la fecha del campo
        var today_date = moment(new Date()); // Obtiene la fecha actual en el objeto moment()
        var duration = moment.duration(input_date.diff(today_date)); // Calcula la diferencia entre fechas
        var days = parseInt(duration.asDays()); // convierte la diferencia en días
        return days;
    }
    
    // Retro alimentacion de valores, que se usa para cuando se hagan cambios en el campo del valor y en range
    // Cuando cambie el range
    $('#range_number').change(function(){
        $('#input_number').val($(this).val());
        console.log($(this).val());
    });

    // Cuando cambie el campo
    $('#input_number').change(function(){
        $('#range_number').val($(this).val());
        console.log($(this).val());
    });

    // Calculo de valores
    function calculate() {
        
    }

    // Funciones ejecutadas al terminar la carga del DOM
    daysBetweenDates();
});
        