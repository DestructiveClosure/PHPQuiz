// Variable Declarations

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startBtn = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const maxScoreSpan = document.getElementById("max-score");
const finalScoreSpan = document.getElementById("final-score")
const resultMessage = document.getElementById("result-message");
const restartBtn = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");
const timerText = document.getElementById("timer-text");
const timerCircle = document.querySelector(".timer-circle");

const quizQuestions = [
  // ---------- PHP Sessions ----------
  {
    question: "What is a PHP session?",
    answers: [
      { text: "A way to store information across multiple pages on the server", correct: true },
      { text: "A way to store all user data permanently in the browser", correct: false },
      { text: "A PHP class used to connect to a database", correct: false },
      { text: "A method for styling HTML pages", correct: false }
    ]
  },
  {
    question: "How does PHP commonly identify a user's session across page requests?",
    answers: [
      { text: "Using a session ID stored in a cookie such as PHPSESSID", correct: true },
      { text: "Using the user's password in each request", correct: false },
      { text: "Using the name of the PHP file", correct: false },
      { text: "Using a database table name", correct: false }
    ]
  },

  // ---------- PDO and Prepared Statements ----------
  {
    question: "What does PDO stand for?",
    answers: [
      { text: "PHP Data Objects", correct: true },
      { text: "Personal Database Operations", correct: false },
      { text: "Programmed Data Output", correct: false },
      { text: "PHP Dynamic Objects", correct: false }
    ]
  },
  {
    question: "What does PDO provide?",
    answers: [
      { text: "A data-access abstraction layer for working with databases", correct: true },
      { text: "A way to create CSS stylesheets", correct: false },
      { text: "A system for automatically building HTML forms", correct: false },
      { text: "A replacement for PHP classes", correct: false }
    ]
  },
  {
    question: "What are the two possible kinds of results a PDO operation may return?",
    answers: [
      { text: "FALSE or a PDOStatement object", correct: true },
      { text: "TRUE or a PHP array only", correct: false },
      { text: "A string or an integer only", correct: false },
      { text: "A session ID or a cookie", correct: false }
    ]
  },
  {
    question: "What is a prepared statement?",
    answers: [
      { text: "An SQL statement with placeholders that can be bound to values", correct: true },
      { text: "A database table created automatically by PHP", correct: false },
      { text: "A PHP function that deletes old sessions", correct: false },
      { text: "An SQL statement that can only retrieve data", correct: false }
    ]
  },
  {
    question: "Why are prepared statements useful?",
    answers: [
      { text: "They help protect against SQL injection by separating SQL code from values", correct: true },
      { text: "They automatically create a database backup", correct: false },
      { text: "They make every SQL query return an array", correct: false },
      { text: "They prevent users from submitting HTML forms", correct: false }
    ]
  },
  {
    question: "In the SQL fragment `WHERE id = :id`, what is `:id`?",
    answers: [
      { text: "A placeholder for a value that can be bound to the statement", correct: true },
      { text: "A PHP variable that contains the whole database", correct: false },
      { text: "A command that creates a new table", correct: false },
      { text: "A comment ignored by PDO", correct: false }
    ]
  },

  // ---------- Classes and Objects ----------
  {
    question: "What does the `new` operator do in PHP?",
    answers: [
      { text: "Creates an instance of a class", correct: true },
      { text: "Defines a new database", correct: false },
      { text: "Declares a static property", correct: false },
      { text: "Starts a PHP session", correct: false }
    ]
  },
  {
    question: "What does `$this` refer to inside an object method?",
    answers: [
      { text: "The current object", correct: true },
      { text: "The parent class", correct: false },
      { text: "The current PHP file", correct: false },
      { text: "A static method", correct: false }
    ]
  },
  {
    question: "What is the correct way to access an instance property named `$name` inside a class method?",
    answers: [
      { text: "$this->name", correct: true },
      { text: "self::$name", correct: false },
      { text: "parent->name", correct: false },
      { text: "class->name", correct: false }
    ]
  },
  {
    question: "What is a constructor commonly used for?",
    answers: [
      { text: "Initializing an object when it is created", correct: true },
      { text: "Destroying an object before it is created", correct: false },
      { text: "Making every property static", correct: false },
      { text: "Registering a class autoloader", correct: false }
    ]
  },
  {
    question: "What is the name of a PHP constructor method?",
    answers: [
      { text: "__construct()", correct: true },
      { text: "__new()", correct: false },
      { text: "constructor()", correct: false },
      { text: "__start()", correct: false }
    ]
  },
  {
    question: "What is a destructor commonly used for?",
    answers: [
      { text: "Cleaning up resources when an object is being destroyed", correct: true },
      { text: "Initializing properties when an object is created", correct: false },
      { text: "Loading every class in an application", correct: false },
      { text: "Binding values to a prepared statement", correct: false }
    ]
  },
  {
    question: "What is the name of a PHP destructor method?",
    answers: [
      { text: "__destruct()", correct: true },
      { text: "__delete()", correct: false },
      { text: "destructor()", correct: false },
      { text: "__remove()", correct: false }
    ]
  },
  {
    question: "Which statement about a PHP destructor is correct?",
    answers: [
      { text: "It cannot accept parameters", correct: true },
      { text: "It must return an integer", correct: false },
      { text: "It must be static", correct: false },
      { text: "It can only be declared in an abstract class", correct: false }
    ]
  },

  // ---------- Static Members ----------
  {
    question: "What is a static property?",
    answers: [
      { text: "A property that belongs to the class rather than to an individual object", correct: true },
      { text: "A property that can only be read inside a constructor", correct: false },
      { text: "A property that is automatically stored in a session", correct: false },
      { text: "A property that belongs only to a child class", correct: false }
    ]
  },
  {
    question: "How do you access a static property named `$totalAccounts` on the `BankAccount` class?",
    answers: [
      { text: "BankAccount::$totalAccounts", correct: true },
      { text: "BankAccount->totalAccounts", correct: false },
      { text: "$this->totalAccounts", correct: false },
      { text: "BankAccount::totalAccounts()", correct: false }
    ]
  },
  {
    question: "What is a static method?",
    answers: [
      { text: "A method that belongs to a class and can be called without creating an object", correct: true },
      { text: "A method that can only run inside a constructor", correct: false },
      { text: "A method that must return a static property", correct: false },
      { text: "A method that can only be used by child classes", correct: false }
    ]
  },
  {
    question: "Which operator is used to access static class members?",
    answers: [
      { text: "::", correct: true },
      { text: "->", correct: false },
      { text: "=>", correct: false },
      { text: ":::", correct: false }
    ]
  },

  // ---------- Inheritance and Visibility ----------
  {
    question: "What does a child class inherit from its parent class?",
    answers: [
      { text: "Accessible properties and methods, with the ability to add its own", correct: true },
      { text: "Only the parent's constructor name", correct: false },
      { text: "Every private property as if it were public", correct: false },
      { text: "Only the parent's static methods", correct: false }
    ]
  },
  {
    question: "Which keyword declares that one class inherits from another?",
    answers: [
      { text: "extends", correct: true },
      { text: "implements", correct: false },
      { text: "inherits", correct: false },
      { text: "parent", correct: false }
    ]
  },
  {
    question: "Which example correctly declares `Kid` as a child of `Parent`?",
    answers: [
      { text: "class Kid extends Parent {}", correct: true },
      { text: "class Kid inherits Parent {}", correct: false },
      { text: "class Kid implements Parent {}", correct: false },
      { text: "class Kid -> Parent {}", correct: false }
    ]
  },
  {
    question: "What does the `parent` keyword allow a child class to do?",
    answers: [
      { text: "Refer to accessible methods or members of its parent class", correct: true },
      { text: "Create a new parent class at runtime", correct: false },
      { text: "Access every private member of any class", correct: false },
      { text: "Turn an instance method into a static method", correct: false }
    ]
  },
  {
    question: "Which visibility allows access within the declaring class and its child classes?",
    answers: [
      { text: "protected", correct: true },
      { text: "private", correct: false },
      { text: "public", correct: false },
      { text: "static", correct: false }
    ]
  },
  {
    question: "Which visibility restricts access to the class that declares the member?",
    answers: [
      { text: "private", correct: true },
      { text: "protected", correct: false },
      { text: "public", correct: false },
      { text: "abstract", correct: false }
    ]
  },
  {
    question: "Which visibility allows a member to be accessed from anywhere it is available?",
    answers: [
      { text: "public", correct: true },
      { text: "private", correct: false },
      { text: "protected", correct: false },
      { text: "static", correct: false }
    ]
  },
  {
    question: "Which value is valid as a default PHP property value?",
    answers: [
      { text: "A literal value such as `0`, `'guest'`, or `[]`", correct: true },
      { text: "The result of any function call", correct: false },
      { text: "The result of any arithmetic expression", correct: false },
      { text: "A value returned by a database query", correct: false }
    ]
  },

  // ---------- Models and CRUD ----------
  {
    question: "What is a model commonly responsible for in an application using a database?",
    answers: [
      { text: "Representing data and containing database operations such as CRUD logic", correct: true },
      { text: "Defining the visual styles of every page", correct: false },
      { text: "Starting the browser session", correct: false },
      { text: "Replacing all PHP classes", correct: false }
    ]
  },
  {
    question: "What does CRUD stand for?",
    answers: [
      { text: "Create, Retrieve, Update, Delete", correct: true },
      { text: "Connect, Read, Undo, Deploy", correct: false },
      { text: "Create, Run, Upload, Download", correct: false },
      { text: "Configure, Return, Use, Debug", correct: false }
    ]
  },

  // ---------- Methods and Parameters ----------
  {
    question: "What is a parameter?",
    answers: [
      { text: "A local variable listed in a function or method definition", correct: true },
      { text: "A value that can only be stored in a database", correct: false },
      { text: "A class that implements an interface", correct: false },
      { text: "A value returned by every PHP function", correct: false }
    ]
  },
  {
    question: "What is an argument?",
    answers: [
      { text: "A value supplied to a function or method when it is called", correct: true },
      { text: "A placeholder written only in a class declaration", correct: false },
      { text: "A property that belongs to a class", correct: false },
      { text: "An exception message", correct: false }
    ]
  },
  {
    question: "What is an accessor method commonly used for?",
    answers: [
      { text: "Getting the value of an object's property", correct: true },
      { text: "Deleting an object from memory", correct: false },
      { text: "Creating a child class", correct: false },
      { text: "Connecting to a database", correct: false }
    ]
  },
  {
    question: "What word does an accessor method's name commonly begin with?",
    answers: [
      { text: "get", correct: true },
      { text: "set", correct: false },
      { text: "make", correct: false },
      { text: "put", correct: false }
    ]
  },
  {
    question: "What is a mutator method commonly used for?",
    answers: [
      { text: "Changing the value of an object's property", correct: true },
      { text: "Reading a static property only", correct: false },
      { text: "Loading a PHP class automatically", correct: false },
      { text: "Catching an exception", correct: false }
    ]
  },
  {
    question: "What word does a mutator method's name commonly begin with?",
    answers: [
      { text: "set", correct: true },
      { text: "get", correct: false },
      { text: "catch", correct: false },
      { text: "throw", correct: false }
    ]
  },
  {
    question: "What must a fluent setter return to support method chaining?",
    answers: [
      { text: "A reference to the current object, commonly `$this`", correct: true },
      { text: "The value `false`", correct: false },
      { text: "A new database connection", correct: false },
      { text: "A PDOStatement object", correct: false }
    ]
  },

  // ---------- Abstract Classes and Interfaces ----------
  {
    question: "What is an abstract class?",
    answers: [
      { text: "A class intended to be extended rather than instantiated directly", correct: true },
      { text: "A class that can only contain static properties", correct: false },
      { text: "A class that cannot have child classes", correct: false },
      { text: "A class that automatically connects to a database", correct: false }
    ]
  },
  {
    question: "Can an abstract class be instantiated directly?",
    answers: [
      { text: "No, it must be extended by a concrete class", correct: true },
      { text: "Yes, but only using the `parent` keyword", correct: false },
      { text: "Yes, but only if it has a constructor", correct: false },
      { text: "No, because abstract classes cannot contain methods", correct: false }
    ]
  },
  {
    question: "What is an abstract method?",
    answers: [
      { text: "A method declaration that requires a concrete child class to provide an implementation", correct: true },
      { text: "A method that can only be called using `$this`", correct: false },
      { text: "A method that deletes an object", correct: false },
      { text: "A method that automatically loads its class", correct: false }
    ]
  },
  {
    question: "What does an interface define?",
    answers: [
      { text: "A contract specifying methods that implementing classes must provide", correct: true },
      { text: "A database table and its records", correct: false },
      { text: "A parent class's private properties", correct: false },
      { text: "A list of values for a PHP session", correct: false }
    ]
  },
  {
    question: "What visibility must methods declared in a PHP interface have?",
    answers: [
      { text: "public", correct: true },
      { text: "private", correct: false },
      { text: "protected", correct: false },
      { text: "static only", correct: false }
    ]
  },
  {
    question: "Which statement best describes a difference between an abstract class and an interface?",
    answers: [
      { text: "An abstract class can provide shared implementation, while an interface defines a contract for required behavior", correct: true },
      { text: "An interface can be instantiated, but an abstract class cannot", correct: false },
      { text: "An abstract class can have methods, but an interface cannot", correct: false },
      { text: "Interfaces are used only for database queries", correct: false }
    ]
  },

  // ---------- Arrays, Functions, and Casting ----------
  {
    question: "What are PHP arrays commonly used for?",
    answers: [
      { text: "Storing collections of values", correct: true },
      { text: "Declaring class visibility", correct: false },
      { text: "Creating exceptions", correct: false },
      { text: "Starting a session automatically", correct: false }
    ]
  },
  {
    question: "What does PHP's `compact()` function create?",
    answers: [
      { text: "An associative array using variable names as keys and their values as values", correct: true },
      { text: "A compacted PHP class file", correct: false },
      { text: "A prepared SQL statement", correct: false },
      { text: "A new anonymous function", correct: false }
    ]
  },
  {
    question: "What is explicit type casting?",
    answers: [
      { text: "Manually converting a value to a chosen type", correct: true },
      { text: "Allowing PHP to choose a type without any conversion", correct: false },
      { text: "Changing a class into an interface", correct: false },
      { text: "Converting a parameter into an argument", correct: false }
    ]
  },
  {
    question: "What is an anonymous function?",
    answers: [
      { text: "A function without a name", correct: true },
      { text: "A function that cannot accept arguments", correct: false },
      { text: "A function that must be declared inside an interface", correct: false },
      { text: "A function that always returns an exception", correct: false }
    ]
  },
  {
    question: "How can an anonymous function be saved for later use?",
    answers: [
      { text: "Assign it to a variable", correct: true },
      { text: "Declare it using the `extends` keyword", correct: false },
      { text: "Store it in a PHP session only", correct: false },
      { text: "Use it as a property default value", correct: false }
    ]
  },

  // ---------- Autoloading and Exceptions ----------
  {
    question: "What is class autoloading used for?",
    answers: [
      { text: "Loading a class file when the class is needed", correct: true },
      { text: "Automatically creating every class in a project", correct: false },
      { text: "Loading database records into an array", correct: false },
      { text: "Starting all PHP sessions", correct: false }
    ]
  },
  {
    question: "Which function is commonly used to register a PHP autoloader?",
    answers: [
      { text: "spl_autoload_register()", correct: true },
      { text: "class_load()", correct: false },
      { text: "autoload_start()", correct: false },
      { text: "require_all()", correct: false }
    ]
  },
  {
    question: "What does exception handling allow a program to do?",
    answers: [
      { text: "Signal unusual conditions and provide code to handle them", correct: true },
      { text: "Prevent all possible programming errors", correct: false },
      { text: "Convert every error into a database record", correct: false },
      { text: "Skip the need for functions and methods", correct: false }
    ]
  },
  {
    question: "Which statement describes the `try`, `throw`, and `catch` sequence?",
    answers: [
      { text: "`try` runs code, `throw` signals an exception, and `catch` handles it", correct: true },
      { text: "`try` creates a class, `throw` deletes it, and `catch` reloads it", correct: false },
      { text: "`try` returns a value, `throw` stores it, and `catch` prints it automatically", correct: false },
      { text: "`try` starts a session, `throw` binds a parameter, and `catch` closes PDO", correct: false }
    ]
  },
  {
    question: "What does an exception object's `getMessage()` method return?",
    answers: [
      { text: "The message associated with the exception", correct: true },
      { text: "The name of the class that threw it only", correct: false },
      { text: "The line of code as an integer", correct: false },
      { text: "The value of the current session ID", correct: false }
    ]
  },
  {
    question: "What is `PDOException` used for?",
    answers: [
      { text: "Representing exceptions related to PDO errors", correct: true },
      { text: "Creating a PDO database table", correct: false },
      { text: "Starting a database transaction automatically", correct: false },
      { text: "Registering a class autoloader", correct: false }
    ]
  },
  {
    question: "What is PDO's default error behavior as of PHP 8.0?",
    answers: [
      { text: "It throws an exception when an error occurs", correct: true },
      { text: "It silently ignores every error", correct: false },
      { text: "It always returns a PHP array", correct: false },
      { text: "It terminates the server process without an exception", correct: false }
    ]
  },
   {
    question: "PDO has been available since PHP 5.6.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true }
    ]
  },
  {
    question: "After every PDO operation, one of two results are returned.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true }
    ]
  },
  {
    question: "To retrieve the value inserted into an auto-incremented field, use the lastInsertId() method.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false }
    ]
  },
  {
    question: "To get the number of rows returned by a query, use the numRows() method.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true }
    ]
  },
  {
    question: "PDO is designed to replace MySQLi.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true }
    ]
  },
  {
    question: "PDO supports only one database: MySQL.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true }
    ]
  },
  {
    question: "Which PDO method returns information about the error associated with the last database operation?",
    answers: [
      { text: "errorInfo()", correct: true },
      { text: "lastError()", correct: false },
      { text: "getError()", correct: false },
      { text: "queryError()", correct: false }
    ]
  },
  {
    question: `In this code, if $result is FALSE, the query failed to execute:

  $sql = "SELECT * FROM movies";
  $result = $dbc->query($sql);`,
      answers: [
        { text: "True", correct: true },
        { text: "False", correct: false }
      ]
    },
    {
      question: `Is this a proper way to replace variables in a query with named placeholders?

  $sql = 'SELECT * FROM users WHERE email = :email AND status = :status';`,
      answers: [
        { text: "True", correct: true },
        { text: "False", correct: false }
      ]
    },
    {
      question: "Using a prepared statement is the proper approach when a query includes variable data.",
      answers: [
        { text: "True", correct: true },
        { text: "False", correct: false }
      ]
    },
    {
      question: "What is the proper way to close a PDO database connection named $dbc?",
      answers: [
        { text: "$dbc = null;", correct: true },
        { text: "$dbc->close();", correct: false },
        { text: "close($dbc);", correct: false },
        { text: "$dbc->disconnect();", correct: false }
      ]
    },
    {
      question: "You should treat user input as potentially malicious and ________ the data.",
      answers: [
        { text: "validate", correct: true },
        { text: "trust", correct: false },
        { text: "execute", correct: false },
        { text: "ignore", correct: false }
      ]
    },
    {
      question: "Which PDO method prepares a query containing placeholders and returns a PDOStatement object?",
      answers: [
        { text: "prepare()", correct: true },
        { text: "query()", correct: false },
        { text: "execute()", correct: false },
        { text: "bindParam()", correct: false }
      ]
    },
    {
      question: "Constructors must be explicitly invoked.",
      answers: [
        { text: "True", correct: false },
        { text: "False", correct: true }
      ]
    },
    {
      question: `What does this method return?
      public function accountQuery() {
        return $balance;
      }`,
        answers: [
          { text: "The value of the $balance variable", correct: true },
          { text: "The value of the object's balance property automatically", correct: false },
          { text: "The name of the method", correct: false },
          { text: "A new object", correct: false }
        ]
    },
    {
      question: "Static properties belong to an object.",
      answers: [
        { text: "True", correct: false },
        { text: "False", correct: true }
      ]
    },
    {
      question: "Static properties require a dollar sign ($) before the property name when declared.",
      answers: [
        { text: "True", correct: true },
        { text: "False", correct: false }
      ]
    },
    {
      question: "The self keyword refers to the current object.",
      answers: [
        { text: "True", correct: false },
        { text: "False", correct: true }
      ]
    },
    {
      question: "Objects are like blueprints; they define classes.",
      answers: [
        { text: "True", correct: false },
        { text: "False", correct: true }
      ]
    },
    {
      question: "Static methods belong to the class rather than to an instance of the class.",
      answers: [
        { text: "True", correct: true },
        { text: "False", correct: false }
      ]
    },
    {
      question: "All property values of objects created from the same class are equal.",
      answers: [
        { text: "True", correct: false },
        { text: "False", correct: true }
      ]
    },
    {
      question: "Objects are like blueprints.",
      answers: [
        { text: "True", correct: false },
        { text: "False", correct: true }
      ]
    }
];


