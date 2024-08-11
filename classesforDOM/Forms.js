import { Component } from "./Components.js";

export class Form extends Component{
    constructor(parents,options){
        super('form',parents,options)
    }

    addingChildren(...children){
        children.forEach(child => {
            this.access().appendChild(child.access())
        })
    }
}