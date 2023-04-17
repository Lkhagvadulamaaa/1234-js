var helnuud = ['js', 'phyton', 'c#'];

helnuud[1] = 'go';
// massive ru element nemeh arguud
helnuud[3] = 'php'
helnuud[helnuud.length] = 'java'

console.log(helnuud[3]);

console.log(helnuud.length + ' ш хэл бна')
// helnuudiin  urt n gsen ug

// massive n urdaas nemeh 
helnuud.unshift('angular')

// urdaas n hasah
// helnuud.shift();

// tusguld n element nemeh
helnuud.push('aaaa')

// console.log(helnuud[helnuud.length-1])
// tugsguliin elementiig gargh
console.log(helnuud.pop())

console.log(helnuud.indexOf('angular'))
if(helnuud.indexOf('lisp') === -1)
        console.log('sorry bro, naadah chini alga');
    else 
        console.log(helnuud.indexOf('lisp') + 'index deer ene hel baina')


console.log(helnuud)