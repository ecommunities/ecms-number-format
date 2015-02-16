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
@param string valid		Class name to be added when value is valid (only while field has focus)
@param string invalid	Class name to be added when value is invalid (only while field has focus)

Option Examples:
var numOpts = {}						// Defaualt formatting, no decimals, increment by one.
var numOpts = { dec:2, inc:0.25 }; 		// No min or max, fix to two decimals and round to multiples of 0.25.
var numOpts = { min:1000, max:2000 };	// Enforce a minimum of 1000 and a maximum of 2000, with no decimals, and increment by one.
var numOpts = { min:1000, max:2000, dec:4, inc:0.0025, valid:'valid-class', invalid:'invalid-class' }; // The kitchen sink.

Standard Declaration:
$('#foo').on('keyup paste change', function() { $(this).ecmsNumberValidate(numOpts); });".
$('#foo').on('blur', function() { $(this).ecmsNumberFormat(numOpts); }).blur();

*/

jQuery.fn.extend({
  
	ecmsNumberValidate: function( options ) {
		
		var defaults = {
				min: null,
				max: null,
				dec: 0,
				inc: 1,
				valid: 'valid',
				invalid: 'invalid'
		};
            
		var options = $.extend(defaults, options);
		
		return this.each(function() {
			
			var num = $(this).val().toString();
			
			var opt = options;
			if (opt.min) { opt.min = parseFloat(opt.min); }
			if (opt.max) { opt.max = parseFloat(opt.max); }
			if (isNaN(opt.dec)) { opt.dec = 0; } else { opt.dec = parseFloat(opt.dec); }
			if (isNaN(opt.inc)) { opt.inc = 1; } else { opt.inc = parseFloat(opt.inc); }
			
			// Eliminate non-numeric components
			num = parseFloat(num);
			
			// Skip if num is null 
			if (num == '') { 
				$(this).removeClass(opt.invalid + ' ' + opt.valid);
				return null; 
			}
			
			// Prepare num for numeric operations now
			num = parseFloat(num);
			
			// Make sure the number is equal to the required increment
			if (opt.inc != 1) { 
				if (num != (Math.round(num * (1/opt.inc)) / (1/opt.inc))) {
					$(this).removeClass(opt.valid).addClass(opt.invalid);
					return null;
				} 
			}
			
			// Check min/max
			if (opt.min != null && num < opt.min) {
				$(this).removeClass(opt.valid).addClass(opt.invalid);
				return null;
			} else if (opt.max != null && num > opt.max) {
				$(this).removeClass(opt.valid).addClass(opt.invalid);
				return null;
			}
			
			// Passed all checks, indicate validity
			$(this).removeClass(opt.invalid).addClass(opt.valid);
			
			// Allow chaining
			return this;
			
		});
		
	},
	
	ecmsNumberFormat: function( options ) {
		
		var defaults = {
				min: null,
				max: null,
				dec: 0,
				inc: 1,
				valid: 'valid',
				invalid: 'invalid'
		};
            
		var options = $.extend(defaults, options);
		
		return this.each(function() {
			
			// Eliminate non-numeric components, and reset the value
			var num = parseFloat($(this).val());
			$(this).val(num);
			
			var opt = options;
			if (opt.min) { opt.min = parseFloat(opt.min); }
			if (opt.max) { opt.max = parseFloat(opt.max); }
			if (isNaN(opt.dec)) { opt.dec = 0; } else { opt.dec = parseFloat(opt.dec); }
			if (isNaN(opt.inc)) { opt.inc = 1; } else { opt.inc = parseFloat(opt.inc); }
			
			// Skip if num is null 
			if (num == '') { 
				$(this).removeClass(opt.invalid + ' ' + opt.valid);
				return null;
			}
			
			// Make sure the number is equal to the required increment
			if (opt.inc != 1) { num = (Math.round(num * (1/opt.inc)) / (1/opt.inc)); }
			
			// Fix precision
			num = num.toFixed(opt.dec);
			
			// Check min/max
			if (opt.min != null && num < opt.min) {
				num = opt.min.toFixed(opt.dec);
			} else if (opt.max != null && num > opt.max) {
				num = opt.max.toFixed(opt.dec);
			}
			
			// Set the formatted num and remove any classes left over from validation
			$(this).val(num).removeClass(opt.invalid + ' ' + opt.valid);
			
			// Allow chaining
			return this;
			
		});
	
	}

});