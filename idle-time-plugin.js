$.fn.NatIdleTime = function(options ) {
    // Bob's default settings:
     var timeoutID;
    var defaults = {
        idleTime: 15000,
        onActive: function(){},
       onInactive: function(){}
        
    };
     var settings = $.extend( {}, defaults, options );
 
    
 function setup() {
            this.addEventListener("mousemove", resetTimer, false);
            this.addEventListener("mousedown", resetTimer, false);
            this.addEventListener("keypress", resetTimer, false);
            this.addEventListener("DOMMouseScroll", resetTimer, false);
            this.addEventListener("mousewheel", resetTimer, false);
            this.addEventListener("touchmove", resetTimer, false);
            this.addEventListener("MSPointerMove", resetTimer, false);

            startTimer();
        }
    function startTimer() {
            timeoutID = window.setTimeout(goInactive, settings.idleTime);
        }

        function resetTimer(e) {
            window.clearTimeout(timeoutID);

            goActive();
        }
        
        function goInactive() {
          var d = new Date();
            settings.onInactive(d);
        }

        function goActive() {
          var d = new Date();
          settings.onActive(d);
            startTimer();
        }
   return this.each(function() {
        setup();
    });
  };