import Vue from 'vue'

export default const EventBus = new Vue()

window.scaned = function (type, result, file) {
    const obj = {
        type: type,
        result: result,
        file: file,
    }

    EventBus.$emit('plus-scan', obj)
}
