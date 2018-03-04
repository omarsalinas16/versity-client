<template>
	<main id="test" class="background_color--light padding--all-one">
		<section>
			<h1>CSS Basic Elements</h1>
			
			<p>The purpose of this HTML is to help determine what default settings are with CSS and to make sure that all possible HTML Elements are included in this HTML so as to not miss any possible Elements when designing a site.</p>
			
			<hr />
			
			<h1 id="headings">Headings</h1>
			
			<h1>Heading 1</h1>
			<h2>Heading 2</h2>
			<h3>Heading 3</h3>
			<h4>Heading 4</h4>
			<h5>Heading 5</h5>
			<h6>Heading 6</h6>
			
			<small><a href="#wrapper">[top]</a></small>
			<hr />
			
			
			<h1 id="paragraph">Paragraph</h1>
			
			<img style="width:250px;height:125px;float:right" src="images/css_gods_language.png" alt="CSS | God's Language" />
			<p>Lorem ipsum dolor sit amet, <a href="#" title="test link">test link</a> adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy. Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus.</p>
			
			<p class="background_color--dark text_color--light">Lorem ipsum dolor sit amet, <em>emphasis</em> consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, <a href="#" title="test link">test link</a> eu volutpat enim diam eget metus. Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy. Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus.</p>
			
			<small><a href="#wrapper">[top]</a></small>
			<hr />
			
			<h1 id="list_types">List Types</h1>
			
			<h3>Definition List</h3>
			<dl>
				<dt>Definition List Title</dt>
				<dd>This is a definition list division.</dd>
			</dl>
			
			<h3>Ordered List</h3>
			<ol>
				<li>List Item 1</li>
				<li>List Item 2</li>
				<li>List Item 3</li>
			</ol>
			
			<h3>Unordered List</h3>
			<ul>
				<li>List Item 1</li>
				<li>List Item 2</li>
				<li>List Item 3</li>
			</ul>
			
			<small><a href="#wrapper">[top]</a></small>
			<hr />
			
			<h1 id="form_elements">Fieldsets, Legends, and Form Elements</h1>
			
			<fieldset>
				<legend>Legend</legend>
			
				<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus.</p>
			
				<form>
					<h2>Form Element</h2>
			
					<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui.</p>
			
					<p><label for="text_field">Text Field:</label><br />
					<input type="text" id="text_field" /></p>
			
					<p><label for="text_area">Text Area:</label><br />
					<textarea id="text_area"></textarea></p>
			
					<p><label for="select_element">Select Element:</label><br />
						<select name="select_element">
						<optgroup label="Option Group 1">
							<option value="1">Option 1</option>
							<option value="2">Option 2</option>
							<option value="3">Option 3</option>
						</optgroup>
						<optgroup label="Option Group 2">
							<option value="1">Option 1</option>
							<option value="2">Option 2</option>
							<option value="3">Option 3</option>
						</optgroup>
					</select></p>
			
					<p><label for="radio_buttons">Radio Buttons:</label><br />
						<input type="radio" class="radio" name="radio_button" value="radio_1" /> Radio 1<br/>
							<input type="radio" class="radio" name="radio_button" value="radio_2" /> Radio 2<br/>
							<input type="radio" class="radio" name="radio_button" value="radio_3" /> Radio 3<br/>
					</p>
			
					<p><label for="checkboxes">Checkboxes:</label><br />
						<input type="checkbox" class="checkbox" name="checkboxes" value="check_1" /> Radio 1<br/>
							<input type="checkbox" class="checkbox" name="checkboxes" value="check_2" /> Radio 2<br/>
							<input type="checkbox" class="checkbox" name="checkboxes" value="check_3" /> Radio 3<br/>
					</p>
			
					<p><label for="password">Password:</label><br />
						<input type="password" class="password" name="password" />
					</p>
			
					<p><label for="file">File Input:</label><br />
						<input type="file" class="file" name="file" />
					</p>
			
			
					<p><input class="button" type="reset" value="Clear" /> <input class="button" type="submit" value="Submit" />
					</p>
				</form>
			
			</fieldset>
			
			<small><a href="#wrapper">[top]</a></small>
			<hr />
			
			<h1 id="tables">Tables</h1>
			
			<table cellspacing="0" cellpadding="0">
				<tr>
					<th>Table Header 1</th><th>Table Header 2</th><th>Table Header 3</th>
				</tr>
				<tr>
					<td>Division 1</td><td>Division 2</td><td>Division 3</td>
				</tr>
				<tr class="even">
					<td>Division 1</td><td>Division 2</td><td>Division 3</td>
				</tr>
				<tr>
					<td>Division 1</td><td>Division 2</td><td>Division 3</td>
				</tr>
			
			</table>
			
			<small><a href="#wrapper">[top]</a></small>
			<hr />
			
			<h1 id="misc">Misc Stuff - abbr, acronym, pre, code, sub, sup, etc.</h1>
			
			<p>Lorem <sup>superscript</sup> dolor <sub>subscript</sub> amet, consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. <cite>cite</cite>. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy. <acronym title="National Basketball Association">NBA</acronym> Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus.  <abbr title="Avenue">AVE</abbr></p>
			
			<pre><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy. <acronym title="National Basketball Association">NBA</acronym> Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus.  <abbr title="Avenue">AVE</abbr></p></pre>
			
			<blockquote>
				"This stylesheet is going to help so freaking much." <br />-Blockquote
			</blockquote>
			
			<small><a href="#wrapper">[top]</a></small>
			<!-- End of Sample Content -->
		</section>

		<section>
			<h1>Buttons</h1>

			<h2>Defaults</h2>

			<button>Default button</button>
			<a href="" class="btn">Link button</a>
			<button class="btn">Button</button>
			<button class="btn small">Small button</button>

			<h2>Greyscale</h2>

			<button class="btn dark">Dark</button>
			<button class="btn medium">Medium</button>
			<button class="btn light">Light</button>

			<h2>Form</h2>

			<button class="btn success">Success</button>
			<button class="btn warning">Warning</button>
			<button class="btn error">Error</button>

			<h2>Accents</h2>

			<button class="btn hint">Hint</button>
			<button class="btn gradient">Gradient</button>

			<h2>Hollows</h2>
			<h3>Defaults</h3>

			<button class="btn hollow">Hollow button</button>
			<button class="btn hollow color-text">Hollow button w/text</button>
			<button class="btn small hollow">Hollow button small</button>

			<h3>Greyscale</h3>

			<button class="btn hollow dark">Hollow dark button</button>
			<button class="btn hollow color-text dark">Hollow dark button w/text</button>
			<button class="btn hollow medium">Hollow medium button</button>
			<button class="btn hollow color-text medium">Hollow medium button w/text</button>
			<button class="btn hollow light">Hollow light button</button>
			<button class="btn hollow color-text light">Hollow light button w/text</button>

			<h3>Form</h3>

			<button class="btn hollow success">Hollow success button</button>
			<button class="btn hollow color-text success">Hollow success button w/text</button>
			<button class="btn hollow warning">Hollow warning button</button>
			<button class="btn hollow color-text warning">Hollow warning button w/text</button>
			<button class="btn hollow error">Hollow error button</button>
			<button class="btn hollow color-text error">Hollow error button w/text</button>

			<h3>Accents</h3>

			<button class="btn hollow hint">Hollow hint button</button>
			<button class="btn hollow color-text hint">Hollow hint button w/text</button>
			<button class="btn hollow hint">Hollow hint button</button>
			<button class="btn hollow color-text hint">Hollow hint button w/text</button>
		</section>

		<section class="background_color--dark" style="margin: -1rem; margin-top: 0; padding: 1rem;">
			<h1 class="text_color--light">Buttons on dark</h1>

			<h2 class="text_color--light">Defaults</h2>

			<button>Default button</button>
			<a href="" class="btn">Link button</a>
			<button class="btn">Button</button>
			<button class="btn small">Small button</button>

			<h2 class="text_color--light">Greyscale</h2>

			<button class="btn dark">Dark</button>
			<button class="btn medium">Medium</button>
			<button class="btn light">Light</button>

			<h2 class="text_color--light">Form</h2>

			<button class="btn success">Success</button>
			<button class="btn warning">Warning</button>
			<button class="btn error">Error</button>

			<h2 class="text_color--light">Accents</h2>

			<button class="btn hint">Hint</button>
			<button class="btn gradient">Gradient</button>

			<h2 class="text_color--light">Hollows</h2>
			<h3 class="text_color--light">Defaults</h3>

			<button class="btn hollow">Hollow button</button>
			<button class="btn hollow color-text">Hollow button w/text</button>
			<button class="btn small hollow">Hollow button small</button>

			<h3 class="text_color--light">Greyscale</h3>

			<button class="btn hollow dark">Hollow dark button</button>
			<button class="btn hollow color-text dark">Hollow dark button w/text</button>
			<button class="btn hollow medium">Hollow medium button</button>
			<button class="btn hollow color-text medium">Hollow medium button w/text</button>
			<button class="btn hollow light">Hollow light button</button>
			<button class="btn hollow color-text light">Hollow light button w/text</button>

			<h3 class="text_color--light">Form</h3>

			<button class="btn hollow success">Hollow success button</button>
			<button class="btn hollow color-text success">Hollow success button w/text</button>
			<button class="btn hollow warning">Hollow warning button</button>
			<button class="btn hollow color-text warning">Hollow warning button w/text</button>
			<button class="btn hollow error">Hollow error button</button>
			<button class="btn hollow color-text error">Hollow error button w/text</button>

			<h3 class="text_color--light">Accents</h3>

			<button class="btn hollow hint">Hollow hint button</button>
			<button class="btn hollow color-text hint">Hollow hint button w/text</button>
			<button class="btn hollow hint">Hollow hint button</button>
			<button class="btn hollow color-text hint">Hollow hint button w/text</button>
		</section>
	</main>
</template>

<script>
export default {
	name: 'StyleTest'
}
</script>
