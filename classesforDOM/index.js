import { Component } from "./Components.js";
import { Form } from "./Forms.js";
import { Inputs } from "./Inputs.js";
import { Labels } from "./Labels.js";

const head = new Component('h1','body',{textContent: 'red', style: "color:red"})

head.render()
head.tag = 'h3'
head.build()
head.render()

let formed = new Form('body')
let label = new Labels('teste',"form",{htmlFor: 'testInput'})
let testInput = new Inputs("form",{id: "testInput", name: "name", type:'radio'})
formed.render()

label.render()
formed.addingChildren(testInput)
