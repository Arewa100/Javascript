let id = "1"
let available = "1"
let count = "6"
let name = "Mystery"
let author = "Miracle"


const ans = {
	id: Number(id),
	available: Boolean(available),
	count: Number(count),
	name: name,
	author: author
}

console.log(ans)



function User(id, available, count, name, author) {
	this.id = Number(id);
	this.available = Boolean(available);
	this.count = Number(count);
	this.name = name;
	this.author = author;
}

const user = new User(id, available, count, name, author)
console.log(user.id)
console.log(user.available)
console.log(user.count)
console.log(user.name)
console.log(user.author)







