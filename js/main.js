const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')
const covidTracker = document.querySelector('#covid-tracker')
const covidContent = document.querySelector('#covid-tracker-content')

const expenseTracker = document.querySelector('#expense-tracker')
const expenseContent = document.querySelector('#expense-tracker-content')

const routerStore = document.querySelector('#router-store')
const routerContent = document.querySelector('#router-content')

const animation = document.querySelector('#animation')
const animationContent = document.querySelector('#animation-content')

const quiz = document.querySelector('#quiz')
const quizContent = document.querySelector('#quiz-content')

const pet = document.querySelector('#pet')
const petContent = document.querySelector('#pet-content')

const landing = document.querySelector('#landing')
const landingContent = document.querySelector('#landing-content')


about.addEventListener('click', () => {
  const aboutBox = new WinBox({
    title: 'About Me',
    // modal: true,
    width: '400px',
    height: '400px',
    // top: 50,
    // right: 50,
    // bottom: 50,
    // left: 50,
    mount: aboutContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

contact.addEventListener('click', () => {
  const contactBox = new WinBox({
    title: 'Contact Me',
    width: '400px',
    height: '400px',
    top: 100,
    // right: 50,
    // bottom: 50,
    left: 50,
    mount: contactContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

covidTracker.addEventListener('click', () => {
    const contactBox = new WinBox({
      title: 'covid-19 Virus tracker App',
      width: '400px',
      height: '400px',
      top: 250,
    //   right: 100,
    //   bottom: 500,
      left: 150,
      mount: covidContent,
      onfocus: function () {
        this.setBackground('#00aa00')
      },
      onblur: function () {
        this.setBackground('#777')
      },
    })
  })

  expenseTracker.addEventListener('click', () => {
    const contactBox = new WinBox({
      title: 'Expense tracker App',
      width: '400px',
      height: '400px',
      top: 250,
    //   right: 100,
    //   bottom: 500,
      left: 250,
      mount: expenseContent,
      onfocus: function () {
        this.setBackground('#00aa00')
      },
      onblur: function () {
        this.setBackground('#777')
      },
    })
  })

  routerStore.addEventListener('click', () => {
    const contactBox = new WinBox({
      title: 'Expense tracker App',
      width: '400px',
      height: '400px',
      top: 150,
    //   right: 100,
    //   bottom: 500,
      left: 350,
      mount: routerContent,
      onfocus: function () {
        this.setBackground('#00aa00')
      },
      onblur: function () {
        this.setBackground('#777')
      },
    })
  })

  animation.addEventListener('click', () => {
    const contactBox = new WinBox({
      title: 'Expense tracker App',
      width: '400px',
      height: '400px',
      top: 250,
    //   right: 100,
    //   bottom: 500,
      left: 150,
      mount: animationContent,
      onfocus: function () {
        this.setBackground('#00aa00')
      },
      onblur: function () {
        this.setBackground('#777')
      },
    })
  })

  quiz.addEventListener('click', () => {
    const contactBox = new WinBox({
      title: 'Expense tracker App',
      width: '400px',
      height: '400px',
      top: 200,
    //   right: 100,
    //   bottom: 500,
      left: 150,
      mount: quizContent,
      onfocus: function () {
        this.setBackground('#00aa00')
      },
      onblur: function () {
        this.setBackground('#777')
      },
    })
  })

  pet.addEventListener('click', () => {
    const contactBox = new WinBox({
      title: 'Expense tracker App',
      width: '400px',
      height: '400px',
      top: 150,
    //   right: 100,
    //   bottom: 500,
      left: 450,
      mount: petContent,
      onfocus: function () {
        this.setBackground('#00aa00')
      },
      onblur: function () {
        this.setBackground('#777')
      },
    })
  })

landing.addEventListener('click', () => {
    const contactBox = new WinBox({
      title: 'Expense tracker App',
      width: '400px',
      height: '400px',
      top: 100,
    //   right: 100,
    //   bottom: 500,
      left: 150,
      mount: landingContent,
      onfocus: function () {
        this.setBackground('#00aa00')
      },
      onblur: function () {
        this.setBackground('#777')
      },
    })
  })