<h1>Which Function Returns the Larger Number</h1>

<p>Your function will be passed two functions, f and g, that don't take any parameters. Your function has to call them, and return a string which indicates which function returned the larger number.</p>

<p>If f returns the larger number, return the string f.
If g returns the larger number, return the string g.
If the functions return the same number, return the string neither.</P>

<strong>Examples</strong>

<ul>
<li>whichIsLarger(() => 5, () => 10) ➞ "g"</li>
<li>whichIsLarger(() => 25,  () => 25) ➞ "neither"</li>
<li>whichIsLarger(() => 505050, () => 5050) ➞ "f"</li>
</ul>

<strong>Notes</strong>

<p>This exercise is designed as an introduction to higher order functions (functions which use other functions to do their work).</p>