!function(e){"use strict";var n="http://api.bandsintown.com/artists/Phantogram/events.json?api_version=2.0&app_id=capstone_proj_bc",t=e("#bit-feed"),a=Handlebars.compile(document.getElementById("bit-template").innerHTML);Handlebars.registerHelper("moment",function(e){return window.moment?moment(e).format("lll"):e});var o=function(){e.ajax({url:n,type:"GET",dataType:"jsonp",success:function(e){t.append(a(e))}})};o()}(jQuery);