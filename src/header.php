<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<?php wp_head(); ?>
	<style>
		.Wrapper {
			max-width: 768px;
			margin: 0 auto;
		}
		.Transition {
		  position: absolute;
			max-width: 768px;
		}

		.Transition-enter {
		  opacity: 0.01;
		  transition: opacity .5s ease-in;
		}

		.Transition-enter.Transition-enter-active {
		  opacity: 1;
		}

		.Transition-leave {
		  opacity: 1;
		  transition: opacity .5s ease-in;
		}

		.Transition-leave.Transition-leave-active {
		  opacity: 0;
		}
	</style>
</head>
<body <?php body_class(); ?>>
