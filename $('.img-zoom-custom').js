$('.img-zoom-custom').mousemove(function(e) {
                var $this = $(this);
                var width = $this.width();
                var height = $this.height();
                var mouseX = e.pageX - $this.offset().left;
                var mouseY = e.pageY - $this.offset().top;

                var bgPosX = (mouseX / width * 100);
                var bgPosY = (mouseY / height * 100);

                $this.find('.zoom-effect').css({
                    'background-size': '200% 200%',
                    'background-position': bgPosX + '% ' + bgPosY + '%'
                });
            });

            $('.img-zoom-custom').hover(
                function() {
                    var imgSrc = $(this).find('img').attr('src');
                    $(this).append('<div class="zoom-effect"></div>');
                    $(this).find('.zoom-effect').css('background-image', 'url(' + imgSrc + ')');
                },
                function() {
                    $(this).find('.zoom-effect').remove();
                }
            );