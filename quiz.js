document.addEventListener('DOMContentLoaded',funtion(){
    let quizData=null;
    fetch('quiz-data.json' )
    .then(Response=>Response.json())
    .then(data=>{
        quizData=data;
        initSections();
    })
    .catch(error=>console.error('Error loading quiz data',error));
})

