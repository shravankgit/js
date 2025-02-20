console.log("starting Object");

let movies = { name: "RRR", release: 2021, director: "rajamouli" }
console.log(movies);

let movie = { name: "RRR", release: 2021, director: "rajamouli" }
console.log(movie);
movie.badget = "2000crores";
console.log(movie);
movie["release"] = 2022;
console.log(movie);

function user(n, a, p) {
    this.name = n;
    this.age = a;
    this.place = p
}

let user1 = new user("abc", 25, "hyd");
console.log(user1);
let user2 = new user("xyz", 26, "Delhi");
console.log("print user222");
console.log(user2);

user2.mobile = 9923456781;
console.log(user2);


let user3 = Object.create(user1);
console.log("user1");
console.log(user1);
console.log("user3");
user3.name = "mmt";
user3.age = 35;
console.log(user3);


