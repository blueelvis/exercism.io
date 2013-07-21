exercism.views.CountNotifications = Backbone.View.extend({
  events: {
    "click": "toggle"
  },

  initialize: function() {
    _.bindAll(this);
    this.listenTo(this.collection, "add", this.render);
    this.listNotifications = new exercism.views.ListNotifications({
      collection: this.collection
    });
    this.$el.append(this.listNotifications.el);
    this.toggle();
  },

  toggle: function() {
    console.log("count-toggle");
    this.listNotifications.toggle();
  },

  render: function() {
    var size = this.collection.size();
    this.$el.html(size + ' notifications');
    this.$el.append(this.listNotifications.el);
    this.listNotifications.setElement(this.$('#list-notifications')).render();
    return this;
  }
});
