var lastInputFocused;
var karma = 0;
var smile_button = $(".smily_holder img, .cmp_emoticon_off, .cmp_emoticon_on, .cmp_emoticon_mini_off, .cmp_emoticon_mini_on, .emoticon_selecter_img_off, .emoticon_selecter_img_on");

var plurk_language = $('select[name="language"]').val();
console.debug("Plurk Language:", plurk_language);
switch (plurk_language) {
	case "zh_Hant":
	case "zh_Hant_HK":
		hidden_smile_text = "隱藏表情";
		festival_smile_text = "節慶";
		xmas_text = "聖誕節";
		valentine_text = "情人節";
		lantern_text = "元宵節";
		break;
	case "zh_CN":
		hidden_smile_text = "隐藏表情";
		festival_smile_text = "节庆";
		xmas_text = "圣诞节";
		valentine_text = "情人节";
		lantern_text = "元宵节";
		break;
	default:
		hidden_smile_text = "Hidden";
		festival_smile_text = "Festival";
		xmas_text = "Christmas";
		valentine_text = "Valentine Day";
		lantern_text = "Lantern Festival";
		break;
}
/*switch(plurk_language) {
case "zh_Hant":
	width_add = 100;
	break;
case "zh_Hant_HK":
	width_add = 150;
	break;
case "zh_CN":
	width_add = 100;
	break;
case "ko":
	width_add = 160;
	break;
default:
	width_add = 100;
	break;
}*/

