// window.onscroll = function() {
//     scrollFunction()
// };

// function scrollFunction() {
//     if (document.body.scrollTop > 20) {
//         document.getElementById("header").style.display = "none";
//         // document.getElementById(".header").style.position = "initial";
//     } else {
//         document.getElementById("header").style.display = "block";
//         // document.getElementById(".header").style.position = "fixed";
//     }
// };

// imports
import nodeW3CValidator from 'node-w3c-validator';

// paths
const validatePath = './*.html';
// or directly to the file - './dist/index.html'
// or a glob pattern - './dist/**/*.html'
const resultOutput = './reports/result.html';

// validate
nodeW3CValidator(validatePath, {
    format: 'html',
    skipNonHtml: true,
    verbose: true
}, function(err, output) {
    if (err === null) {
        return;
    }
    nodeW3CValidator.writeFile(resultOutput, output);
});