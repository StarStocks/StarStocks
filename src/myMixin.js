export const myMixin = {
    data() {
      return {
        title: 'Mixins',
        copyright: 'All rights reserved'
      };
    },
    created: function() {
      this.greetings();
    },
    methods: {
      greetings: function() {
      }
    }
  };