<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the id="main-core".
 *
 * @package ThinkUpThemes
 */
?>

		</div><!-- #main-core -->
		</div><!-- #main -->
		<?php /* Sidebar */ consulting_thinkup_sidebar_html(); ?>
	</div>
	</div><!-- #content -->

	<footer>
		<?php /* Custom Footer Layout */ consulting_thinkup_input_footerlayout();
		echo	'<!-- #footer -->';  ?>
		
		<div id="sub-footer">
			<div id="flex-container">
<div id="home-footer-image-left"><img src="https://mymortgageloanteam.com/wp-content/uploads/2021/08/Logo-MMLT-Gold-Signature-1.jpg" alt="" class="wp-image-126"></div>

<div id="home-footer-text1"><p>In Collaboration with:<br>
Best Finance Capital, Inc.<br>
https://bestfinancecapital.com<br>
2 McArthur Place Suite 250 Santa Ana, CA 92707<br>
• Phone: (323) 955 - 9455<br>
• Fax: (714) 422-0328<br>
Equal Housing Lender</p></div>

<div id="home-footer-text2"><p>Corp NMLS# 1444114<br>
• AZ - NMLS No: 1022046<br>
• CA - DBO-CFL No: 60DBO51822<br>
• CA - BRE No: 01939451<br>
• CO - NMLS No: 1444114<br>
• FL - MLD No: MLD1525<br>
• NJ - NMLS No:<br>
• NV - NMLS No: 4943<br>
• OR - NMLS No: ML-5854<br>
• TX - NMLS No: 1637221<br>
• WA - NMLS No: CL-1444114</p></div>

<div id="home-footer-image-right"><img src="https://mymortgageloanteam.com/wp-content/uploads/2021/09/Logo-BFC.jpg" alt="" class="wp-image-196"></div>
</div>
			</div>
		<div id="sub-footer-core">
			
			<div class="copyright">
			
			<!-- .copyright -->

			<?php if ( has_nav_menu( 'sub_footer_menu' ) ) : ?>
			<?php wp_nav_menu( array( 'depth' => 1, 'container_class' => 'sub-footer-links', 'container_id' => 'footer-menu', 'theme_location' => 'sub_footer_menu' ) ); ?>
			<?php endif; ?>
			<!-- #footer-menu -->

		</div>
		</div>
	</footer><!-- footer -->

</div><!-- #body-core -->

<?php wp_footer(); ?>

</body>
</html>