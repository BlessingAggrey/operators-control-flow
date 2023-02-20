// let result = document.getElementById('result')

// result.innerText =  'Result here...'

// Program for Bolatito  in Greenfield high school- Question 3

let Sciences = 'Physics, Chemistry, Biology, Technical Drawing';
let Arts = 'Government, Economics, Literature, History';
let socialSciences = 'Accounting, Commerce, Marketing, Geography';
let General = 'English, Mathematics';
let bolatitosGroup = 'Arts'

if (bolatitosGroup === 'Arts') {console.log('Here are the Arts subjects: ' + Arts + ', ' + General + '.');}
else if (bolatitosGroup === 'Sciences') {console.log('Here are the Science subjects: ' + Sciences + ', ' + General + '.');}
else if (bolatitosGroup === 'socialSciences') {console.log('Here are the Social science subjects: ' + socialSciences + ', ' + General + '.');}
else {console.log(General);}