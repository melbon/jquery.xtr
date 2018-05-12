/*!
 * July 2017
 * xtr 1.0.0
 * @author Mario Vidov
 * @url http://vidov.it
 * @twitter MarioVidov
 * MIT license
*/

(function($) {
    var pluginName = 'xtr';

    var settings = {
        default: 'en',
        lang: 'en',
        regExp: {
            '': /\s/g,
            '_': /[&<>"'`\/=]/g
        }
    };

    var config = {
        defaultClass: 'data-xtr-default',
        langClass: 'data-xtr-lang',
        langKey  : 'data-xtr-key',
        langOrig : 'data-xtr-original'
    };

    function Plugin(element, options) {
        options = options || {};
        this.$element = $(element);
        this.options  = $.extend(true, {}, settings, options);
        this.selector = '[xtr]';
        this.regExp = this.options.regExp;
        this.default = this.options.default;
        this.t = this.options.t;
        this.l = this.options.lang;

        this.$element.attr(config.langClass, this.l)
                 .attr(config.defaultClass, this.default);
        this.init();
    }

    Plugin.prototype.lang = function(l) {
        if (l && l === 'reset') {
            this.l = this.default;
        } else if (l) {
            this.l = l;
        }
        this.init();
    };

    Plugin.prototype.set = function(index) {
        var $el = $('[' + config.langKey + '="' + index + '"]');
        var original = $el && $el.attr(config.langOrig) || index;
        return (this.t && this.t[index] && this.t[index][this.l]) ? this.t[index][this.l] : original;
    };

    Plugin.prototype.init = function() {
        var self = this;
        this.$element.attr(config.langClass, this.l);
        $(self.selector).add('[' + config.langKey + ']').each(function () {
            var $this = $(this);
            var key = $this.attr(config.langKey);
            var original = $this.attr(config.langOrig);
            var text = $this.text();
            if (!key) {
                key = text;
                for (var i in self.regExp) {
                    key = key.replace(self.regExp[i], i);
                }
                $this.attr(config.langKey, key);
            }
            if (!original) {
                $this.attr(config.langOrig, text);
            }
            $this.html(self.set(key));
        });
    };

    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
            }
        });
    };
})(jQuery);
