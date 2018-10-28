var array = [];
var calculation;

var calculator = {
    init: function () {
        this.digits()
        this.operators()
        this.equals()
        this.clear()
    },
    digits: function () {
        $('.digits').click(function(){
            if(!calculation){
                $('.display').val($('.display').val() + $(this).text())
            }else{
                calculation = ''
                $('.display').val($(this).text())
            }
        })
    },
    operators: function () {
        $('.operators').click(function(){
            array.push(Number($('.display').val()).toString())
            array.push($(this).text())
            $('.display').val('')
        })
    },
    equals: function () {
        $('.equals').click(function(){
            array.push($('.display').val())
            calculation = eval(array.join(' '))
            $('.display').val(calculation)
            array = []
        })
    },
    clear: function () {
        $('.clear').click(function(){
            array = []
            $('.display').val('')
        })
    }
}
export { calculator, array, calculation }