// Randomize answer order for every question
quizQuestions.forEach(q => shuffleArray(q.answers));
shuffleArray(quizQuestions);

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// QUIZ STATE
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;
let timerInterval = null;
let timeLeft = 60; // 60 seconds = 1 minute

const TIMER_DURATION = 60; // 1 minute per question
const CIRCLE_CIRCUMFERENCE = 220; // Matches the stroke-dasharray

totalQuestionSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

// Timer Functions
const startTimer = () => {
    timeLeft = TIMER_DURATION;
    timerText.textContent = timeLeft;
    updateTimerCircle();
    
    // Clear any existing timer
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    
    timerInterval = setInterval(() => {
        timeLeft--;
        timerText.textContent = timeLeft;
        updateTimerCircle();
        
        // Change colors based on time remaining
        if (timeLeft <= 10) {
            timerCircle.classList.add("danger");
            timerCircle.classList.remove("warning");
            timerText.classList.add("danger");
            timerText.classList.remove("warning");
        } else if (timeLeft <= 20) {
            timerCircle.classList.add("warning");
            timerCircle.classList.remove("danger");
            timerText.classList.add("warning");
            timerText.classList.remove("danger");
        } else {
            timerCircle.classList.remove("warning", "danger");
            timerText.classList.remove("warning", "danger");
        }
        
        // Time's up!
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            handleTimeout();
        }
    }, 1000);
};

