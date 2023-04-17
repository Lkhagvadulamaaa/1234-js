var h1 = {
    name: 'Lkhgvaa',
    job: 'programmist',
    hobby: 'duu sonsoh'
}
var h2 = {
    name: 'dulmaa',
    job: 'programmist',
    hobby: 'duu sonsoh'
}

console.log(h1.job + ' mergejiltei ' + h1.name + ' iin hobby ni '
 + h1.hobby + ' yum')

 var c211 = {
    name: 'dulmaa',
    job: 'programmist',
    hobby: ' duu sonsoh',
    author: h1,
    price: ' 146000',
    information: function() {
        console.log(this.job + ' mergejiltei ' + this.name + ' iin hobby ni '
 + this.hobby + ' yum')
    }
}.information();

// c211.information ()