# TODO

There are several things that could be done to improve the Fortune Teller
application. At this time, there is no imperative or pressure to perform any of
these tasks.

## Appearance

Though the application is "usable" it does not look nice. Actually, it looks
like it was built in 2005. An applicable makeover by someone with graphics
skills would be in order.

Along those lines, the CSS requires media queries to allow the tokens to be
displayed vertically when the screen gets too narrow.

## Tokens

The current set of tokens are randomly generated and the text is gibberish. It
would be nice to convert to an existing system or to provide some intelligible
text to this system. Because of the component-based structure of the
application, any token set can be used as long as the class members contain
useable data.

If one were feeling creative, one could expand the current token set. There are
only nine tokens, so it limits the user experience. The question for students
would apply to user expectations. Who are the primary, secondary, and tertiary
audiences? What do they want from the site? Who is the site owner and what do
they want from the visitors? More tokens would allow for more variety in
responses which will slow the rate at which the visitor gets bored.

## User instructions

Currently, there are no instructions for the user. It would be nice to add that
to the page. In a perfect world, each peice would have tooltips. Also, there
should be a button the user can push to get a popup dialog with more
information.

## Examples

The utility example bundled with this project could use a lot more description.
It is not currently set up for use in a learning environment, i.e. it is not
written as curriculum.

Along that line, the code behind the Fortune Teller itself could be annotated
better for educational purposes. There are comments describing the classes and
functions, but there could always be a better description of why the structure
is as it is.

## Storage

It may be useful to store the user's questions along with the reading responses
associated with the questions. If the user asks the same question more than
once, the answer could simply be pulled from storage. This would assure that
they get the same answer for the same question. It would also help demonstrate
storage to the students.

The process would be simple:

1. convert the question to all lowercase (for caseless comparison)
2. extra effort, but remove stop words and other less useful words (articles and
   conjunctions, etc.)
3. see if there is matching question text in storage
4. If there is a matching question, gather the ReadingPosition array from
   storage andd use that for display.
5. If there was no match, create a new ReadingPosition array for display, then
   store the question and array to storage

As a note, most fortune tellers will tell you that the answers are not the same
because seeing the first answer altered your conciousness and that affects the
state of the universe. This change in state requires a different answer to your
question.
