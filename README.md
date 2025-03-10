# REAL-TIME-CHAT-APPLICATION

*COMPANY*: CODETECH IT SOLUTION

*NAME*: CAROL TWINKAL CRYSTAL LOBO

*INTERN ID*: CT08TKY

*DOMAIN*: FRONT END DEVELOPMENT

*DURATION*: 4 WEEKS

*MENTOR*: NEELA SANTOSH

# DESCRIPTION

This code creates a simple chatbot interface using React. The chatbot, named Sky, responds to user input based on predefined rules. The visual appearance of the chatbot is styled with CSS to create a clean and user-friendly interface.

The React code defines a functional component called `Chatbot`. This component manages the state of the chatbot, including the messages displayed in the chat window and the user's input. The `useState` hook is used to create two state variables: `messages` to store the chat history and `userInput` to store the current text entered by the user.

The `responses` object defines the chatbot's knowledge base. It maps keywords or phrases to corresponding responses. When the user enters a message, the `handleSend` function checks if there is a matching key in the `responses` object. If a match is found, the corresponding response is displayed; otherwise, a default response is used.

The `handleKeyPress` function allows the user to send a message by pressing the Enter key, providing a convenient way to interact with the chatbot. The `useEffect` hook is used to automatically scroll the chat window to the latest message, ensuring that the user always sees the most recent interaction.

The CSS code styles the appearance of the chatbot. The `.chat-container` class defines the overall container for the chatbot, setting its width, height, margins, border radius, box shadow, background color, and padding. The `.chat-box` class styles the chat window itself, enabling vertical scrolling, setting padding, and defining the background color.

The `.message` class styles individual chat messages, setting a maximum width, padding, border radius, font size, line height, and word-wrap behavior. The `.message.bot` and `.message.user` classes differentiate between messages sent by the chatbot and the user, respectively, by setting different background colors and text colors.

The `.input-box` class styles the input field and send button. The `.input-box input` class styles the input field, setting its padding, border, outline, font size, and background color. The `.input-box button` class styles the send button, setting its background color, text color, border, padding, border radius, cursor style, and font weight.

Finally, the `App` component renders the `Chatbot` component within a `div` element and adds a heading to the page. This component is exported as the default export of the `App.js` file, making it the main component of the application.

In summary, this code creates a basic chatbot interface with predefined responses and a visually styled chat window. The chatbot responds to user input based on keywords and provides a simple conversational experience. The CSS code enhances the visual appeal of the chatbot, making it more user-friendly and engaging.

# OUTPUT

![Image](https://github.com/user-attachments/assets/56924a1f-0ae4-4f5a-8a84-5de6952d8fd6)
![Image](https://github.com/user-attachments/assets/56db0fb5-3fcb-4168-98f6-af626000f18d)
