export let a = "Iam A from  data1.ts file";
let b = "Iam B from  data1.ts file";
let c = "Iam C from data2.ts file";
function sum(c, d) {
    return console.log(c + d);
}
const data1 = {
    "name": "Atif Ali",
    "age": "24",
    "isStudent": false,
    "address": {
        "street": "23 mmain st",
        "city": "Lahore",
        "country": "Pakistan"
    },
    "FavoriteFruit": ["mango", "apple", "orange", "bannana",],
    "contact": {
        "email": "alishahatif77@gmail.com",
        "phone": "03013393810",
    }
};
export default b;
export { b, c, sum };
