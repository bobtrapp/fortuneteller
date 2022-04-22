# Design Notes

The basic idea is that the user will enter a question and then hit the button to
"ask".

The program will then display three random tokens. The token data is created by
a utility page. This is a page made up of HTML and JavaScript to provide some
useful work for the developer.

The reason for utility pages is to demonstrate that a coder almost always has
access to programming tools. There may be a situtation where a programmer is
working with a computer locked down by system administrators. To do useful
programming, the programmer needs three things:

1. A text editor, even if it is something like Microsoft Notepad
2. A web browser that can open files from the local machine
3. Permission to create and edit text files on the local machine

Armed with these three things, a programmer can create useful applications, as
needed. In some cases, the work-around may require quite a bit of work, but at
least you can do the work.

## How it works

Start by creating an HTML file that contains any needed input fields using
standard form elements. This file must also contain a reference to the
JavaScript file created in the next step. There must be an element for the
output, usually a textarea element. Then, add a button to call the necessary
JavaScript function.

Create the JavaScript file. It must have at least the button event handler. The
overall logic will read any needed values from the form fields on the HTML page.
The output is often just formatted text of some sort. After all the processing,
the formatted text is then written to the output element on the HTML page.

The coder runs the program, providing inputs as needed. The JavaScript writes
the output to the output element. The programmer then uses that output. In the
cases where the output is formatted text, the coder simply copies the resultant
text from the output element and pastes it where necessary.

## In the utility page

In this example, the utility program creates a JSON object with data
representing the tokens used for fortune telling. Many of the values are
generated radomly based on rules within the code. For example, the token names
are built from a predefined selection of syllables and must end with a randomly
selected ending from another collection. This assures that the names, though
random, all sound like they come from the same (imaginary) language.

The output is the JSON text displayed inside a text area. The text was copied
and used as the data for the fortune telling application.

## The fortune telling

For this fortune telling application, we have a system made up of nine tokens
and a three-position reading. Each token has a name, image, description, and a
meaning for each position. Currently, the meanings and descriptions are
gibberish, randomly generated. The focus has been on the logic and
functionality, not on attempting to create a meaningful fortune telling system.

The user enters their question and clicks the Ask button. This sets into motion
the process. The application selects three unique tokens as the reading. The
application then displays the tokens on the page.

## Fortune Teller design

### Use Case and Narrative

Use Case: A site visitor enters a questions, asks the site for a response, and
gets the response.

Use Case Narrative (abridged)

1. The visitor navigates to the page.
2. The site displays the page with focus on the question input box.
3. The user types a question and clicks the Ask button.
4. The site displays the reading and places focus back on the question input
   box.

This leads to some questions:

1. What is a reading? A reading is a display of a set number of tokens in
   specified positions.
2. What is a position? A position is a specific location in the reading within
   the layout (appearance) of the reading. Each position holds a particular
   meaning within the reading.
3. What is a token? A token is a symbol consisting of an image, name, and
   meaning that is used within a reading.
4. Where does the reading get the positions? The positions locations are
   predetermined as part of the layout of the reading and by type of reading.
5. Where does the reading get the tokens? The reading gets tokens by randomly
   selecting from a token set.
6. What is a token set? A token set is a collection of tokens that are
   predefined for that set.

This suggests that we have data items: _reading, position, token, and token
set_. From this, we can create software objects that represent these concepts.
By creating objects that represent the real-world objects, we are doing
Object-Oriented Programming (OOP). There are many benefits to this, but mostly
it simplifies the design by placing the data, operations, and responsibilities
for each object within that object itself (or its class).

Class Token has:

- name --> the name of the token
- description --> the description and meaning of the token
- imgUrl --> where to find the image for the token
- position meaning(s) --> meanings for this token when placed in a specific
  position in the reading

Note: placing the position meanings in the Token class is not really a good idea
because it requires that the Token have knowledge of the Reading. This is called
tight coupling and it makes it harder to use the Token in other types of
readings.

Class TokenSet has:

- tokens --> an array of Token objects. The constructor is responsible for
  building or acquiring the Tokens for the array.

Class ReadingPostion has:

- postitionNumber --> the number of the position, for possible display
- token --> the Token assigned to this position
- getPositionMeaning() --> a way to get the meaning of the Token in this
  position

Class Reading has:

- tokenSet --> a TokenSet from which to pick Token objects
- doReading() --> a function that determines the array of ReadingPosition
  objects with their asigned Token objects. This function returns that array so
  that some other code can display it.
- getTokenIndexes() --> A function for selecting the index of the chosen Token
  objects in the TokenSet. This function is not really useful outside of the
  class.

### Using the Classes

Once the classes have been defined (preferably one per file), then they can be
used. In this example, they are used in app.js.

Whent the visitor clicks the Ask button, the event calls the app.js function
tellFortune(). This function then performs the following steps:

1. Get an instance of a TokenSet
2. Get an instance of a Reading, passing the TokenSet as an argument to the
   constructor
3. Call the Reading method doReading() to get an array of ReadingPosition
   objects
4. Loop through the array of ReadingPosition objects and format their data for
   display on the page
5. Display the postion elements on the page
6. Set the focus back on the input text box

The display logic is currently contained in the app.js file. With time, it would
be best to refactor that logic so that it was in a separate class that provided
a method to get the display elements. The display elements would be returned
inside of a single container element, such as a div or section. The calling
program could them just ask for that container and place it on any page it
chose.
