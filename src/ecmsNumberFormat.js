/**
ecmsNumberFormat jQuery plugin
Author: Kevin Farley
MIT license: http://www.opensource.org/licenses/mit-license.php

http://github.com/ecommunities/ecmsNumberFormat
http://ecms.io

@method .ecmsNumberFormat( [min = null], [max = null], [dec = 0], [inc = 1] )
@param float|null min	The minimum value to allow
@param float|null max	The maximum value to allow
@param int dec 			The number of decimal places to fix the value to
@param float inc		The increment value to match to 

Examples:
    $("#foo").ecmsNumberFormat();					// Defaualt formatting, no decimals, increment by one.
    $("#foo").ecmsNumberFormat(null,null,2,0.25); 	// No min or max, fix to two decimals and round to multiples of 0.25.
    $("#foo").ecmsNumberFormat(1000,2000);			// Enforce a minimum of 1000 and a maximum of 2000, with no decimals, and increment by one.
*/

jQuery.fn.extend({
  
	ecmsNumberFormat: function( options ) {
		
		var defaults = {
				min: null,
				max: null,
				dec: 0,
				inc: 1
		};
            
		var options = $.extend(defaults, options);
		
		return this.each(function() {
			
			var num = $(this).val();
			
			var opt = options;
			if (opt.min) { opt.min = parseFloat(opt.min); }
			if (opt.max) { opt.max = parseFloat(opt.max); }
			if (isNaN(opt.dec)) { opt.dec = 0; } else { opt.dec = parseFloat(opt.dec); }
			if (isNaN(opt.inc)) { opt.inc = 1; } else { opt.inc = parseFloat(opt.inc); }
			
			// Eliminate non-numeric components
			//num = num.match(/^-?[0-9]\d*(\.\d+)?$/,'');
			num = num.replace(/[^0-9\.\-]+/g,'');

			// Skip if num is null 
			if (num == '') { $(this).val(num); return null; }
			
			// Skip when value ending in trailing "."
			if (num.substring(-1) == '.') { $(this).val(num); return null; }
			
			// Make sure the number is equal to the required increment
			if (opt.inc > 0) { num = (Math.round(num * (1/opt.inc)) / (1/opt.inc)); }
			
			// Fix precision
			num.toFixed(opt.dec);
			
			// Check min/max
			if (opt.min != null && num < opt.min) {
				num = opt.min.toFixed(opt.dec);
			} else if (opt.max != null && num > opt.max) {
				num = opt.max.toFixed(opt.dec);
			}
			
			// Set the formatted num
			$(this).val(num);
			
		});
		
	}

});