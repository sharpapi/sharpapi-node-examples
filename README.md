![SharpAPI GitHub cover](https://sharpapi.com/sharpapi-github-php-bg.jpg)

# SharpAPI Node.js Test Suite / Examples 

**SharpAPI Node.js SDK Client Test Suite / Usage Examples** is an educational repository designed to help developers understand and integrate the SharpAPI.com API endpoints into their Node.js applications. This project showcases various use cases and provides practical examples to demonstrate the capabilities of the SharpAPI Node.js SDK Client.
 
---

## Table of Contents

1. [Features](#features)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Configuration](#configuration)
5. [Usage](#usage)
6. [Available Tests](#available-tests)
7. [Project Structure](#project-structure)
8. [Contributing](#contributing)
9. [License](#license)
10. [Support](#support)

---

## Features

- **Comprehensive API Testing**: Demonstrates how to interact with various SharpAPI endpoints.
- **Interactive CLI**: Provides a command-line interface to select and run different API tests.
- **Educational Examples**: Serves as a learning tool for developers to understand the integration process.
- **Extensible Structure**: Easily add new tests and functionalities as SharpAPI expands.

---

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Version 14 or higher is installed. [Download Node.js](https://nodejs.org/)
- **npm**: Comes bundled with Node.js. Verify by running `npm -v` in your terminal.
- **SharpAPI Account**: Obtain an API key from [SharpAPI.com](https://sharpapi.com/).

---

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/sharpapi/sharpapi-node-examples.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd sharpapi-node-examples
   ```

3. **Install Dependencies**

   ```bash
   npm install
   ```

   This will install all necessary packages, including the SharpAPI Node.js client, dotenv for environment variable management, and inquirer for the interactive CLI.

---

## Configuration

1. **Set Up Environment Variables**

   Create a `.env` file in the root directory of the project to store your SharpAPI API key securely.

   ```bash
   cp .env.example .env
   ```

   Add the following line to the `.env` file:

   ```plaintext
   SHARP_API_KEY=your_actual_api_key_here
   ```

   **Note**: Replace `your_actual_api_key_here` with your actual SharpAPI API key. You can [copy it from SharpAPI.com Dashboard](https://sharpapi.com/dashboard/).


---

## Usage

The application provides an interactive command-line interface to run various tests against the SharpAPI endpoints. Follow these steps to use the application:

1. **Run the Application**

   ```bash
   npm start
   ```

2. **Select a Test**

   Upon running, you'll be presented with a list of available tests. Use the arrow keys to navigate and press `Enter` to select a test.

3. **Follow Prompts**

   Some tests may require additional input or file paths. Provide the necessary information as prompted.

4. **View Results**

   After the test completes, the results will be displayed in the console. You can choose to run another test or exit the application.

---

## Available Tests

The application includes a variety of tests to demonstrate the functionality of the SharpAPI Node.js SDK Client:

1. **Ping Test**
    - **Description**: Checks the availability of the API and retrieves the current timestamp.

2. **Quota Test**
    - **Description**: Retrieves details about your subscription's current quota and usage.

3. **Parse Resume Test**
    - **Description**: Parses a resume file (PDF/DOC/DOCX/TXT/RTF) and extracts data points. Replace `sample_resume.pdf` if you want.

4. **Generate Job Description Test**
    - **Description**: Generates a job description based on provided parameters.

5. **Related Skills Test**
    - **Description**: Retrieves a list of skills related to the provided skill name.

6. **Related Job Positions Test**
    - **Description**: Retrieves a list of job positions related to the provided job position name.

7. **Product Review Sentiment Test**
    - **Description**: Analyzes the sentiment of a product review.

8. **Product Categories Test**
    - **Description**: Generates suitable categories for a given product.

9. **Generate Product Intro Test**
    - **Description**: Generates a marketing introduction for a product.

10. **Generate Thank You Email Test**
    - **Description**: Generates a personalized thank-you email for customers.

11. **Detect Phones Test**
    - **Description**: Detects phone numbers within the provided text.

12. **Detect Emails Test**
    - **Description**: Detects email addresses within the provided text.

13. **Detect Spam Test**
    - **Description**: Analyzes the provided text to determine if it contains spam content.

14. **Summarize Text Test**
    - **Description**: Generates a summarized version of the provided text.

15. **Generate Keywords Test**
    - **Description**: Generates a list of keywords based on the provided content.

16. **Translate Text Test**
    - **Description**: Translates the provided text into the specified language.

17. **Paraphrase Text Test**
    - **Description**: Generates a paraphrased version of the provided text.

18. **Proofread Text Test**
    - **Description**: Proofreads the provided text, checking for grammar and spelling errors.

19. **Generate SEO Tags Test**
    - **Description**: Generates META tags based on the provided content.

20. **Travel Review Sentiment Test**
    - **Description**: Analyzes the sentiment of a travel or hospitality product review.

21. **Tours and Activities Product Categories Test**
    - **Description**: Generates suitable categories for Tours & Activities products.

22. **Hospitality Product Categories Test**
    - **Description**: Generates suitable categories for Hospitality products.

23. **Run All Tests**
    - **Description**: Executes all available tests sequentially.

24. **Exit**
    - **Description**: Exits the application.

---

## Project Structure

```
sharpapi-node-examples/
├── .env
├── .gitignore
├── index.js
├── package.json
├── package-lock.json
├── sample_resume.pdf
└── README.md
```

- **.env**: Stores environment variables, including the SharpAPI API key.
- **.gitignore**: Specifies files and directories to ignore in Git.
- **index.js**: Main application file containing the test functions and CLI logic.
- **package.json**: Contains project metadata and dependencies.
- **package-lock.json**: Automatically generated file that describes the exact tree of dependencies.
- **sample_resume.pdf**: Sample resume file used in the Parse Resume Test.
- **README.md**: Documentation file (this file).

---

## Contributing

We welcome contributions to the SharpAPI Node.js Examples repository! To contribute, please follow these steps:

1. **Fork the Repository**

   Click the "Fork" button at the top-right corner of the repository page to create your own fork.

2. **Clone the Forked Repository**

   ```bash
   git clone https://github.com/yourusername/sharpapi-node-examples.git
   ```

3. **Navigate to the Project Directory**

   ```bash
   cd sharpapi-node-examples
   ```

4. **Create a New Branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

5. **Make Your Changes**

   Implement your feature or bug fix.

6. **Commit Your Changes**

   ```bash
   git add .
   git commit -m "Add feature: Your Feature Name"
   ```

7. **Push to Your Fork**

   ```bash
   git push origin feature/your-feature-name
   ```

8. **Create a Pull Request**

   Go to the original repository on GitHub and create a pull request from your forked repository.

### Guidelines

- **Follow Coding Standards**: Ensure your code adheres to the existing coding style.
- **Write Tests**: Add tests for your new features or bug fixes.
- **Update Documentation**: If your changes affect usage, update the `README.md` accordingly.
- **Provide Clear Descriptions**: Make sure your commit messages and pull request descriptions are clear and concise.

---

## Support

If you encounter any issues or have questions, feel free to open an issue on the [GitHub repository](https://github.com/sharpapi/sharpapi-node-examples/issues) or contact support at [contact@sharpapi.com](mailto:contact@sharpapi.com).

---
## Social Media

🚀 For the latest news, tutorials, and case studies, don't forget to follow us on:
- [SharpAPI X (formerly Twitter)](https://x.com/SharpAPI)
- [SharpAPI YouTube](https://www.youtube.com/@SharpAPI)
- [SharpAPI Vimeo](https://vimeo.com/SharpAPI)
- [SharpAPI LinkedIn](https://www.linkedin.com/products/a2z-web-ltd-sharpapicom-automate-with-aipowered-api/)
- [SharpAPI Facebook](https://www.facebook.com/profile.php?id=61554115896974)

---

**Happy Coding with SharpAPI Node.js Examples!**
