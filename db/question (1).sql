-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- Host: procurenodejs.mysql.database.azure.com
-- Generation Time: Sep 28, 2018 at 05:48 AM
-- Server version: 5.7.21
-- PHP Version: 5.6.37

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `quiz`
--

-- --------------------------------------------------------

--
-- Table structure for table `question`
--

CREATE TABLE `question` (
  `id` int(11) NOT NULL,
  `question` text NOT NULL,
  `answer` text NOT NULL,
  `skill` int(11) NOT NULL,
  `correct_answer` int(11) NOT NULL,
  `code` text NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `question`
--

INSERT INTO `question` (`id`, `question`, `answer`, `skill`, `correct_answer`, `code`, `createdAt`, `updatedAt`, `image`) VALUES
(1, 'What will be the output of the program?', '[{\"answer\":\"X=0\"},{\"answer\":\"X=1\"},{\"answer\":\"Compilation fails\"},{\"answer\":\"An exception is thrown at runtime\"}]', 4, 2, 'class A \n{\n    final public int GetResult(int a, int b) { return 0; } \n} \nclass B extends A \n{ \n    public int GetResult(int a, int b) {return 1; } \n} \npublic class Test \n{\n    public static void main(String args[]) \n    { \n        B b = new B(); \n        System.out.println(\"x = \" + b.GetResult(0, 1));  \n    } \n}', '2018-09-27 18:47:36', '2018-09-27 18:47:36', ' '),
(2, 'What will be the output of the program?', '[{\"answer\":\"9 7 7 foo 7 7foo\"},{\"answer\":\"72 34 34 foo34 34foo\"},{\"answer\":\"9 7 7 foo34 34foo\"},{\"answer\":\" 72734 f0034 700\"}]', 4, 3, 'class SC2 \n{\n    public static void main(String [] args) \n    {\n        SC2 s = new SC2();\n        s.start();\n    }\n\n    void start() \n    {\n        int a = 3;\n        int b = 4;\n        System.out.print(\" \" + 7 + 2 + \" \");\n        System.out.print(a + b);\n        System.out.print(\" \" + a + b + \" \");\n        System.out.print(foo() + a + b + \" \");\n        System.out.println(a + b + foo());\n    }\n\n    String foo() \n    {\n        return \"foo\";\n    }\n}', '2018-09-27 18:48:45', '2018-09-27 18:48:45', ' '),
(3, 'Which two statements are equivalent?', '[{\"answer\":\"3/2\"},{\"answer\":\"3<2\"},{\"answer\":\"3*4\"},{\"answer\":\"<<2\"}]', 4, 2, '', '2018-09-27 18:50:50', '2018-09-27 18:50:50', ' '),
(4, 'What will be the output of the program?', '[{\"answer\":\"If a is true and b is true then the output is \\\"A && B\\\"\"},{\"answer\":\"If a is true and b is false then the output is \\\"notB\\\"\"},{\"answer\":\"If a is false and b is true then the output is \\\"ELSE\\\"\"},{\"answer\":\"If a is false and b is false then the output is \\\"ELSE\\\"\"}]', 4, 2, 'public void foo( boolean a, boolean b)\n{ \n    if( a ) \n    {\n        System.out.println(\"A\"); /* Line 5 */\n    } \n    else if(a && b) /* Line 7 */\n    { \n        System.out.println( \"A && B\"); \n    } \n    else /* Line 11 */\n    { \n        if ( !b ) \n        {\n            System.out.println( \"notB\") ;\n        } \n        else \n        {\n            System.out.println( \"ELSE\" ) ; \n        } \n    } \n}', '2018-09-27 18:51:53', '2018-09-27 18:51:53', ' '),
(5, 'What will be the output of the program?', '[{\"answer\":\"Zero\"},{\"answer\":\" Twelve\"},{\"answer\":\" Default\"},{\"answer\":\"Compilation fails\"}]', 4, 3, ' Float f = new Float(\"12\"); \nswitch (f) \n{\n    case 12: System.out.println(\"Twelve\"); \n    case 0: System.out.println(\"Zero\"); \n    default: System.out.println(\"Default\"); \n}', '2018-09-27 18:53:46', '2018-09-27 18:53:46', ' '),
(6, 'what will be the output of the program . ', '[{\"answer\":\"finally\"},{\"answer\":\"exception finished\"},{\"answer\":\"finally exception finished\"},{\"answer\":\"Compilation fails\"}]', 4, 2, 'public class Test \n{  \n    public static void aMethod() throws Exception \n    {\n        try /* Line 5 */\n        {\n            throw new Exception(); /* Line 7 */\n        } \n        finally /* Line 9 */\n        {\n            System.out.print(\"finally \"); /* Line 11 */\n        } \n    } \n    public static void main(String args[]) \n    {\n        try \n        {\n            aMethod();  \n        } \n        catch (Exception e) /* Line 20 */\n        {\n            System.out.print(\"exception \"); \n        } \n        System.out.print(\"finished\"); /* Line 24 */\n    } \n}', '2018-09-27 18:54:46', '2018-09-27 18:54:46', ' '),
(7, 'Which statement is true for the class java.util.ArrayList?', '[{\"answer\":\"The elements in the collection are ordered.\"},{\"answer\":\"The collection is guaranteed to be immutable.\"},{\"answer\":\"The elements in the collection are guaranteed to be unique.\"},{\"answer\":\"The elements in the collection are accessed using a unique key.\"}]', 4, 0, '', '2018-09-27 18:56:16', '2018-09-27 18:56:16', ' '),
(8, 'Which is true about a method-local inner class?', '[{\"answer\":\"It must be marked final.\"},{\"answer\":\"It can be marked abstract.\"},{\"answer\":\"It can be marked public.\"},{\"answer\":\"It can be marked static.\"}]', 4, 1, '', '2018-09-27 18:57:23', '2018-09-27 18:57:23', ' '),
(9, 'Which of the following line of code is suitable to start a thread ?', '[{\"answer\":\"Thread t = new Thread(X);\"},{\"answer\":\"Thread t = new Thread(X); t.start();\"},{\"answer\":\"X run = new X(); Thread t = new Thread(run); t.start();\"},{\"answer\":\"Thread t = new Thread(); x.run();\"}]', 4, 2, 'class X implements Runnable \n{ \n    public static void main(String args[]) \n    {\n        /* Missing code? */\n    } \n    public void run() {} \n}', '2018-09-27 18:58:38', '2018-09-27 18:58:38', ' '),
(10, 'What will be the output of the program?', '[{\"answer\":\"Compilation fails\"},{\"answer\":\"An exception occurs at runtime.\"},{\"answer\":\"It prints \\\"Thread one. Thread two.\\\"\"},{\"answer\":\"The output cannot be determined.\"}]', 4, 1, 'class MyThread extends Thread \n{\n    public static void main(String [] args) \n    {\n        MyThread t = new MyThread();\n        t.start();\n        System.out.print(\"one. \");\n        t.start();\n        System.out.print(\"two. \");\n    }\n    public void run() \n    {\n        System.out.print(\"Thread \");\n    }\n}', '2018-09-27 18:59:45', '2018-09-27 18:59:45', ' '),
(11, 'What will be the output of the program (in jdk1.6 or above)?', '[{\"answer\":\"z\"},{\"answer\":\"x z\"},{\"answer\":\"y z\"},{\"answer\":\"Compilation\"}]', 4, 1, 'public class BoolTest \n{\n    public static void main(String [] args) \n    {\n        Boolean b1 = new Boolean(\"false\");\n        boolean b2;\n        b2 = b1.booleanValue();\n        if (!b2) \n        {\n            b2 = true;\n            System.out.print(\"x \");\n        }\n        if (b1 & b2) /* Line 13 */\n        {\n            System.out.print(\"y \");\n        }\n        System.out.println(\"z\");\n    }\n}', '2018-09-27 19:00:31', '2018-09-27 19:00:31', ' '),
(24, 'You can add a row using SQL in a database with which of the following?', '[{\"answer\":\"ADD\"},{\"answer\":\"CREATE\"},{\"answer\":\"INSERT\"},{\"answer\":\"MAKE\"}]', 3, 2, '', '2018-09-28 15:54:59', '2018-09-28 15:54:59', ' '),
(25, 'The SQL WHERE clause:', '[{\"answer\":\"limits the column data that are returned.\"},{\"answer\":\"limits the row data are returned.\"},{\"answer\":\"Both A and B are correct.\"},{\"answer\":\"Neither A nor B are correct.\"}]', 3, 1, '', '2018-09-28 15:56:04', '2018-09-28 15:56:04', ' '),
(26, 'Which of the following is the original purpose of SQL?', '[{\"answer\":\"To specify the syntax and semantics of SQL data definition language\"},{\"answer\":\"To specify the syntax and semantics of SQL manipulation language\"},{\"answer\":\"To define the data structures\"},{\"answer\":\"All of the above.\"}]', 3, 1, '', '2018-09-28 15:56:48', '2018-09-28 15:56:48', ' '),
(27, 'The wildcard in a WHERE clause is useful when?', '[{\"answer\":\"An exact match is necessary in a SELECT statement.\"},{\"answer\":\"An exact match is not possible in a SELECT statement\"},{\"answer\":\"An exact match is necessary in a CREATE statement.\"},{\"answer\":\"An exact match is not possible in a CREATE statement.\"}]', 3, 1, '', '2018-09-28 15:57:41', '2018-09-28 15:57:41', ' '),
(28, 'SQL data definition commands make up a(n) ________\n', '[{\"answer\":\"DML\"},{\"answer\":\"HTML\"},{\"answer\":\"XML\"},{\"answer\":\"DDL\"}]', 3, 3, '', '2018-09-28 15:58:39', '2018-09-28 15:58:39', ' '),
(29, 'The SQL keyword(s) ________ is used with wildcards.', '[{\"answer\":\"LIKE only\"},{\"answer\":\"IN only\"},{\"answer\":\"NOT IN only\"},{\"answer\":\"IN and NOT IN\"}]', 3, 0, '', '2018-09-28 15:59:21', '2018-09-28 15:59:21', ' '),
(30, 'A subquery in an SQL SELECT statement is enclosed in:', '[{\"answer\":\"braces -- {...}.\"},{\"answer\":\"CAPITAL LETTERS.\"},{\"answer\":\"parenthesis -- (...) .\"},{\"answer\":\"brackets -- [...]. \"}]', 3, 2, '', '2018-09-28 16:00:06', '2018-09-28 16:00:06', ' '),
(31, 'Which of the following are the five built-in functions provided by SQL?', '[{\"answer\":\"COUNT, SUM, AVG, MAX, MIN\"},{\"answer\":\"SUM, AVG, MIN, MAX, MULT\"},{\"answer\":\"SUM, AVG, MULT, DIV, MIN\"},{\"answer\":\"SUM, AVG, MIN, MAX, NAME\"}]', 3, 2, '', '2018-09-28 16:00:44', '2018-09-28 16:00:44', ' '),
(32, 'The SQL -92 wildcards are ____ and ____ .   ', '[{\"answer\":\"asterisk (*); percent sign (%)\"},{\"answer\":\"percent sign (%); underscore (_)\"},{\"answer\":\"underscore(_); question mark (?)\"},{\"answer\":\" question mark (?); asterisk (*)\"}]', 3, 1, '', '2018-09-28 16:01:32', '2018-09-28 16:01:32', ' '),
(33, 'When three or more AND and OR conditions are combined, it is easier to use the SQL keyword(s):', '[{\"answer\":\"LIKE only.\"},{\"answer\":\"IN only.\"},{\"answer\":\"NOT IN only.\"},{\"answer\":\"Both IN and NOT IN.\"}]', 3, 3, '', '2018-09-28 16:02:20', '2018-09-28 16:02:20', ' '),
(34, 'A man has Rs. 480 in the denominations of one-rupee notes, five-rupee notes and ten-rupee notes. The number of notes of each denomination is equal. What is the total number of notes that he has?', '[{\"answer\":\"45\"},{\"answer\":\"60\"},{\"answer\":\"75\"},{\"answer\":\"90\"}]', 5, 3, '', '2018-09-28 16:05:01', '2018-09-28 16:05:01', ' '),
(35, 'There are two examinations rooms A and B. If 10 students are sent from A to B, then the number of students in each room is the same. If 20 candidates are sent from B to A, then the number of students in A is double the number of students in B. The number of students in room A is:', '[{\"answer\":\"20\"},{\"answer\":\"80\"},{\"answer\":\"100\"},{\"answer\":\"200\"}]', 5, 2, '', '2018-09-28 16:05:42', '2018-09-28 16:05:42', ' '),
(36, 'Which of the following diagrams indicates the best relation between Travelers, Train and Bus ?', '[{\"answer\":\"A\"},{\"answer\":\"B\"},{\"answer\":\"C\"},{\"answer\":\"D\"}]', 5, 2, '', '2018-09-28 16:21:15', '2018-09-28 16:21:15', '1538134804701.png'),
(37, 'Which of the following diagrams indicates the best relation between Women, Mothers and Engineers ?', '[{\"answer\":\"A\"},{\"answer\":\"B\"},{\"answer\":\"C\"},{\"answer\":\"D\"}]', 5, 0, '', '2018-09-28 16:23:13', '2018-09-28 16:23:13', '1538135054584.png'),
(38, ' Study the following figure and answer the questions given below\n \n How many doctors are both players and artists ?', '[{\"answer\":\"22\"},{\"answer\":\"8\"},{\"answer\":\"3\"},{\"answer\":\"30\"}]', 5, 2, '', '2018-09-28 16:29:27', '2018-09-28 16:29:27', '1538135082127.png'),
(39, 'Select a suitable figure from the four alternatives that would complete the figure matrix.', '[{\"answer\":\"A\"},{\"answer\":\"B\"},{\"answer\":\"C\"},{\"answer\":\"D\"}]', 5, 2, '', '2018-09-28 16:30:25', '2018-09-28 16:30:25', '1538135116951.png'),
(40, 'MOV\' extension refers usually to what kind of file?', '[{\"answer\":\"Image file\"},{\"answer\":\"Animation/movie file\"},{\"answer\":\"Audio file\"},{\"answer\":\"MS Office document\"}]', 5, 1, '', '2018-09-28 16:31:17', '2018-09-28 16:31:17', ' '),
(41, 'Most modern TV\'s draw power even if turned off. The circuit the power is used in does what function?', '[{\"answer\":\"Sound\"},{\"answer\":\"Remote control\"},{\"answer\":\"Color balance\"},{\"answer\":\"High voltage\"}]', 5, 1, '', '2018-09-28 16:32:01', '2018-09-28 16:32:01', ' '),
(42, 'Six friends are sitting in a circle and are facing the centre of the circle. Deepa is between Prakash and Pankaj. Priti is between Mukesh and Lalit. Prakash and Mukesh are opposite to each other.\nWho is sitting right to Prakash ?', '[{\"answer\":\"Mukesh\"},{\"answer\":\"Deepa\"},{\"answer\":\"Pankaj\"},{\"answer\":\"Lalit\"}]', 5, 3, '', '2018-09-28 16:32:56', '2018-09-28 16:32:56', ' '),
(43, ' From his house, Lokesh went 15 km to the North. Then he turned west and covered 10 km. Then he turned south and covered 5 km. Finally turning to the east, he covered 10 km. In which direction is he from his house?', '[{\"answer\":\"East\"},{\"answer\":\"West\"},{\"answer\":\"North\"},{\"answer\":\"South\"}]', 5, 2, '', '2018-09-28 16:33:29', '2018-09-28 16:33:29', ' ');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `question`
--
ALTER TABLE `question`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `question`
--
ALTER TABLE `question`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
