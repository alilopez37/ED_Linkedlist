import { list } from "./dependecies.mjs";

list.push(1)
list.push(2)
list.push(3)
list.push("Hola")

for (let i=0;i<list.size();i++)
    console.log(list.getElementAt(i).getData());