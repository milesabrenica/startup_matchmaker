$(document).ready(function(){$("a.developer").click(function(){$("#developer_page").is(":hidden")&&($(".page").fadeOut("slow"),$("#developer_page").fadeIn("slow"))}),$("a.designer").click(function(){$("#designer_page").is(":hidden")&&($(".page").fadeOut("slow"),$("#designer_page").fadeIn("slow"))}),$("header h1").click(function(){$("#homepage").is(":hidden")&&($(".page").fadeOut("slow"),$("#homepage").fadeIn("slow"))}),$(".profile-photo").append("<div class='profile-photo'><img class='nophoto'src='imgs/nophoto.png'></div>")});