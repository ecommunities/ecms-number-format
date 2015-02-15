# ecmsNumberFormat jQuery plugin
jQuery Plugin for Input Field Number Formatting

----
Author: Kevin Farley / eCommunities
MIT license: http://www.opensource.org/licenses/mit-license.php

http://github.com/ecommunities/ecmsNumberFormat
http://ecms.io

@method .ecmsNumberFormat( [min = null], [max = null], [dec = 0], [inc = 1] )
@param float|null min	The minimum value to allow
@param float|null max	The maximum value to allow
@param int dec 			The number of decimal places to fix the value to
@param float inc		The increment value to match to 

### Examples:
    $("#foo").ecmsNumberFormat();					// Defaualt formatting, no decimals, increment by one.
    $("#foo").ecmsNumberFormat(null,null,2,0.25); 	// No min or max, fix to two decimals and round to multiples of 0.25.
    $("#foo").ecmsNumberFormat(1000,2000);			// Enforce a minimum of 1000 and a maximum of 2000, with no decimals, and increment by one.
