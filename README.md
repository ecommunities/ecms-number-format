# ecmsNumberFormat jQuery plugin
#####jQuery Plugin for Input Field Number Formatting
MIT license: [http://www.opensource.org/licenses/mit-license.php]

Author: Kevin Farley / eCommunities / [http://ecms.io]

GitHub: [http://github.com/ecommunities/ecmsNumberFormat]

This plugin allows you to provide visual validation of a numeric input field (input, number) via addition/removal of classes both during editing, and after leaving the field.  In the standard declaration below, we 
demonstrate how you can validated against a variety of criteria without impeding a users ability to enter data in their own way, and then force the field to update to the closest valid data upon leaving focus.  Criteria 
currently include: *min*imum value, *max*imum value, *dec*imal precision, and *inc*rement, but the to-do's include the ability to add additional filters via Regex strings, feel free to lend a hand!

### Configuration Examples:
```javascript
/*
@param float|null min	The minimum value to allow
@param float|null max	The maximum value to allow
@param int dec The number of decimal places to fix the value to
@param float inc The increment value to match to 
@param string valid Class name to be added when value is valid (only while field has focus)
@param string invalid Class name to be added when value is invalid (only while field has focus)
*/

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
```javascript
$('#foo').on('keyup paste change', function() { $(this).ecmsNumberValidate(numOpts); });
$('#foo').on('blur', function() { $(this).ecmsNumberFormat(numOpts); }).blur();
```

## TO-DO's

- add support for more numerical types (i.e. scientific notation)
- add support for custom match regex queries in addition to standard options
- add support for helpful error messages
- add example html file + test files / cases
