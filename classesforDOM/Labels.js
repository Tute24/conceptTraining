import { Component } from "./Components.js";

export class Labels extends Component{
    constructor(text,parent,options) {
        super('label',parent,Object.assign({},options,{textContent: text}))
        
    }
}