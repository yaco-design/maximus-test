// Кастомное модальное окно

let dissmisModal = document.querySelector('.modal-dissmis-btn');
let openModal = document.querySelector('.open-modal');
let modalBody = document.querySelector('.modal-body');
let siteBody = document.querySelector('body');

openModal.addEventListener("click", function () {
	modalBody.classList.add("show");
	siteBody.classList.add("unvisible");
});

dissmisModal.addEventListener("click", function () {
	modalBody.classList.remove("show");
	siteBody.classList.remove("unvisible");
});


// Табы

$(".tabgroup > div").hide();
$(".tabgroup > div:first-of-type").show();
$(".tabs a").click(function (e) {
	e.preventDefault();
	let $this = $(this),
		tabgroup = "#" + $this.parents(".tabs").data("tabgroup"),
		others = $this.closest("li").siblings().children("a"),
		target = $this.attr("href");
	others.removeClass("active");
	$this.addClass("active");
	$(tabgroup).children("div").hide();
	$(target).show();
});