var hidden_smile = [{
	imgUrl: '//s.plurk.com/7256dae81d56d150120ccd0c96dd2197.gif',
	codeText: '(fireworks)'
}, {
	imgUrl: '//s.plurk.com/deda4d9f78ad528d725e3a6bfbf6352f.gif',
	codeText: '(Русский)'
}, {
	imgUrl: '//s.plurk.com/47d20905d017c396d67b4a30c9ac9b10.png',
	codeText: '(goal)'
}, {
	imgUrl: '//s.plurk.com/0efc4d55d28704f4370ef874ae906161.gif',
	codeText: '(code)'
}, {
	imgUrl: '//s.plurk.com/4ad099fba019942f13058610ff3fc568.gif',
	codeText: '(dance_bzz)'
}, {
	imgUrl: [
		'//s.plurk.com/e3481a0219283c49455d8af6012980ea.png',
		'//s.plurk.com/5a2a63fa773e68797ec69a1303bfa3b9.png',
		'//s.plurk.com/129b757f2346a6e5ea782c79f0337ba9.png',
		'//s.plurk.com/7bd4d66256fc805da4dd178b9fdbe3ce.png'
	],
	codeText: '(bzzz)'
}, {
	imgUrl: '//s.plurk.com/4c40d16a0d369b895c08f2e33d062ec8.gif',
	codeText: '(yarr)'
}, {
	imgUrl: '//s.plurk.com/3acbaf42504fff32c5eac4f12083ce56.gif',
	codeText: '(yarr_okok)'
}, {
	imgUrl: '//s.plurk.com/fcd28d7d78ec1f828c76930fa63270e6.gif',
	codeText: '(gym_okok)'
}, {
	imgUrl: '//s.plurk.com/71acd802cc931649dd9a371ccf70bad2.gif',
	codeText: '(hungry_okok)'
}, {
	imgUrl: '//s.plurk.com/bb1e3fed482959a00013f7f1efcc17a0.gif',
	codeText: '(music_okok)'
}, {
	imgUrl: '//s.plurk.com/bac8c8392f7ca8f5ac74612be4d08b74.gif',
	codeText: '(wave_okok)'
}, {
	imgUrl: '//s.plurk.com/a555399b40c379adca5b6f5bad5bf732.gif',
	codeText: '(dance_okok)'
}, {
	imgUrl: '//s.plurk.com/8855f56400a936db07f348d9290adaac.gif',
	codeText: '(code_okok)'
}, {
	imgUrl: '//s.plurk.com/6675254cd7449b1847a93b0024127eae.gif',
	codeText: '(angry_okok)'
}, {
	imgUrl: '//s.plurk.com/5b51892d7d1f392d93ea7fe26e5100f4.gif',
	codeText: '(banana_gym)'
}, {
	imgUrl: '//s.plurk.com/6de58c967f1c2797d250a713ba50eddd.gif',
	codeText: '(dance_yarr)'
}, {
	imgUrl: '//s.plurk.com/feb43dbbbf2763905571060be9a496d1.gif',
	codeText: '(no_dance)'
}, {
	imgUrl: '//s.plurk.com/88fac5a4b99110a35d4e4794dad58ab4.gif',
	codeText: '(taser_okok)'
}, {
	imgUrl: '//s.plurk.com/b3b9856e557fcc2700fd41c53f9d4910.gif',
	codeText: '(droid_dance)'
}, {
	imgUrl: '//s.plurk.com/cfdd2accc1188f5fbc62e149074c7f29.png',
	codeText: '(fuu)'
}, {
	imgUrl: '//s.plurk.com/828b9819249db696701ae0987fba3638.png',
	codeText: '(gfuu)'
}, {
	imgUrl: '//s.plurk.com/1bd653e166492e40e214ef6ce4dd716f.png',
	codeText: '(yay)'
}, {
	imgUrl: '//s.plurk.com/3fe6cf919158597d7ec74f8d90f0cc9f.png',
	codeText: '(gyay)'
}, {
	imgUrl: '//s.plurk.com/9c5c54081547d2ad903648f178fcc595.png',
	codeText: '(bah)'
}, {
	imgUrl: '//s.plurk.com/2da76999ca3716fb4053f3332270e5c9.png',
	codeText: '(gbah)'
}, {
	imgUrl: '//s.plurk.com/f73b773aa689647cb09f57f67a83bb89.png',
	codeText: '(troll)'
}, {
	imgUrl: '//s.plurk.com/45beda260eddc28c82c0d27377e7bf42.png',
	codeText: '(gtroll)'
}, {
	imgUrl: '//s.plurk.com/8590888362ae83daed52e4ca73c296a6.png',
	codeText: '(aha)'
}, {
	imgUrl: '//s.plurk.com/c7551098438cc28ec3b54281d4b09cc3.png',
	codeText: '(gaha)'
}, {
	imgUrl: '//s.plurk.com/cfd84315ebceec0c4389c51cf69132bd.png',
	codeText: '(whatever)'
}, {
	imgUrl: '//s.plurk.com/0e0bf1ec2c2958799666f3995ef830ca.png',
	codeText: '(gwhatever)'
}, {
	imgUrl: '//s.plurk.com/e2998ca75f80c1c4a5508c549e3980a6.png',
	codeText: '(pokerface)'
}, {
	imgUrl: '//s.plurk.com/c6ad1c4f9e11f6859a1ba39c4341ef8b.png',
	codeText: '(gpokerface)'
}, {
	imgUrl: '//s.plurk.com/4a61085f1c6a639f028cd48ae97d07d0.png',
	codeText: '(yea)'
}, {
	imgUrl: '//s.plurk.com/53253ca60f5831f0812954213a2e9bb3.png',
	codeText: '(gyea)'
}, {
	imgUrl: '//s.plurk.com/6928f3117658cc38d94e70519a511005.png',
	codeText: '(jazzhands)'
}, {
	imgUrl: '//s.plurk.com/af44689f789b98cfcb103844f7fbfce8.png',
	codeText: '(flower)',
	minkarma: 50
}, {
	imgUrl: [
		'//s.plurk.com/4bb238c42f2777cb81f7cda96e93c7ec.png',
		'//s.plurk.com/b3204efff2b1d44580f045b71fb8eb6c.png',
		'//s.plurk.com/f60fb06a6d463cc147c0db1387b79010.png',
		'//s.plurk.com/f5138e54a278eb672f250481b66a3329.png',
		'//s.plurk.com/eb68c526d01ef743981c64035e0f3b25.png',
		'//s.plurk.com/e11a2056ff76f0c6c2eca2ad67df5710.png'
	],
	codeText: '(dice)'
}, {
	imgUrl: [
		'//s.plurk.com/5b70cbfb6382f1b646f39a3f86d49a1e.png',
		'//s.plurk.com/2264ba9ec2d27d792020c7e6afde3c38.png',
		'//s.plurk.com/9fc2d756c29e606fd02dd6acdc875ad9.png',
		'//s.plurk.com/51e69b868603c74e15d7368605866d08.png',
		'//s.plurk.com/8bf17cffc06365c74ee6c6fc0e7980d5.png'
	],
	codeText: '(bobei)'
}];
var festival_smile = [{
	text: xmas_text
}, {
	imgUrl: '//s.plurk.com/1a5f23ed863e70e52f239b045a48e6fb.gif',
	codeText: '(xmas1)'
}, {
	imgUrl: '//s.plurk.com/f5dbd5fdf5f5df69cfb024d6be76a76b.gif',
	codeText: '(xmas2)'
}, {
	imgUrl: '//s.plurk.com/e902170e97aee14836b5df6b0fe61ba2.gif',
	codeText: '(xmas3)'
}, {
	imgUrl: '//s.plurk.com/e476574723d5042f24658fa36866bd92.gif',
	codeText: '(xmas4)'
}, {
	text: valentine_text
}, {
	imgUrl: '//s.plurk.com/dd8468c4e7af6c57e3b176a8c984fc7d.png',
	codeText: '(v_love)'
}, {
	imgUrl: '//s.plurk.com/fe2398c09a67a416f16353af91283bd0.png',
	codeText: '(v_tiffany)'
}, {
	imgUrl: '//s.plurk.com/3d38ab77e8df38579df2403d382d63dd.png',
	codeText: '(v_mail)'
}, {
	imgUrl: '//s.plurk.com/7f42645feb6ceed6e35637eaf418306c.png',
	codeText: '(v_perfume)'
}, {
	imgUrl: '//s.plurk.com/2678bdb36b318b038a3a1a9e7fdb2220.png',
	codeText: '(v_shy)'
}, {
	text: lantern_text
}, {
	imgUrl: '//s.plurk.com/2b4c6198cd357b90566fa368f6804032.png',
	codeText: '(lantern_love)'
}, {
	imgUrl: '//s.plurk.com/be11685ed0ee1740a4eb0f82edd004e8.png',
	codeText: '(lantern_well)'
}, {
	imgUrl: '//s.plurk.com/71ad7d11b6e857794a75e5098b2e9cd3.png',
	codeText: '(lantern_fortune)'
}, {
	imgUrl: '//s.plurk.com/ae169c0471106ef466013a0ff790dd03.png',
	codeText: '(lantern_happy)'
}, {
	imgUrl: '//s.plurk.com/286b8ffcae6d8432036b442d709cb852.png',
	codeText: '(lantern_peace)'
}, {
	imgUrl: '//s.plurk.com/6883243bb1b5f01e22be8dae5d836667.png',
	codeText: '(lantern_health)'
}, ];

