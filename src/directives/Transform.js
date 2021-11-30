import Vue from "vue";

Vue.directive("meu-transform", {
  bind(el, bind, vnode) {
    let current = 0;

    el.addEventListener("dblclick", function() {
      let increase = bind.value || 90;
      let efeito;

      if (!bind.arg || bind.arg == "rotate") {
        if (bind.modifiers.reverse) {
          current -= increase;
        } else {
          current += increase;
        }
        efeito = `rotate(${current}deg)`;
      } else if (bind.arg == "scale") {
        efeito = `scale(${increase})`;
      }
      if (bind.modifiers.animate) el.style.transition = "transform .5s";
      el.style.transform = efeito;
    });
  }
});
