const map = new Map();

const user = {
  id: 1,
};

map.set(user, "Binh");

console.log(map);
console.log(map.get(user));

map.forEach((value, key) => {
  console.log(key, value);
});
