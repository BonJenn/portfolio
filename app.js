const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');


function pageTransitions() {
    // Button click active class
    for(let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelector('.active-btn');
            if(currentBtn){
                currentBtn.classList.remove('active-btn');
            }
            this.classList.add('active-btn');

            // Get the data-id attribute of the clicked control
            const id = this.dataset.id;
            if (id) {
                // Remove 'active' class from all sections
                sections.forEach((section) => {
                    section.classList.remove('active');
                });

                // Add 'active' class to the corresponding section
                const element = document.getElementById(id);
                if (element) {
                    element.classList.add('active');
                }
            }
        });
    }
}

pageTransitions();
