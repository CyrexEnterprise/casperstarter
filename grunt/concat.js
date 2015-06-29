'use strict';

module.exports = {
  css: {
    src: [
    "<%= dirs.source %>/css/icons.less",
    "<%= dirs.source %>/css/general.less",
    "<%= dirs.source %>/css/utilities.less",
    "<%= dirs.source %>/css/casper.less",
    "<%= dirs.source %>/css/single-post.less",
    "<%= dirs.source %>/css/author-profile.less",
    "<%= dirs.source %>/css/read-more.less",
    "<%= dirs.source %>/css/pagination.less",
    "<%= dirs.source %>/css/footer.less",
    "<%= dirs.source %>/css/media-queries.less",
    "<%= dirs.source %>/css/animations.less",
    "<%= dirs.source %>/css/casperStarter.less",
    ],
    dest: "<%= dirs.release %>/css/casperStarter.less"
  }
};