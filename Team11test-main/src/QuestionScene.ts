/* eslint-disable jsdoc/require-param-description */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-multi-spaces */
/* eslint-disable class-methods-use-this */
import Button from './Button.js';
import CanvasUtil from './CanvasUtil.js';
import CoinEarner from './CoinEarner.js';
import Level from './Level.js';
import Mouse from './Mouse.js';
import MouseListener from './MouseListener.js';
import Scene from './Scene.js';

export default class QuestionScene extends Scene {
  private buttonA: Button;

  private questions: { question: string, answers: { a: string, b: string, c: string, d: string }, correctAnswer: string }[] = [
    {
      question: 'What is the best way to protect your personal information online?',
      answers: {
        a: 'Posting it on social media',
        b: 'Sharing it with strangers',
        c: 'Keeping it private and only sharing it with trusted sources',
        d: 'Writing it down on a piece of paper and leaving it in a public place',
      },
      correctAnswer: 'c',
    },
    {
      question: 'What is the name of the type of email that tries to trick you into giving away personal information?',
      answers: {
        a: 'A friendly email',
        b: 'A spam email',
        c: 'A phishing email',
        d: 'A shopping email',
      },
      correctAnswer: 'c',
    },
    {
      question: 'Why is it important to use a strong password?',
      answers: {
        a: 'It is easier to remember',
        b: 'It is harder for others to guess or hack',
        c: 'It will make your computer run faster',
        d: 'It will make your online accounts more interesting',
      },
      correctAnswer: 'b',
    },
    {
      question: 'What should you do if you come across something online that makes you feel uncomfortable or unsafe?',
      answers: {
        a: 'Ignore it',
        b: 'Send it to your friends',
        c: 'Tell a trusted adult',
        d: 'Share it on social media',
      },
      correctAnswer: 'c',
    },
    {
      question: 'What is the name of the practice of pretending to be someone else online?',
      answers: {
        a: 'Identity swap',
        b: 'Identity theft',
        c: 'Identity fraud',
        d: 'Identity impersonation',
      },
      correctAnswer: 'd',
    },
    {
      question: 'What is a strong password?',
      answers: {
        a: '123456',
        b: 'qwerty',
        c: 'MyNameIs123',
        d: 'CorrectHorseBatteryStaple',
      },
      correctAnswer: 'd',
    },
    {
      question: 'Why is it important to keep your personal information private?',
      answers: {
        a: 'So no one can copy your homework',
        b: 'So you can be the only one to play your favorite video game',
        c: "So people can't steal your identity or hack into your accounts",
        d: 'So you can be the only one with your name',
      },
      correctAnswer: 'c',
    },
    {
      question: "What should you do if you receive an email from someone you don't know?",
      answers: {
        a: 'Reply and ask who they are',
        b: 'Open any attachments or click on any links',
        c: 'Delete the email',
        d: 'Forward the email to your friends',
      },
      correctAnswer: 'c',
    },
    {
      question: 'What is a phishing email?',
      answers: {
        a: 'An email from a friend',
        b: 'An email from a company you know',
        c: 'An email that tries to trick you into giving away personal information',
        d: 'An email from a celebrity',
      },
      correctAnswer: 'c',
    },
    {
      question: 'What is a good practice when using public Wi-Fi?',
      answers: {
        a: 'Sharing your personal information with everyone on the network',
        b: 'Downloading large files',
        c: 'Using a Virtual Private Network (VPN)',
        d: 'Turning off your firewall',
      },
      correctAnswer: 'c',
    },
    {
      question: 'Why is it important to keep your computer and mobile devices updated?',
      answers: {
        a: 'To make them run faster',
        b: 'To get new features and apps',
        c: 'To protect against security vulnerabilities and malware',
        d: 'All of the above',
      },
      correctAnswer: 'c',
    },
    {
      question: 'What should you do if you suspect that your personal information has been compromised?',
      answers: {
        a: 'Ignore it',
        b: 'Wait and see if anything happens',
        c: 'Contact your bank and credit card companies, and change your passwords',
        d: 'Call your friends and tell them to change their passwords',
      },
      correctAnswer: 'c',
    },
    {
      question: 'What should you do if you receive a suspicious text message or phone call?',
      answers: {
        a: 'Provide the person with your personal information',
        b: 'Ignore it',
        c: 'Report it to a trusted adult or the authorities',
        d: 'Reply and ask for more information',
      },
      correctAnswer: 'c',
    },
    {
      question: 'What is the name of the program that can help you manage your passwords?',
      answers: {
        a: 'Password manager',
        b: 'Keylogger',
        c: 'Firewall',
        d: 'Antivirus',
      },
      correctAnswer: 'a',
    },
    {
      question: 'What is the name of the act of unauthorized access to a computer or network?',
      answers: {
        a: 'Hacking',
        b: 'Phishing',
        c: 'Identity theft',
        d: 'Virus attack',
      },
      correctAnswer: 'a',
    },
  ];

