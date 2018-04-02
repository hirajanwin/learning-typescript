class SomeClass {
	public someFunction() {
		console.log(this.createTextString());
	}

	private createTextString() {
		return 'This is someFunction() running inside of an instance of SomeClass';
	}
}

const newClass = new SomeClass();
newClass.someFunction();
