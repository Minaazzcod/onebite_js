// Day3 Mission01

const multFunction = (num1,num2) => num1*num2;

console.log(multFunction(3,4));


// Day3 Mission02

const bookInfo = {
	title : '소년이 온다',
	anthor : '한강',
	getSummary : function(){
		return `책 제목은 "${this.title}" 이고 저자는 "${this.anthor}"이다.`
	}
};

console.log(bookInfo.getSummary());


// Day3 Mission03

function sumNumbers(a,b) {
	function addFive(number){
		return number + 5;
	}

	return a + addFive(b);
}

console.log(sumNumbers(3,7));
console.log(sumNumbers(10,5));