  private randomQuestion: string;

  private image: HTMLImageElement;

  private answerAImage: HTMLImageElement;

  private answerBImage: HTMLImageElement;

  private answerCImage: HTMLImageElement;

  private answerDImage: HTMLImageElement;

  private answerA: string;

  private answerB: string;

  private answerC: string;

  private answerD: string;

  private answerQuestion: string;

  private randomIndex: number;

  private buttonB: Button;

  private buttonC: Button;

  private buttonD: Button;

  private mouse: Mouse;

  private buttons: Button[] = [];

  private givenAnswer: string;

  private starting: boolean;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.image = CanvasUtil.loadNewImage('./assets/questionsBG.png');
    this.randomIndex = Math.floor(Math.random() * this.questions.length);
    this.randomQuestion = this.questions[this.randomIndex].question;
    this.answerQuestion = this.questions[this.randomIndex].correctAnswer;
    this.answerAImage = CanvasUtil.loadNewImage('./assets/A.png');
    this.answerBImage = CanvasUtil.loadNewImage('./assets/B.png');
    this.answerCImage = CanvasUtil.loadNewImage('./assets/C.png');
    this.answerDImage = CanvasUtil.loadNewImage('./assets/D.png');
    this.answerA = this.questions[this.randomIndex].answers.a;
    this.answerB = this.questions[this.randomIndex].answers.b;
    this.answerC = this.questions[this.randomIndex].answers.c;
    this.answerD = this.questions[this.randomIndex].answers.d;
    this.buttonA = new Button(0, this.answerAImage, this.image.width - 650, this.image.height - 250);
    this.buttons.push(this.buttonA);
    this.buttonB = new Button(1, this.answerBImage, this.image.width - 640, this.image.height - 175);
    this.buttons.push(this.buttonB);
    this.buttonC = new Button(2, this.answerCImage, this.image.width - 670, this.image.height - 92);
    this.buttons.push(this.buttonC);
    this.buttonD = new Button(3, this.answerDImage, this.image.width - 650, this.image.height - 10);
    this.buttons.push(this.buttonD);
    this.mouse = new Mouse();
    this.starting = false;
  }

  /**
   *
   * @param mouseListener mouse
   */
  public processInput(mouseListener: MouseListener): void {
    this.mouse.move(mouseListener.getMousePosition().x, mouseListener.getMousePosition().y);
    if (mouseListener.buttonPressed(MouseListener.BUTTON_LEFT)) {
      this.buttons.forEach((button: Button) => {
        if (this.mouse.collidesWithButton(button)) {
          if (button.getButtonCode() === 0) {
            this.givenAnswer = 'a';
          }
          if (button.getButtonCode() === 1) {
            this.givenAnswer = 'b';
          }
          if (button.getButtonCode() === 2) {
            this.givenAnswer = 'c';
          }
          if (button.getButtonCode() === 4) {
            this.givenAnswer = 'd';
          }
          if (this.givenAnswer === this.answerQuestion) {
            console.log('good answer');
            this.starting = true;
            CoinEarner.score += 1;
          } else {
            console.log('bad answer');
            this.starting = true;
            CoinEarner.score -= 1;
          }
        }
        return false;
      });
    }
  }

  /**
   *
   * @param elapsed yes
   * @returns yes
   */
  public update(elapsed: number): Scene {
    if (this.starting) return new Level(this.maxX, this.maxY);
    return null;
  }

  /**
   *
   * @param canvas
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.clearCanvas(canvas);
    CanvasUtil.fillCanvas(canvas, 'black');
    CanvasUtil.drawImage(canvas, this.image, (canvas.width - this.image.width) / 2, (canvas.height - this.image.height) / 2);
    CanvasUtil.writeTextToCanvas(canvas, `${this.randomQuestion}`, this.image.width - 220, this.image.height - 300, 'center', 'serif', 20, 'red');
    CanvasUtil.writeTextToCanvas(canvas, `${this.answerA}`, this.image.width - 220, this.image.height - 200, 'center', 'serif', 20, 'red');
    CanvasUtil.writeTextToCanvas(canvas, `${this.answerB}`, this.image.width - 220, this.image.height - 125, 'center', 'serif', 20, 'red');
    CanvasUtil.writeTextToCanvas(canvas, `${this.answerC}`, this.image.width - 220, this.image.height - 50, 'center', 'serif', 20, 'red');
    CanvasUtil.writeTextToCanvas(canvas, `${this.answerD}`, this.image.width - 220, this.image.height + 25, 'center', 'serif', 20, 'red');
    CanvasUtil.writeTextToCanvas(canvas, `Score: ${CoinEarner.score}`, 100, 40, 'center', 'serif', 40, 'red');
    this.buttonA.render(canvas);
    this.buttonB.render(canvas);
    this.buttonC.render(canvas);
    this.buttonD.render(canvas);
    this.mouse.render(canvas);
  }
}
