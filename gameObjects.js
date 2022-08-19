'use strict';

class Mouse extends EngineObject {
    constructor(pos) {
        super(pos,vec2(8,1));
    }
    update() {
        if(isUsingGamepad) {
            this.pos.x += gamepadStick(0).x
        }
        else {
            this.pos.x = clamp(this.pos.x,this.size.x/2, levelSize.x - this.size.x/2)
        }
    }
}