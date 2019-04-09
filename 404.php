<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package WordPress
 * @subpackage Twenty_Seventeen
 * @since 1.0
 * @version 1.0
 */

get_header(); ?>


<div class="pt-wrapper">
	<div class="error--text_container">
		<h1 class="page-title">No panic, this is just a 404 error.</h1>
		<p class="error--p">You can always go back to the main page by clicking button below or you can try our terminal and have some fun.</p>
		<a class="button error--cta" href="http://salivon.net/">Go To Homepage</a>
	</div>

	<div class="container404">
		<div class="handle">
							<div class="buttons">
									<button class="close1">
									</button>
									<button class="minimize1">
									</button>
									<button class="maximize1">
									</button>
							</div>
							<span class="title">1. 404@salivon.net: ~ (cmd)</span>
		</div>
	  <form class="four-oh-four-form">
	    <input type="text" class="404-input">
	  </form>
	  <div class="terminal">
	      <p class="prompt">The page you requested cannot be found right now. Try typing '/list'.</p>
	      <p class="prompt output new-output"></p>
	  </div>
	</div>
</div><!-- .wrap -->

<script type="text/javascript">
var errormsg = "ERROR: This command is not recognized. Type /list to see a list of commands.";
var successmsg = "SUCCESS: This command is recognised.";

$('.four-oh-four-form').on('submit', function(e){
e.preventDefault();
var val = $(this).children($('.404-input')).val().toLowerCase();
var href;

 if (val === '/list'){
	showCommandsList();
}
else if (val === '/webs')
{
 showWebs();
}
else if (val === '/clear')
{
 showClear();
}
else
 {
	resetForm();
	}
});



function showCommandsList(){
	$('.new-output').removeClass('new-output');
input.val('');
	$('.terminal').append(
		"<div class='kittens'>"
		+ "<br /><p class='prompt success--msg_terminal'>"
		+ successmsg
		+ "<p class='prompt'>/list --- Display all available commands</p>"
		+ "<p class='prompt'>/clear --- Clear terminal</p>"
		+ "<p class='prompt'>/webs --- Display list of websites created by me</p>"
		+ "<br><p class='prompt output new-output'></p>"
		+ "</div>");

	var lines = $('.kittens p');
	$.each(lines, function(index, line){
		setTimeout(function(){
			$(line).css({
				"opacity": 1
			});

			textEffect($(line))
		}, index * 100);
	});
}

function showWebs(){
	$('.new-output').removeClass('new-output');
input.val('');
	$('.terminal').append(
		"<div class='kittens'>"
		+ "<br /><p class='prompt success--msg_terminal'>"
		+ successmsg
		+ "<p class='prompt'>asia.money2020.com</p>"
		+ "<p class='prompt'>europe.money2020.com</p>"
		+ "<p class='prompt'>globaldata.com</p>"
		+ "<p class='prompt'>compelo.com</p>"
		+ "<p class='prompt'>cbronline.com</p>"
		+ "<p class='prompt'>newstatesmanmedia.com</p>"
		+ "<p class='prompt'>verdict.co.uk</p>"
		+ "<p class='prompt'>elitetraveler.com</p>"
		+ "<p class='prompt'>spearswms.com</p>"
		+ "<p class='prompt'>thesamlinghotel.co.uk</p>"
		+ "<p class='prompt'>pressgazette.co.uk</p>"
		+ "<p class='prompt'>newstatesman.com</p>"
		+ "<br><p class='prompt output new-output'></p>"
		+ "</div>");

	var lines = $('.kittens p');
	$.each(lines, function(index, line){
		setTimeout(function(){
			$(line).css({
				"opacity": 1
			});

			textEffect($(line))
		}, index * 100);
	});
}

function showClear(){
$(".terminal").empty();
	$('.new-output').removeClass('new-output');
input.val('');
	$('.terminal').append(
		"<div class='kittens'>"
		+ "<br /><p class='prompt success--msg_terminal'>"
		+ successmsg
		+ "<p class='prompt'>Terminal is clean now! Type /list for all available commands.</p>"
		+ "<br><p class='prompt output new-output'></p>"
		+ "</div>");

	var lines = $('.kittens p');
	$.each(lines, function(index, line){
		setTimeout(function(){
			$(line).css({
				"opacity": 1
			});

			textEffect($(line))
		}, index * 100);
	});
}

var inputReady = true;
var input = $('.404-input');
input.focus();
$('.container404').on('click', function(e){
input.focus();
});

input.on('keyup', function(e){
$('.new-output').text(input.val());
});

function resetForm(withKittens){

var input = $('.404-input');

$('.new-output').removeClass('new-output');
input.val('');
$('.terminal').append("<div class='kittens'>" + '<p class="prompt error--msg_terminal">' + errormsg + '</p><p class="prompt output new-output"></p>' + '</div>');
var lines = $('.kittens p');
$.each(lines, function(index, line){
	setTimeout(function(){
		$(line).css({
			"opacity": 1
		});

		textEffect($(line))
	}, index * 100);
});
}
function textEffect(line){
	var alpha = [';', '.', ',', ':', ';', '~', '`'];
	var animationSpeed = 5;
	var index = 0;
	var string = line.text();
	var splitString = string.split("");
	var copyString = splitString.slice(0);

	var emptyString = copyString.map(function(el){
			return [alpha[Math.floor(Math.random() * (alpha.length))], index++];
	})

	emptyString = shuffle(emptyString);

	$.each(copyString, function(i, el){
			var newChar = emptyString[i];
			toUnderscore(copyString, line, newChar);

			setTimeout(function(){
				fromUnderscore(copyString, splitString, newChar, line);
			},i * animationSpeed);
		})
}

function toUnderscore(copyString, line, newChar){
	copyString[newChar[1]] = newChar[0];
	line.text(copyString.join(''));
}

function fromUnderscore(copyString, splitString, newChar, line){
	copyString[newChar[1]] = splitString[newChar[1]];
	line.text(copyString.join(""));
}


function shuffle(o){
		for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		return o;
};
</script>
<?php get_footer();
