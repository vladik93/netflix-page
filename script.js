let buttons = document.querySelectorAll('section#bottom .panel .question');



let faq = [
    { question: "What is Netflix?", answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt doloremque eligendi rerum nulla hic excepturi minus ex. Beatae deserunt rem eveniet nemo perspiciatis, sequi accusamus nihil adipisci ducimus doloremque dolores sed dignissimos nulla." },
    { question: "How much does Netflix cost?", answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt doloremque eligendi rerum nulla hic excepturi minus ex. Beatae deserunt rem eveniet nemo perspiciatis, sequi accusamus nihil adipisci ducimus doloremque dolores sed dignissimos nulla." },
    { question: "Where can I watch?", answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt doloremque eligendi rerum nulla hic excepturi minus ex. Beatae deserunt rem eveniet nemo perspiciatis, sequi accusamus nihil adipisci ducimus doloremque dolores sed dignissimos nulla." },
    { question: "How do I cancel?", answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt doloremque eligendi rerum nulla hic excepturi minus ex. Beatae deserunt rem eveniet nemo perspiciatis, sequi accusamus nihil adipisci ducimus doloremque dolores sed dignissimos nulla." },
    { question: "What can I watch on Netflix?", answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt doloremque eligendi rerum nulla hic excepturi minus ex. Beatae deserunt rem eveniet nemo perspiciatis, sequi accusamus nihil adipisci ducimus doloremque dolores sed dignissimos nulla." },
    { question: "Is Netflix good for kids?", answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt doloremque eligendi rerum nulla hic excepturi minus ex. Beatae deserunt rem eveniet nemo perspiciatis, sequi accusamus nihil adipisci ducimus doloremque dolores sed dignissimos nulla." },
]

// buttons.forEach((btn, i) => {
//     btn.addEventListener('click', event => {
//         clicked = i;
//         if(i == clicked) {
//             document.getElementsByClassName('answer')[i].classList.add('expanded');
//         } else if(i !== clicked) {
//             document.getElementsByClassName('answer')[i].classList.remove('expanded');
//         }
       
//         console.log(btn);
//     });
// });

let togglePanel = (id) => {
    let numOfPanels = document.getElementsByClassName('question').length;
    for(let i = 0; i < numOfPanels; i++) {
        if(i === id) {
            document.getElementsByClassName('answer')[i].classList.toggle('expanded');
        } else {
            document.getElementsByClassName('answer')[i].classList.remove('expanded');
        }
    }
}
