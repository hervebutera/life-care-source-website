const contact_phone = "(855) 345-4567";
const contact_email = "lifecarecommunityutah@gmail.com";
const contact_address = "3977 W 8730 S, West Jordan, Utah, 84088";

window.addEventListener('scroll', function () {
    var navbar = document.getElementById('navbar');
  
    if ( (window.scrollY ) > (navbar.offsetHeight - 80) ) {

        navbar.style.boxShadow = "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)";        
    } else {
        navbar.style.boxShadow = "none";
    }
});

    const mobile_menu = document.getElementById('mobile-menu');
    const menu_open_btn = document.getElementById('menu-open');
    const mobile_menu_bg_blocker = document.getElementById('mobile-menu-bg-blocker');

    menu_open_btn.addEventListener('click', function() {
        mobile_menu.classList.remove('custom-left-full');
        mobile_menu.classList.add('custom-width-full');
        mobile_menu_bg_blocker.classList.remove('hidden')
        mobile_menu_bg_blocker.classList.add('mobile-menu-bg-blocker')
    })

    const menu_close_btn = document.getElementById('menu-close');

    menu_close_btn.addEventListener('click', function() {
        mobile_menu.classList.remove('custom-width-full');
        mobile_menu.classList.add('custom-left-full');
        mobile_menu_bg_blocker.classList.remove('mobile-menu-bg-blocker')
        mobile_menu_bg_blocker.classList.add('hidden')
    })

window.addEventListener('scroll', reveal);               

function reveal() {
    let reveals = document.querySelectorAll('.reveal');
    
    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
            let revealTop = reveals[i].getBoundingClientRect().top;
            let revealPoint = 0;

            if (revealTop < windowHeight - revealPoint) {
                reveals[i].classList.add("arrived");
            } else {
                reveals[i].classList.remove("arrived")
            }
    } 
    
    
}

const chat_open_btn = document.getElementById("chat-open-btn");
const chat = document.getElementById("chat");
const chat_close = document.getElementById("chat-close");
const chat_body = document.getElementById("chat-body");

let chatOpening = false;

chat_open_btn.addEventListener("click", () => {
    if (!chatOpening) {
        chat.classList.toggle("hidden");
        if (!chat.classList.contains("hidden")) {
            chatOpening = true;
            chat_start().then(() => {
                chatOpening = false;
                ask_questions();
            });
        } else {
            chatOpening = false;
        }
    }
});

chat_close.addEventListener("click", () => {
    chat.classList.add("hidden");
    chatOpening = false;
});

const chat_responses = {
    "welcome": ["Hi",
        "I am here to answer questions you may have about Life Care Community.",
        ],
        "questions": {
            "Just saying hi": [
                "Hi",
                "I hope life is good with you.",
                "Feel free to navigate our website to know more.",
            ],
            "What is Life Care Community?": [
                "Life Care Community is an organization dedicated to empowering the lives of individuals with developmental disabilities by providing person-centered care.",
                { linkText: "Learn more on our About Us page", link: `${window.location.origin}/Pages/about-us.html` }
            ],
            "What services do you offer?": [
                "Services we offer include residential support, adult educational day services, respite care, host homes and more others.",
                "Check out more of our services from the services menu.",
            ],
            "How can I donate?": [
                "Your donations help us provide better services and support for individuals with developmental disabilities.",
                { linkText: "Visit our Donate page to make a contribution", link: `${window.location.origin}/Pages/donate.html` }
            ],
            "How do I contact you?": [
                `You can send us a message on ${contact_email}`,
                "You can also contact us through our contact us page.",
                { linkText: "Visit our contact us page", link: `${window.location.origin}/Pages/contact-us.html` }
            ],
        },
    
}

const chat_start = () => {
    return new Promise((resolve) => {
        chat_body.innerHTML = "";
        chat_responses.welcome.map((response, index) => {
            setTimeout(() => {
                chat_body.innerHTML += `
                <div class="chat-responses">
                    <span
                        class="chat-response-item"
                    >
                        ${response}
                    </span>
                </div>
                `
                
              if (index === chat_responses.welcome.length - 1) {
                resolve();
              }
            }, (index + 1) * 400)
        })
    })
}
const ask_questions = () => {
    setTimeout(() => {
        chat_body.innerHTML += `
        <div class="chat-responses">
            <span class="chat-response-item questions-starter" >
                How else can I assist you today?
            </span>
        </div>
        <div class="chat-responses ask-questions">        
            <span
                class="chat-question-item questions-unroll"
            >
                Ask a question
            </span>
        </div>` 
        chat_body.scrollTop = chat_body.scrollHeight;

        let length = document.querySelectorAll(".ask-questions").length;
        let length2 = document.querySelectorAll(".questions-unroll").length;
        
        document.querySelectorAll('.questions-unroll')[length2 - 1].addEventListener('click', function () {
            document.querySelectorAll(".ask-questions")[length - 1].style.display = 'none';
            questions_display();
        });
    }, 400)
}
const questions_display = () => {
    setTimeout(() => {
        chat_body.innerHTML += `
        <div class="chat-responses">
            <h6 class="chat-questions-notifier">Choose a question</h6>
        </div>
        `
        Object.keys(chat_responses.questions).map((question) => {
            chat_body.innerHTML += `
            <div class="chat-responses">        
                <span
                    class="chat-question-item question-item"
                    data-question="${question}"
                >
                    ${question}
                </span>
            </div>`
        }) 
        chat_body.scrollTop = chat_body.scrollHeight;

        document.querySelectorAll('.question-item').forEach(item => {
            item.addEventListener('click', function() {
                const question = this.getAttribute('data-question');
                onQuestionClick(question).then(ask_questions);
            });
        });

    }, 400)
    
}

const onQuestionClick = (question_key) => {
    return new Promise((resolve) => {
        const length = chat_responses.questions[question_key].length;
        setTimeout(() => {
            chat_body.innerHTML += `
                <div class="chat-sent-questions">
                    <span class="chat-sent-question-item">
                        ${question_key}
                    </span>
                </div>
            `
            chat_body.scrollTop = chat_body.scrollHeight;
        }, 400)
        chat_responses.questions[question_key].map((response, index) => {
            setTimeout(() => {
                if ((typeof response) === "object") {
                    chat_body.innerHTML += `
                        <div class="chat-responses">
                            <span
                                class="chat-response-item"
                            >
                                <a class="chat-response-link" href="${response.link}">${response.linkText}</a>
                            </span>
                        </div>
                        `
                } else {
                    chat_body.innerHTML += `
                        <div class="chat-responses">
                            <span
                                class="chat-response-item"
                            >
                                ${response}
                            </span>
                        </div>
                        `
                }
                chat_body.scrollTop = chat_body.scrollHeight;
                if (index === length - 1) {
                    resolve();
              }
            }, (index + 2) * 400)
        })
    })
}

// window.onload = () => {
    document.querySelectorAll(".contact-phone").forEach(item => {
        item.innerHTML = contact_phone;
    })
    document.querySelectorAll(".contact-email").forEach(item => {
        item.innerHTML = contact_email;
    })
    document.querySelectorAll(".contact-address").forEach(item => {
        item.innerHTML = contact_address;
    })
// }
