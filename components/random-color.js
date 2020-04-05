AFRAME.registerComponent("random-color", {
    dependencies: ["material"],

    init: function () {
        // Set material component's color property to a random color.
        this.el.setAttribute("material", "color", Math.random() * 0xffffff);
    },
});
