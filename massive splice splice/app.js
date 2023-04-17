var m = [ 'jan', 'feb', ' march', ' apr', ' may ', ' june'];

// m.splice(1, 3)
// splice ni elementiig ustgaj ugdgug ehnii too n elementiin too 
// daraaginh n ali hurtl ustgahig zaaj ugnu taslaad avj bga gsen ug

var x = m.slice(1, 3)
// slice copydoj avaad tavij bgaa massive-iig gemteehguigeer
console.log(x)

console.log(m);

var course = {
    name: 'JS ',
    price: " 40k ",
    lessons: [
        {
            name: 'introduction',
            length: ' 11:18 '
        }, 
        {
            name: '2',
            length: ' 30:18 '
        }
    ]
}
console.log(course.name + ' surgaltin une ' + course.price + 
' bna. hicheel 1 ' + course.lessons[0].name + '" ');
