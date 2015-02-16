# ecmsNumberFormat jQuery plugin
#####jQuery Plugin for Input Field Number Formatting
MIT license: http://www.opensource.org/licenses/mit-license.php

Author: Kevin Farley / eCommunities / http://ecms.io
http://github.com/ecommunities/ecmsNumberFormat

### Configuration Options
- @param float|null min	The minimum value to allow
- @param float|null max	The maximum value to allow
- @param int dec The number of decimal places to fix the value to
- @param float inc The increment value to match to 
- @param string valid Class name to be added when value is valid (only while field has focus)
- @param string invalid Class name to be added when value is invalid (only while field has focus)

### Configuration Examples:
```
// Defaualt formatting, no decimals, increment by one, no min or max.
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

## TO-DO's

- add support for more numerical types (i.e. scientific notation)
