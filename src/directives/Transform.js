import Vue from "vue";

Vue.directive("meu-transform", {
  bind(el, bind, vnode) {
    let current = 0;

    el.addEventListener("dblclick", function() {
      let increase = 90;
      let animate = false;

      if (bind.value) {
        increase = bind.value.increase;
        animate = bind.value.animate;
      }
      current += increase;
      if (animate) el.style.transition = "transform .5s";
      el.style.transform = `rotate(${current}deg)`;
    });
  }
});
