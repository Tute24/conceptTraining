export class Component{
    #element 
    constructor(tag, parent, options){
        this.tag = tag
        this.parent = parent
        this.options = options
        this.build()
    }

    access(){
        return this.#element
    }

    build(){
         this.#element = document.createElement(this.tag)
         Object.assign(this.#element,this.options)
         return this
        
    }

    render(){
        if(this.parent instanceof Component){
            this.parent.access().append(this.#element)
        } else {
            document.querySelector(this.parent).append(this.#element)
        }
    }
}


