function changeTo(e,i){var t=$(".image-list .image-item"),n=$(".index-list .index-item");i!=e&&($(n[i]).removeClass("current-index"),$(t[i]).hide("fast"),$(t[e]).show("slow"),$(n[e]).addClass("current-index"))}$(function(){for(var e=0,i=$(".image-list .image-item"),t=i.length,n='<ul><li class="index-item current-index"></li>',a=0;a<t-1;a++)n+='<li class="index-item"></li>';n+="</ul>",$("#index-list").html(n);var r=$(".index-list .index-item");r.each(function(i){$(this).hover(function(){changeTo(i,e),e=i})});var l=setInterval(function(){var i=e;e<t-1?e++:e=0,changeTo(e,i)},5e3);$("#image-panel").hover(function(){clearInterval(l),$("#direction").removeClass("hidden")},function(){$("#direction").addClass("hidden"),l=setInterval(function(){var i=e;e<t-1?e++:e=0,changeTo(e,i)},5e3)}),$("#direction").on("click","li",function(i){if($(i.target).attr("id")==$("#go-left").attr("id")){var n=e;e>0?e--:e=t-1,changeTo(e,n)}else if($(i.target).attr("id")==$("#go-right").attr("id")){var n=e;e<t-1?e++:e=0,changeTo(e,n)}})});