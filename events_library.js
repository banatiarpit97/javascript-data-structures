class Events{
    constructor(){
        this.events = {};
    }
    on(event, callback){
        this.events[event] ? this.events[event].push(callback) : this.events[event] = [callback];
    }
    trigger(event){
        if(this.events[event]){
            for(let cb of this.events[event]){
                cb();
            }
        }
        else{
            console.log('event not found')          
        }
    }
    off(event){
        if(this.events[event]){
            delete this.events[event];
        }
        else{
            console.log('event not found')
        }
    }
}

events = new Events;
events.on('click', ()=>{console.log(1)});
events.on('click', () => { console.log(2) });
events.on('chatak', ()=>{ console.log(3) });
events.on('chatak', ()=>{ console.log(4) });
events.trigger('chatak');
events.trigger('click');
events.off('click')
events.trigger('click');
