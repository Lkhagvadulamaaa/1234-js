// Үндсэн оператор

var year, yearJohn, yearMark;

year = 2022;
ageJohn = 28;
ageMark = 40;

console.log('Энэ жил бол : ' + year);

yearJohn = year - ageJohn;
yearMark = year - ageMark;
console.log('Johnii tursun jil ' + yearJohn);
console.log('markin tursun on bol : ' + yearMark);

var future = year + 15;
console.log(year + '15 JILIIN DARAA ' + future + ' on bh bolno ');

// alert
var age = 24;
age += 5; // ene ni nemeed tentsuulj bga

// alert('сайн байна уу\nТаны нас : ' + age); // \n ni enter darj bga gsn ug

var birthDate = prompt('таны төрсөн он хэд вэ?');
if (birthDate !== null) {
	var currentYear = new Date().getFullYear();
	var age = currentYear - birthDate;
    var message = "сайн байна уу\nТаны нас : " + age;
	// Нөхцөл шалгах

	if (age > 18) {
		console.log('ta nasand hursen');
	} else if(age > 15) {
		console.log('ta ahlah angi bn');
	} else if(age > 6) {
        console.log('ta dund angi bn');
    } else {
        console.log("ta surguulid oroogu bn")
    }

    alert(message);
} else {
    alert('uuchlarai ta oilgoogu bn')
}