function appendscript(scriptText, args) {
	var args = JSON.stringify(args);
	if (typeof scriptText == 'function')
		scriptText = '(' + scriptText + ')(' + args + ');';

	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.appendChild(document.createTextNode(scriptText));
	document.body.appendChild(script);

	setTimeout(function() {
		script.parentNode.removeChild(script);
	}, 1000);
}

function click_smile() {
	if (!lastInputFocused) return false;
	var text = lastInputFocused.value;
	if (text.length > 0) text += " ";
	lastInputFocused.value = text + $(this).find("img").attr("title");
	lastInputFocused.focus();
	var pos = lastInputFocused.value.length;
	lastInputFocused.setSelectionRange(pos, pos);
	if (location.href.match(/\/\/www.plurk.com\/(\w+)/)[1] == "p") appendscript("Emoticons.forceHide();");
	else appendscript("Emoticons.forceHide();window.scrollTo(0,0);");
	return false;
}

function getDefaultImgUrl(imgUrl) {
	return imgUrl instanceof Array ? imgUrl[0] : imgUrl;
}

function show_smile_list(sel, smile_list, num, rows) {
	num = num || 6;
	rows = rows || 3;
	var $div = $("<div/>").attr("id", "emoticon_child_container").addClass("smile_ext_div").css({
		height: (56 * rows) + "px",
		top: "0px",
		left: "0px",
		position: "relative"
	}),
		$html = $("<table/>"),
		n = 0,
		m = 0,
		total_tables = 1;
	for (i in smile_list) {
		if (smile_list[i].minkarma && smile_list[i].minkarma > karma) continue;
		if (n == 0) {
			if (m >= rows) {
				$html.appendTo($div);
				$html = $("<table/>");
				m = 0;
				total_tables++;
			}
			$html.append("<tr/>");
			m++;
		}
		if (smile_list[i].text) {
			var $font = $("<font/>").addClass("smile_ext_font").attr("color", "black").html(smile_list[i].text);
			if (smile_list[i].size) $font.attr("size", smile_list[i].size);
			if (n == 0) $html.find("tr:last").append($("<td/>").html($font));
			else {
				if (m >= rows) {
					$html.appendTo($div);
					$html = $("<table/>");
					m = 0;
					total_tables++;
				}
				$html.append($("<tr/>").append($("<td/>").html($font)));
				m++;
			}
			n = 0;
		} else if (!smile_list[i].imgUrl && smile_list[i].codeText) {
			var $font = $("<font/>").addClass("smile_ext_font").attr("color", "black").html(smile_list[i].codeText);
			if (smile_list[i].size) $font.attr("size", smile_list[i].size);
			var $a = $("<a/>").attr("href", "#").addClass("a_emoticon").addClass("smile_ext_a").attr("title", smile_list[i].codeText).html($font);
			$html.find("tr:last").append($("<td/>").html($a));
		} else if (smile_list[i].imgUrl) {
			var $img = $("<img/>").attr("src", getDefaultImgUrl(smile_list[i].imgUrl)).attr("title", smile_list[i].codeText ? smile_list[i].codeText : getDefaultImgUrl(smile_list[i].imgUrl));
			if (smile_list[i].width) $img.css("width", smile_list[i].width + "px");
			if (smile_list[i].height) $img.css("height", smile_list[i].height + "px");
			if (smile_list[i].max_width) $img.css("max-width", smile_list[i].max_width + "px").data("max-width", smile_list[i].max_width + "px").hover(function() {
				$(this).css("max-width", "none");
			}, function() {
				$(this).css("max-width", $(this).data("max-width"));
			});
			if (smile_list[i].imgUrl instanceof Array) {
				(function($img, imgUrl) {
					var timer, i = 0;
					$img.hover(function() {
						clearInterval(timer);
						timer = setInterval(function() {
							$img.attr("src", imgUrl[++i % imgUrl.length]);
						}, 1000);
					}, function() {
						clearInterval(timer);
					});
				})($img, smile_list[i].imgUrl);
			}
			//var $a = $("<a/>").attr("href", "#").addClass("a_emoticon").addClass("smile_ext_a").attr("title", smile_list[i].codeText ? smile_list[i].codeText : smile_list[i].imgUrl).html($img);
			$html.find("tr:last").append($("<td/>").addClass("enabled").html($img));
		}
		n++;
		if (n == num) n = 0;
	}
	$html.appendTo($div);
	$div.css({
		width: (total_tables * (56 * num)) + "px"
	}).find("table").each(function(index) {
		$(this).css({
			"position": "absolute",
			"top": "0px",
			"left": (56 * num * index) + "px"
		});
	}).end().find("img").parent().bind("click", click_smile);

	$("#emoticons_tabs ul li").removeClass("current");
	$(sel).addClass("current");
	$('#emoticon_holder_super_parent').show();
	$('#emoticons_show').hide();

	replaceEmoticonPagesParentContent($div, _renderEmoticonPageSelector(total_tables));
	appendscript(function(args) {
		if (Emoticons.changeToLastPageOnLoad) {
			if (args.total_tables > 0) {
				Emoticons.changeEmoticonPage(args.total_tables - 1, true)
			}
			Emoticons.changeToLastPageOnLoad = false
		} else {
			Emoticons._currentEmoticonPage = 0
		}
	}, {
		total_tables: total_tables
	});
}