const updateTimerCircle = () => {
    const progress = timeLeft / TIMER_DURATION;
    const offset = CIRCLE_CIRCUMFERENCE * (1 - progress);
    timerCircle.style.strokeDashoffset = offset;
};

const stopTimer = () => {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
};

const handleTimeout = () => {
    if (answersDisabled) return;
    
    answersDisabled = true;
    
    // Show correct answers
    Array.from(answersContainer.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        } else {
            button.classList.add("incorrect");
        }
    });
    
    // Don't increment score (timeout = wrong answer)
    
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizQuestions.length) {
            showQuestion();
        } else {
            showResults();
        }
    }, 1200);
};

// Event Listeners
const startQuiz = () => {
    // Reset variables
    currentQuestionIndex = 0;
    score = 0;
    scoreSpan.textContent = 0;
    startScreen.classList.remove("active");
    quizScreen.classList.add("active");

    showQuestion();
};

const showQuestion = () => {
    // Reset state
    answersDisabled = false;

    const currentQuestion = quizQuestions[currentQuestionIndex];

    currentQuestionSpan.textContent = currentQuestionIndex + 1;

    // Update the progress bar
    const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
    progressBar.style.width = progressPercent + "%";

    questionText.textContent = currentQuestion.question;

    // Clear previous answer buttons
    answersContainer.innerHTML = "";

    // Iterate through the answers array and create buttons
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("answer-btn");
        button.dataset.correct = answer.correct;
        button.addEventListener("click", selectAnswer);
        answersContainer.appendChild(button);
    });
    
    // Start the timer for this question
    startTimer();
};

