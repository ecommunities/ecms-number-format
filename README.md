# ecmsNumberFormat jQuery plugin
jQuery Plugin for Input Field Number Formatting

----
Author: Kevin Farley / eCommunities / http://ecms.io

MIT license: http://www.opensource.org/licenses/mit-license.php

http://github.com/ecommunities/ecmsNumberFormat

- @method .ecmsNumberFormat( [min = null], [max = null], [dec = 0], [inc = 1] )
- @param float|null min	The minimum value to allow
- @param float|null max	The maximum value to allow
- @param int dec The number of decimal places to fix the value to
- @param float inc The increment value to match to 
- @param string valid Class name to be added when value is valid (only while field has focus)
- @param string invalid Class name to be added when value is invalid (only while field has focus)

### Examples:
```
// Defaualt formatting, no decimals, increment by one.
$("#foo").ecmsNumberFormat();					
    
// No min or max, fix to two decimals and round to multiples of 0.25.
$("#foo").ecmsNumberFormat(null,null,2,0.25); 	

// Enforce a minimum of 1000 and a maximum of 2000, with no decimals, and increment by one.
$("#foo").ecmsNumberFormat(1000,2000);
```

### Config Examples:
```
// Defaualt formatting, no decimals, increment by one.
var numOpts = {}					

// No min or max, fix to two decimals and round to multiples of 0.25.	
var numOpts = { dec:2, inc:0.25 };

// Enforce a minimum of 1000 and a maximum of 2000, with no decimals, and increment by one.
var numOpts = { min:1000, max:2000 };

// The kitchen sink.
var numOpts = { min:1000, max:2000, dec:4, inc:0.0025, valid:'valid-class', invalid:'invalid-class' };
```

### Standard Declaration:
```
$('#foo').on('keyup paste change', function() { $(this).ecmsNumberValidate(numOpts); });".
$('#foo').on('blur', function() { $(this).ecmsNumberFormat(numOpts); }).blur();
```