function format(string ){
    var regex = '';
    var format = 'XXX-XXX-XXX-XXX-XX-XX';
    for(var i = 1; format.indexOf('X') >= 0; ++i){
        format = format.replace('X', '$'+i);
        regex += '(\\d)';
    }
    regex += '[^]*'; 
    return string.replace(new RegExp(regex), format);
}


console.log(format('9931411132312314232'));