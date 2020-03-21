function createPyramid(rows)
{
    for (let i = 0; i < rows; i++) {
        var output = '';
   
        for (let k = 0; k <= i; k++) output += '# ';
        console.log(output);  
    } 
}

createPyramid(1);
createPyramid(5);
createPyramid(3); 