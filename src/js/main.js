(function($){
	$(document).on('ready', function(){

		$(document)
      .foundation({
        abide : {
          patterns: {
            dashes_only: /^[0-9-]*$/
          }
        }
      });

    /* SMOOTH SCROLL
    ---------------------------------------------------------------------------- */
    $(".right li a[href*=#]").click(function() {
      $('html, body').animate({
          scrollTop: $("#work").offset().top -100
      }, 1500);
    });


    /* AJAX SUBMIT
    ---------------------------------------------------------------------------- */
    $('#contact').on('valid.fndtn.abide', function() {
      // Handle the submission of the form

      // Get the form.
      var form = $('#contact');

      // Get the messages div.
      var fM = $(".form-messages");
      var fmInner = $('#form__messages');

      // Serialize the form data.
      var formData = $(form).serialize();

      var timeoutID;

    // Submit the form using AJAX.
      $.ajax({
        type: 'POST',
        url: 'dist/mail/mail.php',
        // post payload:
        data: formData,
        success: function(response) {
      // Make sure that the formMessages div has the 'success' class.
      $(fM).removeClass('error');
      $(fM).addClass('success');

      // Set the message text.
      $(fmInner).text(response);

      function delay_fade() {
        timeoutID = window.setTimeout(delayed, 10000);
      }

      function delayed() {
        $(fM).fadeOut( 800 );
      }

      delay_fade();

      // Clear the form.
      $('#name').val('');
			$('#phone').val('');
      $('#email').val('');
      $('#message').val('');
    },
        error:function(data) {
      // Make sure that the formMessages div has the 'error' class.
      $(fM).removeClass('success');
      $(fM).addClass('error');

      // Set the message text.
      if (data.responseText !== '') {
          $(fmInner).text(data.responseText);
      } else {
          $(fmInner).text('An error occured, please try again');
        }
      }
    });
      return false;
    });

/* OWL CAROUSEL APPEND
---------------------------------------------------------------------------- */

	  if(window.location.href.indexOf("projects") > 0) {
     $('body').append("
		 <script src='../dist/js/owl.carousel.js'></script>
     <script>
     $(document).ready(function() {

     var owl = $('#carousel');

     owl.owlCarousel({
         navigation: false,
         slideSpeed: 500,
         paginationSpeed: 500,
         singleItem: true,
         autoPlay: true,
         stopOnHover: true,
     });

     // Custom Navigation Events
     $('.next').click(function(){
       owl.trigger('owl.next');
     })
     $('.prev').click(function(){
       owl.trigger('owl.prev');
     })

     $('.carousel img, .prev, .next').mouseover(function() {
       $('.carousel__btns').addClass('active');
     })
     .mouseout(function() {
       $('.carousel__btns').removeClass('active');
     });

   });
     </script>");
	 }

/* COUNTER JS  Counter source http://codepen.io/syedrafeeq/pen/rcfsJ
---------------------------------------------------------------------------- */
      (function ($) {
        $.fn.countTo = function (options) {
          options = options || {};

          return $(this).each(function () {
            // set options for current element
            var settings = $.extend({}, $.fn.countTo.defaults, {
              from:            $(this).data('from'),
              to:              $(this).data('to'),
              speed:           $(this).data('speed'),
              refreshInterval: $(this).data('refresh-interval'),
              decimals:        $(this).data('decimals')
            }, options);

            // how many times to update the value, and how much to increment the value on each update
            var loops = Math.ceil(settings.speed / settings.refreshInterval),
              increment = (settings.to - settings.from) / loops;

            // references & variables that will change with each update
            var self = this,
              $self = $(this),
              loopCount = 0,
              value = settings.from,
              data = $self.data('countTo') || {};

            $self.data('countTo', data);

            // if an existing interval can be found, clear it first
            if (data.interval) {
              clearInterval(data.interval);
            }
            data.interval = setInterval(updateTimer, settings.refreshInterval);

            // initialize the element with the starting value
            render(value);

            function updateTimer() {
              value += increment;
              loopCount++;

              render(value);

              if (typeof(settings.onUpdate) == 'function') {
                settings.onUpdate.call(self, value);
              }

              if (loopCount >= loops) {
                // remove the interval
                $self.removeData('countTo');
                clearInterval(data.interval);
                value = settings.to;

                if (typeof(settings.onComplete) == 'function') {
                  settings.onComplete.call(self, value);
                }
              }
            }

            function render(value) {
              var formattedValue = settings.formatter.call(self, value, settings);
              $self.html(formattedValue);
            }
          });
        };

        $.fn.countTo.defaults = {
          from: 0,               // the number the element should start at
          to: 0,                 // the number the element should end at
          speed: 1000,           // how long it should take to count between the target numbers
          refreshInterval: 100,  // how often the element should be updated
          decimals: 0,           // the number of decimal places to show
          formatter: formatter,  // handler for formatting the value before rendering
          onUpdate: null,        // callback method for every time the element is updated
          onComplete: null       // callback method for when the element finishes updating
        };

        function formatter(value, settings) {
          return value.toFixed(settings.decimals);
        }
      }(jQuery));

      jQuery(function ($) {
        // custom formatting example
        $('#counter').data('countToOptions', {
        formatter: function (value, options) {
          return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
        }
        });

        // start all the timers
        $('.counter').each(count);

        function count(options) {
        var $this = $(this);
        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
        $this.countTo(options);
        }
      });

	});
})(jQuery);


//
//   /* INPUT FOCUS EFFECT
//   ---------------------------------------------------------------------------- */
//   $("input, textarea").focus(function(){
//     $(this).parent().addClass("is-active is-completed");
//   });
//
//   $("input, textarea").focusout(function(){
//     if( $(this).val() === "") {
//       $(this).parent().removeClass("is-completed");
//     $(this).parent().removeClass("is-active");
//     }
//   });
//

//
//
//
// }); // END OF DOCUMENT READY
