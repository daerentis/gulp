$(function()
{	    
  $(".menu-item").each(function() {
	  $(this).hover(function(e) {
		  var group_id = $(this).attr("id").replace("menu-item-", "");
			var group = $("#menu-group-"+group_id).stop().fadeIn(500).height(300);
	  }, function(e) {
		  var group_id = $(this).attr("id").replace("menu-item-", "");
			var group = $("#menu-group-"+group_id).stop().fadeOut(200).height(0);
			$(".submenu-title, .submenu-excerpt").html('');
			$(".submenu-preview img").attr("src", "");
	  });
  });
  
	 $(".submenu-items li").hover(function() {
		 var el = $(this);
		 var menu_group = $(this).closest(".menu-group");
		 menu_group.find(".submenu-preview img").attr("src", el.data("thumbnail"));
		 menu_group.find(".submenu-title").html(el.data("title"));
		 menu_group.find(".submenu-excerpt").html(el.data("excerpt"));
	 });

	var premium_certificates = $('p.wc-pao-addon-wrap > .wc-pao-addon-image-swatch').slice(-6);
	premium_certificates.each(function() {
		$(this).attr("id", "premium").hide();
	});
	
	$('body').on('woocommerce-product-addons-update', function() {
		var amount = $(this).find('#product-addons-total .price .amount').html();
		var total = parseInt(amount);

		if (total >= 90)
			showPremiumCertificates();
		else {
			hidePremiumCertificates();
		}
	});
	
  $('.owl-carousel').owlCarousel({
	  items: 1,
    loop: true,
		animateOut: 'fadeOut',
		autoplay: true,
		autoplayHoverPause: true
  });

	function showPremiumCertificates() {
		$(".wc-pao-addon-image-swatch#premium").fadeIn();
	}

	function hidePremiumCertificates() {
		var selected = $('.wc-pao-addon-image-swatch.selected').attr("id");
		if (selected == 'premium') {
			$('.wc-pao-addon-image-swatch').removeClass('selected');
			$('.wc-pao-addon-image-swatch-select' ).val('');
		}	

		$(".wc-pao-addon-image-swatch#premium").hide();
	}
});