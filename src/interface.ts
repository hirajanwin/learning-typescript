interface IVideo {
	length: number;
	rated?: boolean;
}

class Video implements IVideo {
	protected readonly privateValue: string;

	constructor(public length: number, public rated?: boolean) {
		this.privateValue = 'Some private string value';
		console.log(this.someFunction(this.privateValue));
	}

	private someFunction(value: string) {
		return value;
	}
}

const someVideo = new Video(123, true);

document.body.innerText = someVideo.length.toString();
console.log(someVideo);