function replaceEmoticonPagesParentContent() {
	$pagesParent = jQuery("#emoticon_selecter #emoticon_pages_parent");
	if (jQuery("#emoticon_child_container", $pagesParent).hasClass("emoticons_my") || jQuery("#emoticon_child_container", $pagesParent).hasClass("emoticons_premium") || jQuery("#emoticon_child_container", $pagesParent).hasClass("emoticons_campaign_holder")) {
		$pagesParent.children().detach()
	} else {
		$pagesParent.empty()
	}
	for (var a = 0; a < arguments.length; a++) {
		$pagesParent.append(arguments[a])
	}
}

function _renderEmoticonPageSelector(a) {
	var d = jQuery("<div></div>").attr("id", "emoticon_page_selector");
	if (a > 1) {
		var b = [];
		for (var c = 0; c < a; c++) {
			b[c] = jQuery("<div>&nbsp;</div>").data("index", c).addClass("emoticon_dot").on("click", function() {
				appendscript(function(args) {
					Emoticons.changeEmoticonPage(args.index);
				}, {
					index: jQuery(this).data("index")
				});
				return false
			});
			d.append(b[c])
		}
		b[0].addClass("emoticon_dot_on")
	}
	return d
}

function show_smile_tabs() {
	/*$("#emoticon_selecter").css({
		"width": (width_add + 430) + "px",
		"left": (parseInt($("#emoticon_selecter").css("left")) - width_add) + "px"
	});
	$("#emoticon_selecter .upper_arrow").css("left", width_add + "px");*/
	$("<li/>").attr("id", "hidden_smile").addClass("smile_ext_tabs").click(function() {
		show_smile_list(this, hidden_smile);
		return false;
	}).append($("<a/>").attr("href", "#").html($("<img/>").attr("src", "//s.plurk.com/4c40d16a0d369b895c08f2e33d062ec8.gif").attr("title", hidden_smile_text).css("border", "none").css("max-width", 20))).appendTo("#emoticons_tabs ul");
	$("<li/>").attr("id", "festival_smile").addClass("smile_ext_tabs").click(function() {
		show_smile_list(this, festival_smile);
		return false;
	}).append($("<a/>").attr("href", "#").html($("<img/>").attr("src", "//s.plurk.com/dd8468c4e7af6c57e3b176a8c984fc7d.png").attr("title", festival_smile_text).css("border", "none").css("max-width", 20))).appendTo("#emoticons_tabs ul");
	karma = $("#karma").html();
	console.debug("karma = " + karma);
	smile_button.die("click", show_smile_tabs);
}

smile_button.live("click", show_smile_tabs);
smile_button.live("click", function() {
	lastInputFocused = $(this).parents(".plurkForm").find("textarea.content").get(0);
});
$("#input_big, #input_small").live("focusin", function() {
	lastInputFocused = this;
});