const selectAnswer = (event) => {
    // Optimization check
    if (answersDisabled) return;

    answersDisabled = true;
    
    // Stop the timer when answer is selected
    stopTimer();

    const targetButton = event.target;
    const isCorrect = targetButton.dataset.correct == "true";

    Array.from(answersContainer.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        } else {
            button.classList.add("incorrect");
        }
    });

    if (isCorrect) {
        score++;
        scoreSpan.textContent = score;
    }

    setTimeout(() => {
        currentQuestionIndex++;
        // Check if we are at the end of the quiz
        if (currentQuestionIndex < quizQuestions.length) {
            showQuestion();
        } else {
            showResults();
        }
    }, 1200);
};

const showResults = () => {
    // Stop timer if still running
    stopTimer();
    
    // Hide quiz screen
    quizScreen.classList.remove("active");

    // Show result screen
    resultScreen.classList.add("active");

    finalScoreSpan.textContent = score;

    const percentage = (score / quizQuestions.length) * 100;

    if (percentage === 100) {
        resultMessage.textContent = "Perfect, you are a genius!";
    } else if (percentage >= 80) {
        resultMessage.textContent = "Great job, you did excellent!";
    } else if (percentage >= 60) {
        resultMessage.textContent = "Good work, you passed!";
    } else if (percentage >= 40) {
        resultMessage.textContent = "Not bad, but there's room for improvement.";
    } else if (percentage >= 20) {
        resultMessage.textContent = "You struggled, keep practicing!";
    } else {
        resultMessage.textContent = "Don't give up, try again!";
    }
};

const restartQuiz = () => {
    resultScreen.classList.remove("active");
    startQuiz();
};

startBtn.addEventListener("click", startQuiz);
restartBtn.addEventListener("click", restartQuiz);