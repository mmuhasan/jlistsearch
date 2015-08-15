# jQuery jlistSearch plugin

## Demo & Examples

<https://github.com/mmuhasan/jlistsearch/tree/master/test>

### Version
1.0.0

## Example Usage

### HTML

```html
<input type="text" id="search" class="search" rel="search-items" />
    <div class="list">
        <ul class="search-items">
          <li>Australia</li>
          <li>Austria</li>
          <li>Belgium</li>
          <li>Canada</li>
          <li>United States </li>
        </ul>
    </div>
```
The input element should have an attribute rel which should contain the class name of the ul element. This is how the plug-in will select the right ul to filter.

### jQuery

Use the plug-in as follows:

```js
$("#search").jlistsearch({
        onSelect :   function(ex){
                alert( ex.text());    
            }
        });
```

The onSelect function will be called when you click on any of the li item.

By default a placeholder text (Start typing a search item) will be added to the search box. You can customize it using the following code:
```js
$("#search").jlistsearch({
        onSelect :   function(ex){
                alert( ex.text());    
            },
            text: "you custom placeholder text"
        });
```



## Notes

* To see the placeholder text you will need a HTML5 compatible browser

## License

This plug-in is available under [the MIT license](http://mths.be/mit).


### Development

Want to contribute?  Welcome!
