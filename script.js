function* createHello() {
	const word = yield
	console.log(word)
}

const hello = createHello()
console.log("done: ",hello.next().done)
console.log("done:", hello.next('Max').done)


// console.log modified for output in plunker
