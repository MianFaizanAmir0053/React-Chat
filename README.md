# React Chat Application

This is a simple chat application built using React.js, Vite, Tailwind CSS, and Redux Toolkit. The application allows users to send and receive messages in real-time. The messages are stored locally using the browser's localStorage API, and the local storage is updated every 2 seconds to ensure that different users opened on different tabs can have the same set of messages.

## Features

- Real-time messaging: Users can send and receive messages in real-time.
- Local storage synchronization: Messages are stored in the browser's localStorage, and the storage is synchronized every 2 seconds to ensure consistency across multiple tabs.
- Deleting messages: Users can delete their own messages from the chat history.
- Responsive design: The chat application is designed to be responsive and work well on different screen sizes.
- User-friendly interface: The interface is intuitive and user-friendly, making it easy for users to send and receive messages.

## Technologies Used

- React.js: A JavaScript library for building user interfaces.
- Vite: A fast build tool for modern web development.
- Tailwind CSS: A utility-first CSS framework for rapid UI development.
- Redux Toolkit: A set of tools and conventions for building Redux applications.

## Getting Started

To run the chat application locally, follow these steps:

1. Clone the repository:

```
git clone <repository-url>
```

2. Install the dependencies:

```
cd react-chat-application
npm install
```

3. Start the development server:

```
npm run dev
```

4. Open your browser and visit `http://localhost:3000` to see the chat application in action.

## Local Storage Usage

The chat application uses the browser's localStorage API to store and retrieve messages. The messages are stored as an array of objects, where each object represents a single message with properties such as `id`, `sender`, and `content`.

The local storage is updated every 2 seconds using a setInterval function. This ensures that any changes made to the messages are synchronized across different tabs.

Please note that using localStorage for real-time applications is not the most efficient or scalable solution. It is used in this example for simplicity and demonstration purposes. In a production environment, a more robust data storage solution such as a database or a real-time messaging service would be recommended.

## Contributing

Contributions to the chat application are welcome. If you find a bug or have a feature request, please open an issue on the repository. If you would like to contribute code, feel free to fork the repository and submit a pull request.

When contributing, please follow the existing code style and conventions and make sure to thoroughly test your changes.

## License

The chat application is open-source and released under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as needed.

## Credits

The chat application was created by Faizan Amir and is based on the guidance provided by the official documentation and resources of React.js, Vite, Tailwind CSS, and Redux Toolkit.

## Contact

If you have any questions or need further assistance, you can reach out to faizanamir0053@gmail.com. We'd be happy to help!

---

Thank you for using the React Chat Application! We hope you find it useful and enjoy using it in your projects.
